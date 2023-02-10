import React, { useEffect, useState } from 'react';
import { useNftOther } from "../../hooks/useNft";
import { getLikedNfts, likeNft } from '../Helpers/Utils';

const LikeNft = ({ nft }) => {
    const { loading, like } = useNftOther();
    const [likes, setLikes] = useState(nft.likes || 0);

    const isLikeNft = () => {
        let nfts = getLikedNfts();
        if (nfts.includes(nft.id)) {
            return true;
        }
        return false;
    }

    const [active, setActive] = useState(isLikeNft());

    const onClickLike = async () => {
        const res = await like(nft.id);
        if (res && res.status) {
            setLikes(likes + res.result);
            likeNft(nft.id);
            setActive(isLikeNft());
        }
    }
    return (<span className="cs-card_like cs-primary_color cs-box_shadow" onClick={onClickLike}>
        <i className={`fas fa-heart fa-fw ${active ? "cs-card_like_active" : ""}`}></i>
        {likes}
    </span>)
}

export default LikeNft;