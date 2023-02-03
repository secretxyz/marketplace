
import { makeObservable, observable, action } from "mobx"

class XummStore {
    subscription = null;

    constructor() {
        makeObservable(this, {
            subscription: observable,
            setSubscription: action,
        })
    }

    setSubscription(data) {
        this.subscription = data;
    }
}

export default new XummStore();