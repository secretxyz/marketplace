import React, { useEffect, useState } from 'react';
import { useNft } from "../../hooks/useNft";
import { getLikedItems, likeItem } from '../Helpers/Likes';

const LikeNft = ({ nft }) => {
    const { like } = useNft();
    const [likes, setLikes] = useState(nft.likes || 0);

    const isLikeNft = () => {
        let nfts = getLikedItems("nft");
        if (nfts.includes(nft.id)) {
            return true;
        }
        return false;
    }

    const [active, setActive] = useState(isLikeNft());

    const onClickLike = async () => {
        console.log(nft.id);
        const res = await like(nft.id);
        if (res) {
            setLikes(likes + res.result);
            likeItem("nft", nft.id, res.result);
            if (res.result == 1) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
    }

    return (<span className="cs-card_like cs-primary_color cs-box_shadow" onClick={onClickLike}>
        <i className={`fas fa-heart fa-fw ${active ? "cs-card_like_active" : ""}`}></i>
        {likes}
    </span>)
}

export default LikeNft;