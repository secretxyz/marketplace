
import { makeObservable, observable, action } from "mobx"
import { getAccount, getAuthToken } from "../components/Helpers/Utils";

class AccountStore {
    auth_token = getAuthToken();
    account = getAccount();

    constructor() {
        makeObservable(this, {
            auth_token: observable,
            account: observable,

            setAuthToken: action,
            setAccount: action,
        })
    }

    setAuthToken(data) {
        this.auth_token = data;
    }

    setAccount(data) {
        console.log("setAccount:", data);
        this.account = data;
    }
}

export default new AccountStore();