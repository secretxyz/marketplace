import axios from "axios";
import { active } from "d3";
import { getAuthToken, setAccount, setAuthToken } from "../components/Helpers/Utils";
import accountStore from "../store/account.store";

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

    async getCollections(page, pageSize, category) {
        let params = {
            "pagination[page]": page,
            "pagination[pageSize]": pageSize || this.pageSize,
            "populate[nfts][count]": true
        };

        if (category === "trending") {
            params = {
                ...params,
                "sort[daily_volume]": "desc",
            }
        } else if (category === "top") {
            params = {
                ...params,
                "sort[total_volume]": "desc",
            }
        } else {
            params = {
                ...params,
                "filters[category]": category,
                "sort[total_volume]": "desc",
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

    async getRafflesWithFilters(page, category) {
        let filters;
        switch (category) {
            case 0:
                filters = {
                    "filters[status]": "active"
                };
                break;
            case 1:
                filters = {
                    "filters[status]": "active",
                };
                break;
            case 2:
                filters = {
                    "filters[status][$in]": ["canceling", "canceled", "raffling", "raffled"],
                    "sort[raffle_end_datetime]": "desc",
                };
                break;
        }

        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "sort[raffle_end_datetime]": "asc",
                    "populate[raffler]": true,
                    "populate[nft]": true,
                    ...filters,
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

    async getCollected(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[owner]": id,
                    "populate[owner]": true,
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

    async getRaffleItems(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[raffler]": id,
                    // "sort[status]": "asc",
                    "sort[raffle_end_datetime]": "desc",
                    "populate[nft]": true,
                    "populate[raffler]": true,
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
                    "sort[createdAt]": "desc",
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

    async getNftsWithFilters(page, filters) {
        // To Do: implement filters
        try {
            const res = await axios.get(`${this.baseUrl}/api/nfts`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "populate[owner]": true,
                }
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

    async createRaffle(data) {
        // console.log(data);
        try {
            const res = await axios.post(`${this.baseUrl}/api/raffle`, data, { headers: this.headers() })
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createRaffleTicket(data) {
        // console.log(data);
        try {
            const res = await axios.post(`${this.baseUrl}/api/raffle-ticket`,
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
            const res = await axios.get(`${this.baseUrl}/api/raffle/draw-nft/${id}`,
                { headers: this.headers() }
            )
            return res.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    async drawPrizeWithRaffleId(id) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffle/draw-prize/${id}`,
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
}


export default new SecretApi();