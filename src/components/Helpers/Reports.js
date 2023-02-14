export const getReportedItems = (object) => {
    let items = localStorage.getItem(`report_${object}s`);
    if (!items) {
        return [];
    }
    return JSON.parse(items);
}

export const reportItem = (object, objectId) => {
    let items = getReportedItems(object);
    items.push(objectId);
    localStorage.setItem(`report_${object.toLowerCase()}s`, JSON.stringify(items));
}

export const setReportedItems = (object, items) => {
    localStorage.setItem(`report_${object}s`, JSON.stringify(items));
}