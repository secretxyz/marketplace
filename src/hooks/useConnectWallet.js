import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthChannel, setAuthToken, setAccount } from "../components/Helpers/Utils";
import xummStore from "../store/xumm.store";
import accountStore from "../store/account.store";
import SecretApi from "../service/SecretApi";

const useConnectWallet = () => {
    let controller = new AbortController();

    const startRequest = async () => {
        console.log("connect wallet requested...");
        try {
            let res = await axios.get(`${SecretApi.baseUrl}/api/connect-wallet/${getAuthChannel()}`, {
                signal: controller.signal
            })

            console.log(res.data);
            if (res.data.status) {
                const { auth_token, account } = res.data.data;
                setAuthToken(auth_token)
                setAccount(account);
                accountStore.setAuthToken(auth_token);
                accountStore.setAccount(account);
                xummStore.setResult(res.data);
            }
        } catch (error) {
            controller = new AbortController();
        }
    }

    const cancelRequest = () => {
        controller.abort()
    }

    return ({
        startRequest,
        cancelRequest
    })
}

export default useConnectWallet;