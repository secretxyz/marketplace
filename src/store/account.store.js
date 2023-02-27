
import { makeObservable, observable, action } from "mobx"
import { getAccount, getAuthToken, getThemeMode, setThemeMode } from "../components/Helpers/Utils";

class AccountStore {
    auth_token = getAuthToken();
    account = getAccount();
    theme_mode = getThemeMode();

    constructor() {
        makeObservable(this, {
            auth_token: observable,
            account: observable,
            theme_mode: observable,

            setAuthToken: action,
            setAccount: action,
            setThemeMode: action,
        })
    }

    setAuthToken(data) {
        this.auth_token = data;
    }

    setAccount(data) {
        this.account = data;
    }

    setThemeMode(data) {
        setThemeMode(data);
        this.theme_mode = data;
    }
}

export default new AccountStore();