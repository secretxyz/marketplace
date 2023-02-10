import { useEffect } from "react";
import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useCollections = () => {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchCollections = async (page, pageSize, category, reset) => {
        setLoading(true);
        const res = await SecretApi.getCollections(page, pageSize, category);
        if (res) {
            if (reset) {
                setCollections(res.data);
            } else {
                setCollections([...collections, ...res.data]);
            }
            if (!res.data?.length) {
                setEnded(true);
            }
        }
        setLoading(false);
    }

    const fetchNext = (pageNumber, pageSize, category) => {
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
            if (res) {
                setCollection(res.data);
                if (res.data) {
                    setLoading(false);
                }
            }
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

export const useAttributes = () => {
    const [loading, setLoading] = useState(true);
    const [attributes, setAttributes] = useState();

    const fetchAttributes = async (id) => {
        setLoading(true);
        const res = await SecretApi.getCollectionAttributes(id);
        setAttributes(res.data);
        setLoading(false);
    }

    return {
        loading,
        attributes,
        fetchAttributes
    }
}