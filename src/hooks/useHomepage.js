import { useState, useEffect } from "react";
import SecretApi from "../service/SecretApi";

export const useBannerCollections = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);

    const getBannerCollections = async () => {
        setLoading(true);
        const res = await SecretApi.getBannerCollections();
        setCollections(res?.data || []);
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
        setRafflers(res);
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
        setFaqs(res.data);
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
