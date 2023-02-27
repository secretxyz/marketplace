import { useEffect, useState } from "react";
import SecretApi from "../service/SecretApi";

export const useFeaturedCollection = (category) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        setLoading(true);
        const res = await SecretApi.getFeaturedCollections(category);
        if (res) {
            setItems(res.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetch();
    }, [])

    return {
        loading,
        items
    }
}


export const useFeaturedRaffle = (category) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        setLoading(true);
        const res = await SecretApi.getFeaturedRaffles(category);
        if (res) {
            setItems(res.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetch();
    }, [])

    return {
        loading,
        items
    }
}