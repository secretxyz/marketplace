import { useEffect, useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useNfts = () => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const [meta, setMeta] = useState();
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchNfts = async (page, category, filter, reset) => {
        setLoading(true);
        const res = await SecretApi.getNftsWithFilters(page, category, filter);
        if (res) {
            if (reset) {
                setNfts(res.data);
            } else {
                setNfts([...nfts, ...res.data]);
            }
            setMeta(res.meta);
            if (!res.data?.length) {
                setEnded(true);
            }
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, category, filter) => {
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
        fetchNfts(page.current, category, filter, reset);
    }

    return {
        loading,
        nfts,
        meta,
        fetchNext
    }
}


export const useNft = (tokenId) => {
    const [loading, setLoading] = useState(true);
    const [nft, setNft] = useState({});

    const fetchNftDetails = async (tokenId) => {
        setLoading(true);
        const res = await SecretApi.getNftWithTokenID(tokenId);
        if (res) {
            setNft(res.data);
            if (res.data) {
                setLoading(false);
            }
        }
    }

    useEffect(async () => {
        if (tokenId) {
            await fetchNftDetails(tokenId);
        }
    }, [])

    const refresh = async () => {
        setLoading(true);
        const res = await SecretApi.refreshNft(tokenId);
        setLoading(false);
        return res;
    }

    const like = async (id) => {
        return await SecretApi.likeNft(id);
    }

    return {
        loading,
        nft,
        fetchNftDetails,
        refresh,
        like,
    }
}

export const useCollectionNfts = () => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const [meta, setMeta] = useState();
    const [ended, setEnded] = useState(false);
    const page = useRef(0);


    const fetchNfts = async (collectionId, filter, page, reset) => {
        setLoading(true);
        const res = await SecretApi.getCollectionNfts(collectionId, page, filter);
        if (res) {
            if (reset) {
                setNfts(res.data);
            } else {
                setNfts([...nfts, ...res.data]);
            }
            if (!res.data?.length) {
                setEnded(true);
            }
            // setMeta(res.meta);
        }
        setLoading(false);
    }

    const fetchNext = (collectionId, filter, pageNumber) => {
        if (collectionId) {
            let reset;
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
                reset = false;
            } else {
                page.current = pageNumber;
                setEnded(false);
                reset = true;
            }
            fetchNfts(collectionId, filter, page.current, reset);
        }
    }

    return {
        loading,
        nfts,
        meta,
        fetchNext
    }
}

export const useSimilarNfts = (tokenId, collectionId) => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);

    const fetchNfts = async () => {
        setLoading(true);
        let res = await SecretApi.getSimilarNfts(tokenId, collectionId, 10, false);
        let res1;
        if (res?.data?.length < 10) {
            res1 = await SecretApi.getSimilarNfts(tokenId, collectionId, 10 - res.data.length, true);
            setNfts([...res?.data, ...res1?.data]);
        } else {
            setNfts(res.data);
        }
        setLoading(false);
    }

    useEffect(async () => {
        await fetchNfts();
    }, [])

    return {
        loading,
        nfts,
    }
}

export const useNftOffers = () => {
    const [loading, setLoading] = useState(true);
    const [offers, setOffers] = useState([]);

    const fetchNftOffers = async (tokenId) => {
        setLoading(true);
        let res = await SecretApi.getNftOffers(tokenId);
        setOffers(res.data);
        setLoading(false);
    }

    return {
        loading,
        offers,
        fetchNftOffers
    }
}