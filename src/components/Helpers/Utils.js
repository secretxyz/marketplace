export const mapOrder = (array, order, key) => {
    // eslint-disable-next-line func-names
    array.sort(function (a, b) {
        const A = a[key];
        const B = b[key];
        if (order.indexOf(`${A}`) > order.indexOf(`${B}`)) {
            return 1;
        }
        return -1;
    });
    return array;
};

export const getDateWithFormat = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
        dd = `0${dd}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    return `${dd}.${mm}.${yyyy}`;
};

export const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
};

export const getSummaryAddress = (addr) => {
    return `${addr.substring(0, 8)}...${addr.substring(addr.length - 8, addr.length)}`;
}

export const getSummaryTxID = (addr) => {
    return `${addr.substring(0, 12)}...${addr.substring(addr.length - 12, addr.length)}`;
}