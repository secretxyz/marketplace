import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthChannel, setAuthToken, setAccount } from "../components/Helpers/Utils";
import { setLikedItems } from "../components/Helpers/Likes";
import accountStore from "../store/account.store";
import SecretApi from "../service/SecretApi";
import { setReportedItems } from "../components/Helpers/Reports";

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

                setLikedItems("account", account.like_accounts);
                setLikedItems("nft", account.like_nfts);
                setLikedItems("collection", account.like_collections);
                setReportedItems("account", account.report_accounts);
                setReportedItems("nft", account.report_nfts);
                setReportedItems("collection", account.report_collections);

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