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


export const useNft = (tokenId, raffleId) => {
    const [loading, setLoading] = useState(true);
    const [nft, setNft] = useState({});

    const fetchNftDetails = async (tokenId, raffleId) => {
        setLoading(true);
        const res = await SecretApi.getNftWithTokenID(tokenId, raffleId);
        if (res) {
            setNft(res.data);
            if (res.data) {
                setLoading(false);
            }
        }
    }

    useEffect(async () => {
        if (tokenId) {
            await fetchNftDetails(tokenId, raffleId);
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


    const fetchNfts = async (collectionId, page, filter) => {
        setLoading(true);
        const res = await SecretApi.getCollectionNfts(collectionId, page, filter);
        if (res) {
            setNfts([...nfts, ...res.data]);
            setMeta(res.meta);
            if (!res.data?.length) {
                setEnded(true);
            }
        }
        setLoading(false);
    }

    const fetchNext = (collectionId, pageNumber, filter) => {
        if (collectionId) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
            }
            fetchNfts(collectionId, page.current, filter);
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