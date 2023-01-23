import { useEffect, useState } from "react";
import SecretApi from "../service/SecretApi";

export const useFeaturedRaffle = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        setLoading(true);
        const res = await SecretApi.getFeaturedRaffles();
        setItems(res?.data);
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