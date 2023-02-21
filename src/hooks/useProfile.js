import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useProfile = () => {
    const [loading, setLoading] = useState(true);
    const [accountId, setAccountId] = useState();
    const [profile, setProfile] = useState();

    const fetchProfile = async (wallet) => {
        setLoading(true);
        const res = await SecretApi.getProfileInfo(wallet);
        setAccountId(res?.data?.id || 0);
        setProfile(res?.data);
        setLoading(false);
    }

    const reload = async (wallet) => {
        const res = await SecretApi.getProfileInfo(wallet);
        setProfile(res?.data);
    }

    const refresh = async (id) => {
        setLoading(true);
        const res = await SecretApi.refreshProfile(id);
        setLoading(false);
        return res;
    }

    const like = async (id) => {
        const res = await SecretApi.likeProfile(id);
        return res;
    }

    return {
        loading,
        accountId,
        profile,
        fetchProfile,
        reload,
        refresh,
        like,
    }
}

export const useRaffleItems = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState();
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchRaffleItems = async (id, filter, page, reset) => {
        setLoading(true);
        const res = await SecretApi.getRaffleItems(id, filter, page);
        if (reset) {
            setItems(res.data);
        } else {
            setItems([...items, ...res.data]);
        }
        if (!res.data?.length) {
            setEnded(true);
        }
        setMeta(res.meta);
        setLoading(false);
    }

    const fetchNext = async (accountId, filter, pageNumber) => {
        if (accountId) {
            let reset;
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
                reset = false;
            } else {
                page.current = pageNumber;
                setEnded(false);
                reset = true;
            }
            fetchRaffleItems(accountId, filter, page.current, reset);
        }
    }

    return {
        loading,
        items,
        meta,
        fetchNext
    }
}

export const useRaffleTicketItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchRaffleTicketItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getRaffleTicketItems(id, page);
        setItems([...items, ...res.data]);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (accountId, pageNumber) => {
        if (accountId) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
            }
            fetchRaffleTicketItems(accountId, page.current);
        }
    }

    return {
        items,
        loading,
        fetchNext
    }
}

export const useCollectedItems = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [collections, setCollections] = useState([]);
    const [meta, setMeta] = useState();
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchCollectedItems = async (id, filter, page, reset) => {
        setLoading(true);
        const res = await SecretApi.getCollected(id, filter, page);
        if (reset) {
            setItems(res.data);
        } else {
            setItems([...items, ...res.data]);
        }
        if (!res.data?.length) {
            setEnded(true);
        }
        setMeta(res.meta);
        setLoading(false);
    }

    const fetchNext = async (accountId, filter, pageNumber) => {
        if (accountId) {
            let reset;
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
                reset = false;
            } else {
                page.current = pageNumber;
                setEnded(false);
                reset = true;
            }
            fetchCollectedItems(accountId, filter, page.current, reset);
        }
    }

    const fetchCollections = async (accountId) => {
        setLoading(true);
        const res = await SecretApi.getCollectionsWithAccount(accountId);
        setCollections(res.data);
        setLoading(false);
    }

    return {
        items,
        collections,
        loading,
        meta,
        fetchNext,
        fetchCollections
    }
}

export const useCreatedItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchCreatedItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getCreated(id, page);
        setItems([...items, ...res.data]);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (accountId, pageNumber) => {
        if (accountId) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
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
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchCreatedItems = async (issuer, page) => {
        setLoading(true);
        const res = await SecretApi.getCreatedCollections(issuer, page);
        setItems([...items, ...res.data]);
        if (!res.data?.length) {
            setEnded(true);
        }
        setLoading(false);
    }

    const fetchNext = (issuer, pageNumber) => {
        if (issuer) {
            if (!pageNumber) {
                if (ended) return;
                page.current = page.current + 1;
            } else {
                page.current = pageNumber;
                setEnded(false);
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
    const [result, setResult] = useState();

    const update = async (data) => {
        setLoading(true);
        const res = await SecretApi.updateProfile(data);
        setResult(res);
        setLoading(false);
    }

    return {
        loading,
        result,
        update
    }
}

export const useNotifications = () => {
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState();
    const [loading, setLoading] = useState(true);
    const [ended, setEnded] = useState(false);
    const page = useRef(0);

    const fetchNotifications = async (page) => {
        setLoading(true);
        const res = await SecretApi.getNotifications(page);
        if (res) {
            setItems([...items, ...res.data]);
            if (!res.data?.length) {
                setEnded(true);
            }
            setMeta(res.meta);
        }
        setLoading(false);
    }

    const confirm = async (id) => {
        await SecretApi.confirmNotification(id);
    }

    const confirmAll = async () => {
        await SecretApi.confirmAllNotifications();
        setItems([]);
    }

    const fetchNext = (pageNumber) => {
        if (!pageNumber) {
            if (ended) return;
            page.current = page.current + 1;
        } else {
            page.current = pageNumber;
            setEnded(false);
        }
        fetchNotifications(page.current);
    }

    return {
        loading,
        items,
        meta,
        fetchNext,
        confirm,
        confirmAll
    }
}