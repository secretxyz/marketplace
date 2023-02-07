import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthChannel, setAuthToken, setAccount, setLikedAccounts } from "../components/Helpers/Utils";
import accountStore from "../store/account.store";
import SecretApi from "../service/SecretApi";

const useConnectWallet = () => {
    const [result, setResult] = useState();
    let controller = new AbortController();

    const startRequest = async () => {
        console.log("connect wallet requested...");
        try {
            let res = await axios.get(`${SecretApi.baseUrl}/api/connect-wallet/${getAuthChannel()}`, {
                signal: controller.signal
            })

            // console.log(res.data);
            if (res.data.status) {
                const { auth_token, account } = res.data.data;
                setAuthToken(auth_token)
                accountStore.setAuthToken(auth_token);

                let account_data = {
                    id: account.id,
                    wallet: account.wallet,
                }
                setAccount(account_data);
                accountStore.setAccount(account_data);

                setLikedAccounts(account.followings);
                setResult(res.data.status);
            }
        } catch (error) {
            controller = new AbortController();
        }
    }

    const cancelRequest = () => {
        controller.abort()
    }

    return ({
        result,
        startRequest,
        cancelRequest
    })
}

export default useConnectWallet;