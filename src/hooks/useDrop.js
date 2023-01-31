import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useDrops = () => {
    const [loading, setLoading] = useState(true);
    const [drops, setDrops] = useState([]);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchDrops = async (page, category, reset) => {
        setLoading(true);
        const res = await SecretApi.getDrops(page, category);
        if (reset) {
            setDrops(res.data);
        } else {
            setDrops([...drops, ...res.data]);
        }
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, category) => {
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
        fetchDrops(page.current, category, reset);
    }

    return {
        drops,
        loading,
        fetchNext
    }
}