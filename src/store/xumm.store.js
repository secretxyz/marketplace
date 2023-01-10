
import { makeObservable, observable, action } from "mobx"

class XummStore {
    subscription = null;
    result = null;

    constructor() {
        makeObservable(this, {
            subscription: observable,
            result: observable,

            setSubscription: action,
            setResult: action,
        })
    }

    setSubscription(data) {
        this.subscription = data;
    }

    setResult(data) {
        this.result = data;
    }
}

export default new XummStore();