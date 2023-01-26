import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useNfts = () => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const [meta, setMeta] = useState();
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchNfts = async (page, filters, reset) => {
        setLoading(true);
        const res = await SecretApi.getNftsWithFilters(page, filters);
        if (reset) {
            setNfts(res.data);
        } else {
            setNfts([...nfts, ...res.data]);
        }
        setMeta(res.meta);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, filters) => {
        let reset;
        if (!pageNumber) {
            if (ended) return;
            page.current = page.current + 1;
            reset = false;
        } else {
            setEnded(false);
            page.current = pageNumber;
            reset = true;
        }
        fetchNfts(page.current, filters, reset);
    }

    return {
        loading,
        nfts,
        meta,
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
    const [meta, setMeta] = useState();
    const [ended, setEnded] = useState(false);
    const page = useRef(0);


    const fetchNfts = async (collectionId, page, params) => {
        setLoading(true);
        const res = await SecretApi.getCollectionNfts(collectionId, page, params);
        setNfts([...nfts, ...res.data]);
        setMeta(res.meta);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (collectionId, pageNumber, params) => {
        if (collectionId) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
            }
            fetchNfts(collectionId, page.current, params);
        }
    }

    return {
        loading,
        nfts,
        meta,
        fetchNext
    }
}