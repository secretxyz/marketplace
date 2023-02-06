import React, { useRef, useState } from "react";
import SecretApi from "../service/SecretApi";

export const useActivity = () => {
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState();
    const [loading, setLoading] = useState(true);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchActivities = async (page, filter, reset) => {
        setLoading(true);
        const res = await SecretApi.getActivities(page, filter);
        if (reset) {
            setItems(res?.data);
        } else {
            setItems([...items, ...res?.data]);
        }
        setMeta(res?.meta);
        if (!res?.data?.length) {
            setEnded(true);
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
        fetchActivities(page.current, filter, reset);
    }

    return {
        loading,
        items,
        meta,
        fetchNext
    }
}