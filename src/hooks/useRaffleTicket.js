import { useState, useRef } from "react";
import SecretApi from "../service/SecretApi";

export const useRaffleTicket = () => {
    const [creating, setCreating] = useState(true);
    const [result, setResult] = useState();

    const createRaffleTicket = async (data) => {
        setCreating(true);
        const res = await SecretApi.createRaffleTicket(data);
        setResult(res);
        setCreating(false);
    }

    return {
        creating,
        result,
        createRaffleTicket
    }
}