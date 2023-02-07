import { useEffect } from "react";
import { useState, useRef } from "react";
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


export const useNft = (tokenid, raffleid) => {
    const [loading, setLoading] = useState(true);
    const [nft, setNft] = useState({});

    const fetchNftDetails = async (tokenid, raffleid) => {
        setLoading(true);
        const res = await SecretApi.getNftWithTokenID(tokenid, raffleid);
        if (res) {
            setNft(res.data);
        }
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

export const useNftOther = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();

    const refresh = async (tokenid) => {
        setLoading(true);
        const res = await SecretApi.refreshNft(tokenid);
        if (res) {
            setResult(res);
        }
        setLoading(false);
    }

    const like = async (tokenid) => {
        setLoading(true);
        const res = await SecretApi.likeNft(tokenid);
        if (res) {
            setResult(res);
        }
        setLoading(false);
    }

    const report = async (tokenid) => {
        setLoading(true);
        const res = await SecretApi.reportNft(tokenid);
        if (res) {
            setResult(res);
        }
        setLoading(false);
    }

    return {
        loading,
        result,
        refresh,
        like,
        report,
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
        if (res) {
            setNfts([...nfts, ...res.data]);
            setMeta(res.meta);
            if (!res.data?.length) {
                setEnded(true);
            }
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

export const useSimilarNfts = (tokenid, collectionid) => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);

    const fetchNfts = async () => {
        setLoading(true);
        let res = await SecretApi.getSimilarNfts(tokenid, collectionid, 10, false);
        let res1;
        if (res?.data?.length < 10) {
            res1 = await SecretApi.getSimilarNfts(tokenid, collectionid, 10 - res.data.length, true);
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

export const useNftOffers = (tokenid) => {
    const [loading, setLoading] = useState(true);
    const [offers, setOffers] = useState([]);

    const fetchNftOffers = async () => {
        setLoading(true);
        let res = await SecretApi.getNftOffers(tokenid);
        setOffers(res.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchNftOffers();
    }, [])

    return {
        loading,
        offers,
    }
}