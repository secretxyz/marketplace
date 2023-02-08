import { useState, useEffect } from "react";
import SecretApi from "../service/SecretApi";

export const useBannerCollections = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);

    const getBannerCollections = async () => {
        setLoading(true);
        const res = await SecretApi.getBannerCollections();
        if (res) {
            setCollections(res.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getBannerCollections();
    }, [])

    return {
        loading,
        collections
    }
}

export const useTopRafflers = () => {
    const [loading, setLoading] = useState(true);
    const [rafflers, setRafflers] = useState([]);

    const getTopRafflers = async () => {
        setLoading(true);
        const res = await SecretApi.getTopRafflers();
        if (res) {
            setRafflers(res);
        }
        setLoading(false);
    }

    useEffect(() => {
        getTopRafflers();
    }, [])

    return {
        loading,
        rafflers
    }
}

export const useFaqs = () => {
    const [loading, setLoading] = useState(true);
    const [faqs, setFaqs] = useState([]);

    const getFaqs = async () => {
        setLoading(true);
        const res = await SecretApi.getFaqs();
        if (res) {
            setFaqs(res.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getFaqs();
    }, [])

    return {
        loading,
        faqs
    }
}

export const useSearch = () => {
    const [loading, setLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const [collections, setCollections] = useState([]);
    const [profiles, setProfiles] = useState([]);

    const searchNfts = async (keyword) => {
        setLoading(true);
        const res = await SecretApi.getSearchNftsInHeader(keyword);
        if (res) {
            setNfts(res.data);
        }
        setLoading(false);
    }

    const searchCollections = async (keyword) => {
        setLoading(true);
        const res = await SecretApi.getSearchCollectionsInHeader(keyword);
        if (res) {
            setCollections(res.data);
        }
        setLoading(false);
    }

    const searchProfiles = async (keyword) => {
        setLoading(true);
        const res = await SecretApi.getSearchProfilesInHeader(keyword);
        if (res) {
            setProfiles(res.data);
        }
        setLoading(false);
    }

    const search = async (keyword) => {
        searchCollections(keyword);
        searchProfiles(keyword);
        searchNfts(keyword);
    }

    return {
        loading,
        nfts,
        collections,
        profiles,
        search,
    }
}