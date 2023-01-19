import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useNft = (tokenid) => {
    const [loading, setLoading] = useState(true);
    const [nft, setNft] = useState();

    const fetchNftDetails = async (tokenid) => {
        setLoading(true);
        const res = await SecretApi.getNftWithTokenID(tokenid);
        setNft(res.data);
        setLoading(false);
    }

    useEffect(async () => {
        await fetchNftDetails(tokenid);
    }, [])

    return {
        loading,
        nft,
        fetchNftDetails
    }
}
