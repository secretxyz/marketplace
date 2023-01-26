import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useRaffles = () => {
    const [loading, setLoading] = useState(true);
    const [raffles, setRaffles] = useState([]);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchRaffles = async (page, filters, reset) => {
        setLoading(true);
        const res = await SecretApi.getRafflesWithFilters(page, filters);
        if (reset) {
            setRaffles(res.data);
        } else {
            setRaffles([...nfts, ...res.data]);
        }
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
        fetchRaffles(page.current, filters, reset);
    }

    return {
        raffles,
        loading,
        fetchNext
    }
}

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
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchRaffleTransactions = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getRaffleTransactions(id, page);
        setTransactions([...transactions, ...res.data]);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (raffleId, pageNumber) => {
        if (raffleId) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
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

export const useRaffleHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchRaffleHistory = async (tokenid, page) => {
        setLoading(true);
        const res = await SecretApi.getRafflesWithTokenId(tokenid, page);
        setHistory([...history, ...res.data]);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (tokenid, pageNumber) => {
        if (tokenid) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
            }
            fetchRaffleHistory(tokenid, page.current);
        }
    }

    return {
        history,
        loading,
        fetchNext
    }
}

export const useDrawNft = (raffleId) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();

    const drawNft = async () => {
        setLoading(true);
        const res = await SecretApi.drawNftWithRaffleId(raffleId);
        setResult(res);
        setLoading(false);
    }

    useEffect(() => {
        if (raffleId) {
            drawNft();
        }
    }, [])

    return {
        loading,
        result
    }
}

export const useDrawPrize = (raffleId) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();

    const drawPrize = async () => {
        setLoading(true);
        const res = await SecretApi.drawPrizeWithRaffleId(raffleId);
        setResult(res);
        setLoading(false);
    }

    useEffect(() => {
        if (raffleId) {
            drawPrize();
        }
    }, [])

    return {
        loading,
        result
    }
}