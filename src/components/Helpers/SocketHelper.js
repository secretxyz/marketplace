import axios from "axios";
import { io } from "socket.io-client";

import { getAuthChannel, setAuthChannel } from "./Utils";
import { API_URL } from "../Common/constants";
import xummStore from "../../store/xumm.store";


const socket = io(API_URL);

const SocketLoader = async () => {
    // request auth channel
    if (!getAuthChannel()) {
        let res = await axios.get(`${API_URL}/api/auth`)
        setAuthChannel(res.data.token);
    }

    //  wait until socket connects before adding event listeners
    socket.on("connect", () => {
        socket.on(getAuthChannel(), (data) => {
            xummStore.setSubscription(data.data);
        });
    });
}

export default SocketLoader;