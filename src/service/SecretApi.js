import axios from "axios";
import { getAuthToken } from "../components/Helpers/Utils";

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

    async getRaffles(id, page) {
        try {
            const res = await axios.get(`${this.baseUrl}/api/raffles`, {
                params: {
                    "pagination[page]": page,
                    "pagination[pageSize]": this.pageSize,
                    "filters[raffle_owner]": id,
                    "populate[nft]": true,
                    "populate[raffle_owner]": true,
                }
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

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
        console.log(data);
        try {
            const res = await axios.post(`${this.baseUrl}/api/raffle`, data, { headers: this.headers() })
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createRaffleTicket() {
        console.log(data);
        try {
            const res = await axios.post(`${this.baseUrl}/api/raffle`, data, { headers: this.headers() })
            return res.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}


export default new SecretApi();