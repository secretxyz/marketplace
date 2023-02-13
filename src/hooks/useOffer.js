import { useEffect, useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useOffer = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();

    const createOffer = async (data) => {
        setLoading(true);
        const res = await SecretApi.createOffer(data);
        console.log(res);
        setResult(res);
        setLoading(false);
    }

    return {
        loading,
        result,
        createOffer
    }
}

export const useOffers = () => {
    const [items, setItems] = useState();
    const [meta, setMeta] = useState();
    const [loading, setLoading] = useState(true);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchOffers = async (page, filter, reset) => {
        setLoading(true);
        const res = await SecretApi.getOffers(page, filter);
        if (res) {
            if (reset) {
                setItems(res.data);
            } else {
                setItems([...items, ...res.data]);
            }
            setMeta(res.meta);
            if (!res.data?.length) {
                setEnded(true);
            }
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, filter) => {
        let reset = false;
        if (!pageNumber) {
            if (ended) return;
            page.current = page.current + 1;
        } else {
            page.current = pageNumber;
            setEnded(false);
            reset = true;
        }
        fetchOffers(page.current, filter, reset);
    }

    return {
        loading,
        items,
        meta,
        fetchNext
    }
}