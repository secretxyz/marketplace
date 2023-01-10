
import { makeObservable, observable, action } from "mobx"
import { getAccount, getAuthToken } from "../components/Helpers/Utils";

class AccountStore {
    auth_token = getAuthToken();
    wallet = getAccount().wallet;
    slug = getAccount().slug;
    username = getAccount().username;
    banner_picture_url = getAccount().banner_picture_url;
    picture_url = getAccount().picture_url;

    constructor() {
        makeObservable(this, {
            auth_token: observable,
            wallet: observable,
            slug: observable,
            username: observable,
            banner_picture_url: observable,
            picture_url: observable,

            setAuthToken: action,
            setAccount: action,
        })
    }

    setAuthToken(data) {
        this.auth_token = data;
    }

    setAccount(data) {
        this.wallet = data.wallet;
        this.slug = data.slug;
        this.username = data.username;
        this.banner_picture_url = data.banner_picture_url;
        this.picture_url = data.picture_url;
    }
}

export default new AccountStore();