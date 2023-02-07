import axios from "axios";
import { active } from "d3";
import {
    A_Z, Z_A,
    LIKES_HIGH_TO_LOW, LIKES_LOW_TO_HIGH,
    RAFFLES_HIGH_TO_LOW, RAFFLES_LOW_TO_HIGH,
    TICKET_PRICE_HIGH_TO_LOW, TICKET_PRICE_LOW_TO_HIGH,
} from "../components/Common/constants";
import { getAuthChannel, getAuthToken, setAccount, setAuthToken } from "../components/Helpers/Utils";
import accountStore from "../store/account.store";

const getFilters = (filter) => {
    let filters = {
        "filters[name][$notNull]": true
    };

    if (filter) {
        if (filter.search.length > 0) {
            filters = {
                ...filters,
                "filters[name][$containsi]": filter.search.trimStart()
            }
        }
        switch (Number(filter.order)) {
            case A_Z:
                filters = {
                    ...filters,
                    "sort[0]": "name:asc"
                }
                break;
            case Z_A:
                filters = {
                    ...filters,
                    "sort[0]": "name:desc"
                }
                break;
            case LIKES_HIGH_TO_LOW:
                filters = {
                    ...filters,
                    "sort[0]": "likes.count:desc"
                }
                break;
            case LIKES_LOW_TO_HIGH:
                filters = {
                    ...filters,
                    "sort[0]": "likes.count:asc"
                }
                break;
            case RAFFLES_HIGH_TO_LOW:
                filters = {
                    ...filters,
                    "sort[0]": "raffles.count:desc"
                }
                break;
            case RAFFLES_LOW_TO_HIGH:
                filters = {
                    ...filters,
                    "sort[0]": "raffles.count:asc"
                }
                break;
            case TICKET_PRICE_HIGH_TO_LOW:
                filters = {
                    ...filters,
                    "sort[0]": "ticket_price:desc"
                }
                break;
            case TICKET_PRICE_LOW_TO_HIGH:
                filters = {
                    ...filters,
                    "sort[0]": "ticket_price:asc"
                }
                break;
            default:
                filters = {
                    ...filters,
                    "sort[10]": "id:asc"
                }
                break;
        }
    }
    return filters;
}
class SecretApi {
    baseUrl = process.env.NODE_ENV == "production" ? "https://secretmarket.xyz:2096" : "http://192.168.1.20:1337";
    timeout = 30000;
    pageSize = 20;

    headers() {
        return {
            // "Accept": "application/json",
            // "Content-Type": "application/json",
            "Authorization": getAuthToken()
        }
    }

    handleError(error) {
        let err = error?.response?.data?.error;
        if (err?.message === "WrongToken") {
            // logout
            setAuthToken(null);
            setAccount(null);
            accountStore.setAuthToken(null);
            accountStore.setAccount(null);
        }
        return { message: err.message }
    }

