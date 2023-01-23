import axios from "axios";
import { active } from "d3";
import { getAuthToken, setAccount, setAuthToken } from "../components/Helpers/Utils";
import accountStore from "../store/account.store";

class SecretApi {
    baseUrl = "http://localhost:1337";
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
        console.log(err);
        if (err?.message === "WrongToken") {
            // logout
            setAuthToken(null);
            setAccount(null);
            accountStore.setAuthToken(null);
            accountStore.setAccount(null);
        }
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

    async getFeaturedRaffles() {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": 1,
                    "pagination[pageSize]": 10,
                    "filters[homepage_banner]": true,
                    "filters[status]": "active",
                    "sort[raffle_end_datetime]": "asc",
                    "populate[raffler]": true,
                    "populate[nft]": true,
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

    }

    async reportProfile(id) {

    }

    async getProfileInfo(wallet) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/accounts`, {
                params: {
                    "filters[wallet]": wallet,
                },
                timeout: this.timeout,
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateProfile() {
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

    async getRaffles(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[raffler]": id,
                    "sort[status]": "asc",
                    "sort[raffle_end_datetime]": "asc",
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

    // NftDetails

    async getNftWithTokenID(tokenid) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/nft/${tokenid}`);
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
            const res = await axios.post(`${this.baseUrl}/api/raffle-ticket`, data, { headers: this.headers() })
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