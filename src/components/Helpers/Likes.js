export const getLikedItems = (object) => {
    let items = localStorage.getItem(`like_${object}s`);
    if (!items) {
        return [];
    }
    return JSON.parse(items);
}

export const likeItem = (object, objectId, result) => {
    let items = getLikedItems(object);
    // console.log(items);
    if (result > 0 && !items.includes(objectId)) {
        items.push(objectId);
    } else if (result < 0) {
        let idx = items.indexOf(objectId);
        if (idx >= 0) items.splice(idx, 1);
    }

    localStorage.setItem(`like_${object}s`, JSON.stringify(items));
}

export const setLikedItems = (object, items) => {
    localStorage.setItem(`like_${object}s`, JSON.stringify(items));
}