import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useProfile = () => {
    const [loading, setLoading] = useState(true);
    const [accountId, setAccountId] = useState();
    const [profile, setProfile] = useState();

    const fetchProfile = async (wallet) => {
        setLoading(true);
        const res = await SecretApi.getProfileInfo(wallet);
        setAccountId(res.data?.id);
        setProfile(res.data);
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
    const [loading, setLoading] = useState(true);
    const page = useRef(0);

    const fetchRaffleItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getRaffleItems(id, page);
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

export const useRaffleTicketItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = useRef(0);

    const fetchRaffleTicketItems = async (id, page) => {
        setLoading(true);
        const res = await SecretApi.getRaffleTicketItems(id, page);
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
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();


}

export const useProfileOther = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();

    const refresh = async (accountId) => {
        setLoading(true);
        const res = await SecretApi.refreshProfile(accountId);
        setResult(res);
        setLoading(false);
    }

    const like = async (accountId) => {
        setLoading(true);
        const res = await SecretApi.likeProfile(accountId);
        setResult(res);
        setLoading(false);
    }

    const report = async (accountId) => {
        setLoading(true);
        const res = await SecretApi.reportProfile(accountId);
        setResult(res);
        setLoading(false);
    }

    return {
        loading,
        result,
        refresh,
        like,
        report,
    }
}