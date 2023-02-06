import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useRaffleTicket = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState();

    const createRaffleTicket = async (data) => {
        setLoading(true);
        const res = await SecretApi.createRaffleTicket(data);
        setResult(res);
        setLoading(false);
    }

    return {
        loading,
        result,
        createRaffleTicket
    }
}