import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useRaffle = () => {
    const [loading, setLoading] = useState(true);
    const [created, setCreated] = useState();

    const createRaffle = async (data) => {
        setLoading(true);
        const res = await SecretApi.createRaffle(data);
        setCreated(res?.data);
        setLoading(false);
    }

    return {
        loading,
        created,
        createRaffle
    }
}