import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useCollections = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    const page = useRef(0);

    const fetchCollections = async (page, pageSize, category, reset) => {
        setLoading(true);
        const res = await SecretApi.getCollections(page, pageSize, category);
        if (reset) {
            setCollections(res.data);
        } else {
            setCollections([...collections, ...res.data]);
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, pageSize, category) => {
        let reset;
        if (!pageNumber) {
            page.current = page.current + 1;
            reset = false;
        } else {
            page.current = pageNumber;
            reset = true;
        }
        fetchCollections(page.current, pageSize, category, reset);
    }

    return {
        collections,
        loading,
        fetchNext
    }
}

export const useCollection = (slug) => {
    const [loading, setLoading] = useState(true);
    const [collection, setCollection] = useState();

    const fetchCollection = async () => {
        if (slug) {
            setLoading(true);
            const res = await SecretApi.getCollectionWithSlug(slug);
            setCollection(res.data);
            setLoading(false);
        }
    }

    useEffect(async () => {
        await fetchCollection();
    }, [])

    return {
        loading,
        collection
    }
}