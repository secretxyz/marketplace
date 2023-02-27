import { useState } from "react";
import SecretApi from "../service/SecretApi";

export const useTopRafflers = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRafflers = async (pageSize, filter) => {
        setLoading(true);
        const res = await SecretApi.getTopRafflers(pageSize, filter);
        setItems(res.data);
        setLoading(false);
    }

    return {
        items,
        loading,
        fetchRafflers,
    }
}

export const useTopBuyers = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBuyers = async (pageSize, filter) => {
        setLoading(true);
        const res = await SecretApi.getTopBuyers(pageSize, filter);
        setItems(res.data);
        setLoading(false);
    }

    return {
        items,
        loading,
        fetchBuyers,
    }
}