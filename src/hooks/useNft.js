import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useNfts = () => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const page = useRef(0);

    const fetchNfts = async (page, filters, reset) => {
        setLoading(true);
        const res = await SecretApi.getNftsWithFilters(page, filters);
        if (reset) {
            setNfts(res.data);
        } else {
            setNfts([...nfts, ...res.data]);
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, filters) => {
        let reset;
        if (!pageNumber) {
            page.current = page.current + 1;
            reset = false;
        } else {
            page.current = pageNumber;
            reset = true;
        }
        fetchNfts(page.current, filters, reset);
    }

    return {
        nfts,
        loading,
        fetchNext
    }
}


export const useNft = (tokenid, raffleid) => {
    const [loading, setLoading] = useState(true);
    const [nft, setNft] = useState();

    const fetchNftDetails = async (tokenid, raffleid) => {
        setLoading(true);
        const res = await SecretApi.getNftWithTokenID(tokenid, raffleid);
        setNft(res.data);
        setLoading(false);
    }

    useEffect(async () => {
        if (tokenid) {
            await fetchNftDetails(tokenid, raffleid);
        }
    }, [])

    return {
        loading,
        nft,
        fetchNftDetails
    }
}

export const useCollectionNfts = () => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const page = useRef(0);


    const fetchNfts = async (collectionId, page, params) => {
        setLoading(true);
        const res = await SecretApi.getCollectionNfts(collectionId, page, params);
        setNfts([...nfts, ...res.data]);
        setLoading(false);
    }

    const fetchNext = (collectionId, pageNumber, params) => {
        if (collectionId) {
            if (!pageNumber) {
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
            }
            fetchNfts(collectionId, page.current, params);
        }
    }

    return {
        loading,
        nfts,
        fetchNext
    }
}