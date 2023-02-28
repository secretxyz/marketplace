import React from 'react';
import Avatar from "../Profile/Avatar";
import { getAccount, getAssetView1, getMarketplaceByWallet1 } from '../../Helpers/Utils';
import { getSummaryAddress } from '../../Helpers/Utils';
import LikeNft from '../../Common/LikeNft';

const NftCard = ({ data }) => {
    const nft_link = `/nft/${data.nft_tokenid}`;
    const owner = { id: data.owner?.data?.id, ...data.owner?.data?.attributes };
    const owner_link = `/profile/${owner.wallet}`;

    const getFooterButton = () => {
        if (owner.id == getAccount().id) {
            if (!data.price) {
                return <a href={nft_link} className="cs-btn cs-style1 cs-card_btn_3">
                    <span>List Now</span>
                </a>;
            } else {
                return <a href={nft_link} className="cs-btn cs-style1 cs-card_btn_3">
                    <span>Unlist Now</span>
                </a>;
            }
        } else {
            if (!data.price) {
                return <a href={nft_link} className="cs-btn cs-style1 cs-card_btn_3">
                    <span>Place Offer</span>
                </a>;
            } else {
                return <a href={nft_link} className="cs-btn cs-style1 cs-card_btn_3">
                    <span>Buy Now</span>
                </a>;
            }
        }
    }

    return (
        <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
            {/* {data?.rarity_rank && <span className="cs-card_rare cs-primary_color">
                #{data.rarity_rank}
            </span>} */}
            <LikeNft nft={data} />
            <a href={nft_link} className="cs-card_thumb cs-zoom_effect">
                {getAssetView1(data)}
            </a>
            <div className="cs-card_info">
                <a href={owner_link} className="cs-avatar cs-white_bg cs-box_shadow">
                    <Avatar className="cs-profile_avatar_oval" {...{ name: owner.wallet, image: owner.picture_url }} />
                    <span>{owner.username ?? getSummaryAddress(owner.wallet)}</span>
                </a>
                <h3 className="cs-card_title">
                    <a href={nft_link}>{data.name}</a>
                </h3>
                <div className="cs-card_price">
                    {!data.sell_price ? "Best Offer:" : "Offer For:"} <b className="cs-primary_color">{data.sell_price / 1000000 || (data.buy_price / 1000000 || 0)} XRP</b> {getMarketplaceByWallet1(data.sell_destination)}
                </div>
                <hr />
                <div className="cs-card_footer">
                    {getFooterButton()}
                </div>
            </div>
        </div>
    );
}

export default NftCard;