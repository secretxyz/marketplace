import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useRaffle = () => {
    const [creating, setCreating] = useState(false);
    const [result, setResult] = useState();

    const createRaffle = async (data) => {
        setCreating(true);
        const res = await SecretApi.createRaffle(data);
        setResult(res);
        setCreating(false);
    }

    return {
        creating,
        result,
        createRaffle
    }
}

export const useRaffleBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRaffleBuyers = async (id) => {
        setLoading(true);
        const res = await SecretApi.getRaffleBuyers(id);
        setBuyers(res);
        setLoading(false);
    }

    return {
        buyers,
        fetchRaffleBuyers
    }
}

export const useRaffleTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = useRef(0);

    const fetchRaffleTransactions = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getRaffleTransactions(id, page);
        setTransactions([...transactions, ...res.data]);
        setLoading(false);
    }

    const fetchNext = (raffleId, pageNumber) => {
        if (raffleId) {
            if (!pageNumber) {
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
            }
            fetchRaffleTransactions(raffleId, page.current);
        }
    }

    return {
        transactions,
        loading,
        fetchNext
    }
}