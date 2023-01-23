import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useProfile = () => {
    const [loading, setLoading] = useState(false);
    const [accountId, setAccountId] = useState();
    const [profile, setProfile] = useState();

    const fetchProfile = async (wallet) => {
        setLoading(true);
        const res = await SecretApi.getProfileInfo(wallet);
        const { id, attributes } = res.data[0] || {};
        setAccountId(id);
        setProfile(attributes);
        setLoading(false);
    }

    return {
        loading,
        accountId,
        profile,
        fetchProfile
    }
}

export const useRaffleItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const page = useRef(0);

    const fetchRaffleItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getRaffles(id, page);
        setItems([...items, ...res.data]);
        setLoading(false);
    }

    const fetchNext = (accountId, pageNumber) => {
        if (accountId) {
            if (!pageNumber) {
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
            }
            fetchRaffleItems(accountId, page.current);
        }
    }

    return {
        items,
        loading,
        fetchNext
    }
}

export const useCollectedItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = useRef(0);

    const fetchCollectedItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getCollected(id, page);
        setItems([...items, ...res.data]);
        setLoading(false);
    }

    const fetchNext = (accountId, pageNumber) => {
        if (accountId) {
            if (!pageNumber) {
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
            }
            fetchCollectedItems(accountId, page.current);
        }
    }

    return {
        items,
        loading,
        fetchNext
    }
}

export const useCreatedItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = useRef(0);

    const fetchCreatedItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getCreated(id, page);
        setItems([...items, ...res.data]);
        setLoading(false);
    }

    const fetchNext = (accountId, pageNumber) => {
        if (accountId) {
            if (!pageNumber) {
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
            }
            fetchCreatedItems(accountId, page.current);
        }
    }

    return {
        items,
        loading,
        fetchNext
    }
}

export const useCreatedCollections = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = useRef(0);

    const fetchCreatedItems = async (issuer, page) => {
        setLoading(true);
        const res = await SecretApi.getCreatedCollections(issuer, page);
        setItems([...items, ...res.data]);
        setLoading(false);
    }

    const fetchNext = (issuer, pageNumber) => {
        if (issuer) {
            if (!pageNumber) {
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
            }
            fetchCreatedItems(issuer, page.current);
        }
    }

    return {
        items,
        loading,
        fetchNext
    }
}

export const useProfileInfo = () => {
    const [loading, setLoading] = useState(false);

}