    // Homepage
    async getBannerCollections() {
        try {
            const res = await axios.get(`${this.baseUrl}/api/collections`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 10,
                    "filters[homepage_banner]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getTopRafflers() {
        try {
            const res = await axios.get(`${this.baseUrl}/api/top-rafflers`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getFaqs() {
        try {
            const res = await axios.get(`${this.baseUrl}/api/faqs`, {
                params: {
                    "sort[category]": "asc",
                    "sort[number]": "asc",
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    async getCollections(page, pageSize, category) {
        let params = {
            "pagination[page]": page,
            "pagination[pageSize]": pageSize || this.pageSize,
            "populate[nfts][count]": true
        };

        if (category === "trending") {
            params = {
                ...params,
                "filters[daily_volume][$notNull]": true,
                "sort[0]": "daily_volume:desc",
            }
        } else if (category === "top") {
            params = {
                ...params,
                "filters[total_volume][$notNull]": true,
                "sort[0]": "total_volume:desc",
            }
        } else {
            params = {
                ...params,
                "filters[category]": category,
                "filters[total_volume][$notNull]": true,
                "sort[0]": "total_volume:desc",
            }
        }
        try {
            const res = await axios.get(`${this.baseUrl}/api/collections`, { params });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getRafflesWithFilters(category, filter, page) {
        let filters;
        switch (category) {
            case "featured":
                filters = {
                    "filters[featured]": true,
                    "filters[status]": "active",
                    "sort[1]": "raffle_end_datetime:asc",
                };
                break;
            case "all":
                filters = {
                    "filters[status]": "active",
                    "sort[1]": "raffle_end_datetime:asc",
                };
                break;
            case "past":
                filters = {
                    "filters[status][$in]": ["canceling", "canceled", "raffling", "raffled"],
                    "sort[1]": "raffle_end_datetime:desc",
                };
                break;
        }

        let filters1 = getFilters(filter);

        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "populate[raffler]": true,
                    "populate[nft]": true,
                    ...filters,
                    ...filters1,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getRafflesWithTokenId(tokenid, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[nft_tokenid]": tokenid,
                    "sort[raffle_end_datetime]": "desc",
                    "populate[raffler]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getFeaturedRaffles(category) {
        let filters;
        if (!category) {
            filters = { "filters[homepage_banner]": true };
        } else {
            filters = { "filters[featured]": true };
        }

        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 10,
                    "filters[status]": "active",
                    "sort[raffle_end_datetime]": "asc",
                    "populate[raffler]": true,
                    "populate[nft]": true,
                    ...filters
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getFeaturedNfs() {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 6,
                    "filters[owner]": id,
                    "populate[owner]": true,
                    "populate[collection]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getFeaturedAuctions() {

    }

    // Profile page
    async refreshProfile(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/account/refresh/${id}`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async likeProfile(id) {
        try {
            const res = await axios.put(`${this.baseUrl}/api/account/like/${id}`, null, {
                headers: this.headers()
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async reportProfile(id) {

    }

    async getProfileInfo(wallet) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/account/${wallet}`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateProfile(data) {
        try {
            const res = await axios.put(`${this.baseUrl}/api/account/update-me`, data, {
                headers: this.headers()
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getCollected(id, filter, page) {
        let filters = getFilters(filter);
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[owner]": id,
                    "populate[owner]": true,
                    "populate[raffles][count]": true,
                    "populate[likes][count]": true,
                    ...filters
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getCreated(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[creator]": id,
                    "populate[creator]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getCreatedCollections(issuer, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/collections`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[issuer]": issuer
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getRaffleItems(id, filter, page) {
        let filters = getFilters(filter);
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[raffler]": id,
                    "sort[0]": "raffle_end_datetime:desc",
                    "populate[nft]": true,
                    "populate[raffler]": true,
                    "filters[status][$notIn][0]": "canceled",
                    "filters[status][$notIn][1]": "raffling",
                    "filters[status][$notIn][2]": "raffled",
                    ...filters
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getRaffleTicketItems(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffle-tickets`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[buyer]": id,
                    "sort[0]": "createdAt:desc",
                    // "sort[raffle_end_datetime]": "desc",
                    "populate[raffle][populate][nft]": true,
                    "populate[raffle][populate][raffler]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // NftDetails

    async getNftsWithFilters(page, category, filter) {
        // To Do: implement filters
        let filters = getFilters(filter);
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "populate[owner]": true,
                    ...filters
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getSimilarNfts(tokenid, collectionid, pageSize, reverse) {
        let params = {
            "pagination[page]": 1,
            "pagination[pageSize]": pageSize,
            "filters[nft_tokenid][$ne]": tokenid,
            "populate[raffles][filters][status]": "active",
            "populate[raffles][populate][raffler]": true,
            "populate[owner]": true,
            "filters[raffles][status]": "active",
        }

        if (!reverse) {
            params = {
                ...params,
                "filters[collection]": collectionid,
            }
        } else {
            params = {
                ...params,
                "filters[collection][id][$ne]": collectionid,
            }
        }
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getNftWithTokenID(tokenid, raffleid) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nft/${tokenid}?raffleid=${raffleid}`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getNftOffers(tokenid) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nft/offers/${tokenid}`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createRaffle(data) {
        // console.log(data);
        try {
            const res = await axios.post(`${this.baseUrl}/api/raffle/${getAuthChannel()}`, data, { headers: this.headers() })
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createRaffleTicket(data) {
        // console.log(data);
        try {
            const res = await axios.post(`${this.baseUrl}/api/raffle-ticket/${getAuthChannel()}`,
                data,
                { headers: this.headers() }
            )
            return res.data;
        } catch (error) {
            this.handleError(error);
            return null;
        }
    }

    async getRaffleBuyers(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffle-ticket/buyers/${id}`);
            return res.data;
        } catch (error) {
            this.handleError(error);
            return null;
        }
    }

    async getRaffleTransactions(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffle-tickets`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[raffle]": id,
                    "populate[buyer]": true,
                    "sort[createdAt]": "desc"
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async drawNftWithRaffleId(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffle/draw-nft/${id}/${getAuthChannel()}`,
                { headers: this.headers() }
            )
            return res.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    async drawPrizeWithRaffleId(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffle/draw-prize/${id}/${getAuthChannel()}`,
                { headers: this.headers() }
            )
            return res.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    async refreshNft(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nft/refresh/${id}`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async likeNft(id) {

    }

    async reportNft(id) {

    }

    // Collection
    async getCollectionWithSlug(slug) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/collection/${slug}`);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getCollectionNfts(collectionId, page, params) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[collection]": collectionId,
                    "populate[owner]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // Drops

    async getDrops(page, category) {
        let params;
        if (category == "upcoming") {
            params = {
                "sort[mint_start_datetime]": "desc",
                "filters[mint_start_datetime][$gte]": new Date(),
            }
        } else if (category == "active") {
            params = {
                "sort[mint_end_datetime]": "asc",
                "filters[mint_start_datetime][$lte]": new Date(),
                "filters[mint_end_datetime][$gte]": new Date(),
            }
        } else if (category == "past") {
            params = {
                "sort[mint_end_datetime]": "asc",
                "filters[mint_end_datetime][$lte]": new Date(),
            }
        }
        try {
            const res = await axios.get(`${this.baseUrl}/api/drops`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "populate[picture_url]": true,
                    "populate[banner_picture_url]": true,
                    "populate[creator]": true,
                    ...params
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // Notifications

    async getNotifications(page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/notifications`, {
                headers: this.headers(),
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": 10,
                    "filters[confirmed]": false,
                    "populate[raffle]": true,
                    "populate[raffle_ticket]": true,
                    "populate[from]": true,
                    "populate[nft][fields][0]": "name",
                    "populate[nft][fields][1]": "nft_tokenid",
                    "populate[nft][fields][2]": "picture_url",
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async confirmNotification(id) {
        try {
            const res = await axios.put(`${this.baseUrl}/api/notification/${id}`, null, {
                headers: this.headers(),
            });
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    async getActivities(page, filter) {
        let filters;
        if (filter.create) {
            filters = {
                ...filters,
                "filters[activity][$in][0]": "raffle-create"
            }
        }
        if (filter.ticket) {
            filters = {
                ...filters,
                "filters[activity][$in][1]": "raffle-ticket"
            }
        }
        if (filter.winner) {
            filters = {
                ...filters,
                "filters[activity][$in][2]": "raffle-winner"
            }
        }
        if (filter.end) {
            filters = {
                ...filters,
                "filters[activity][$in][3]": "raffle-end"
            }
        }
        if (filter.cancel) {
            filters = {
                ...filters,
                "filters[activity][$in][4]": "raffle-cancel"
            }
        }
        if (filter.keyword) {
            filters = {
                ...filters,
                "filters[nft][name][$containsi]": filter.keyword
            }
        }

        try {
            const res = await axios.get(`${this.baseUrl}/api/activities`, {
                headers: this.headers(),
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "populate[raffle]": true,
                    "populate[raffle_ticket]": true,
                    "populate[from]": true,
                    "populate[nft][fields][0]": "name",
                    "populate[nft][fields][1]": "nft_tokenid",
                    "populate[nft][fields][2]": "picture_url",
                    "sort[0]": "createdAt:desc",
                    ...filters
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getSearchNftsInHeader(keyword) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 5,
                    "filters[name][$containsi]": keyword,
                    // "sort[0]": "name",
                }
            });

            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getSearchCollectionsInHeader(keyword) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/collections`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 5,
                    "filters[name][$containsi]": keyword,
                    // "sort[0]": "name",
                }
            });

            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getSearchProfilesInHeader(keyword) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/accounts`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 5,
                    "filters[username][$containsi]": keyword,
                }
            });

            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    async sendMessage(data) {
        try {
            const res = await axios.post(`${this.baseUrl}/api/messages`, { data });
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}


export default new SecretApi();