import React, { useEffect, useState } from 'react';
import { getAccount, getDifferenceTime, getExpirationDateTime, getImageLink, getSummaryUsername } from '../../Helpers/Utils';
import Avatar from '../Profile/Avatar';

const OfferCard = ({ data, submit }) => {
    const nft = data.nft?.data?.attributes;
    const from = { ...data.from?.data?.attributes, id: data.from?.data?.id };
    const to = { ...data.to?.data?.attributes, id: data.to?.data?.id };

    const onClickOffer = (activity) => {
        submit(activity, data);
    }

    const isOwner = (owner, right) => {
        if (owner.id == getAccount().id) {
            return <>You </>;
        }

        return <a href={`/profile/${owner.wallet}`} className={right && "cs-activity_right_avatar"}><Avatar className="cs-profile_avatar_oval" {...{ name: owner?.wallet, image: owner?.picture_url }} />
            {getSummaryUsername(owner)}
        </a>
    }

    const generateBody = () => {
        switch (data.activity) {
            case "transfer":
                return <div>
                    <div className="cs-activity_right">
                        <div className="cs-activity_text">
                            {to.id == getAccount().id ? <div className="cs-activity_text_line">
                                {`You received from `} {isOwner(from, "right")}
                            </div> : <div className="cs-activity_text_line">
                                {isOwner(from)} {` transferred to `} {isOwner(to, "right")}
                            </div>}
                        </div >
                        <p className="cs-activity_date">{getDifferenceTime(data.createdAt)}</p>
                    </div>
                    {from.id == getAccount().id ?
                        <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("cancel")}>
                            <span>Cancel</span>
                        </button> : (to.id == getAccount().id) && <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("claim")}>
                            <span>Claim</span>
                        </button>
                    }
                </div>
            case "list":
                return <div>
                    <div className="cs-activity_right">
                        <div className="cs-activity_text">
                            <div className="cs-activity_text_line">
                                <>{isOwner(from)} {` created sell offer `}<span className="cs-activity_right_avatar"> on {data.price} XRP</span></>
                            </div>
                        </div >
                        <p className="cs-activity_date">{getDifferenceTime(data.createdAt)}</p>
                    </div>
                    {from.id == getAccount().id ?
                        <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("cancel")}>
                            <span>Cancel</span>
                        </button> : <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("buy")}>
                            <span>Buy</span>
                        </button>
                    }
                </div>
            case "bid":
                return <div>
                    <div className="cs-activity_right">
                        <div className="cs-activity_text">
                            <div className="cs-activity_text_line">
                                <>{isOwner(from)} {` created buy offer `}<span className="cs-activity_right_avatar"> on {data.price} XRP</span></>
                            </div>
                        </div >
                        <p className="cs-activity_date">{getDifferenceTime(data.createdAt)}</p>
                    </div>
                    {from.id == getAccount().id ?
                        <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("cancel")}>
                            <span>Cancel</span>
                        </button> : (to.id == getAccount().id) && <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("accept")}>
                            <span>Accept</span>
                        </button>
                    }
                </div>
        }
    }

    return (
        <div>
            <div className="cs-activity cs-type2 cs-white_bg cs-box_shadow">
                <div className="cs-activity_nft_thumb ml-0">
                    <a href={`/nft/${nft.nft_tokenid}`}><img src={getImageLink(nft?.picture_url)} alt="Image" /></a>
                </div>
                <div className="cs-activity_right cs-activity_nft_name">
                    <div className="cs-activity_text">
                        <h3><a href={`/nft/${nft.nft_tokenid}`}>{nft?.name}</a></h3>
                    </div>
                    <div className="cs-activity_text">
                        {getExpirationDateTime(data.expire_at)}
                    </div>
                </div>
                {generateBody()}
            </div>
        </div>
    )
}

export default OfferCard;