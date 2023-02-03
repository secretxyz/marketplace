import axios from "axios";
import { io } from "socket.io-client";

import { getAuthChannel, setAuthChannel } from "./Utils";
import xummStore from "../../store/xumm.store";
import SecretApi from "../../service/SecretApi";


const socket = io(SecretApi.baseUrl);

const SocketLoader = async () => {
    // request auth channel
    if (!getAuthChannel()) {
        let res = await axios.get(`${SecretApi.baseUrl}/api/auth`)
        setAuthChannel(res.data.token);
    }

    //  wait until socket connects before adding event listeners
    socket.on("connect", () => {
        socket.on(getAuthChannel(), (data) => {
            console.log(data);
            xummStore.setSubscription(data);
        });
    });
}

export default SocketLoader;