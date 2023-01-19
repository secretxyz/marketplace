import React from 'react';
import Avatar from "../Profile/Avatar";
import { getAccount } from '../../Helpers/Utils';
import { getSummaryAddress } from '../../Helpers/Utils';

const NftCard = ({ data }) => {
    const nft_link = `/nft/${data.nft_tokenid}`;

    const onClickListNow = () => {

    }

    const onClickUnlistNow = () => {

    }

    const getFooterButton = () => {
        if (data.owner?.data?.attributes?.id == getAccount().id) {
            if (!data.bid_price) {
                return <span className="cs-card_btn_2" onClick={onClickListNow()}><span>List Now</span></span>;
            } else {
                return <span className="cs-card_btn_2" onClick={onClickUnlistNow()}><span>Unlist Now</span></span>;
            }
        } else {
            if (!data.bid_price) {
                return <span className="cs-card_btn_2"><span>Place Bid</span></span>;
            } else {
                return <span className="cs-card_btn_2"><span>Buy Now</span></span>;
            }
        }
    }

    return (
        <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
            <span className="cs-card_rare cs-primary_color">
                #{data.rarity_rank}
            </span>
            <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw"></i>
                {data.likes}
            </span>
            <a href={nft_link} className="cs-card_thumb cs-zoom_effect">
                <img style={{ background: `url(${data.picture_url})` }} alt="Image" className="cs-zoom_item" />
            </a>
            <div className="cs-card_info">
                <a href={nft_link} className="cs-avatar cs-white_bg">
                    <Avatar className="cs-profile_avatar_oval"
                        {...{
                            name: data.owner?.data?.attributes?.wallet,
                            image: data.owner?.data?.attributes?.picture_url
                        }}
                    />
                    <span>{data.owner?.data?.attributes?.username ?? getSummaryAddress(data.owner?.data?.attributes?.wallet)}</span>
                </a>
                <h3 className="cs-card_title">
                    <a href={nft_link}>{data.name}</a>
                </h3>
                <div className="cs-card_price">Offer For: <b className="cs-primary_color">{data.bid_price || 0} XRP</b></div>
                <hr />
                <div className="cs-card_footer">
                    {getFooterButton()}
                </div>
                {/* <div className="cs-card_footer">
                    <span className="cs-card_btn_1" data-modal="#history_1">
                        <i className="fas fa-redo fa-fw"></i>
                        View History
                    </span>
                    <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                </div> */}
            </div>
        </div>
    );
}

export default NftCard;