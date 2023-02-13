import React, { useEffect, useState } from 'react';
import { useOffer } from '../../../hooks/useOffer';
import { getAccount, getDifferenceTime, getSummaryUsername } from '../../Helpers/Utils';
import Avatar from '../Profile/Avatar';
import CreateOfferModal from '../Single/CreateOfferModal';

const OfferCard = ({ data, submit }) => {
    const { loading, result, createOffer } = useOffer();
    const nft = data.nft?.data?.attributes;
    const from = { ...data.from?.data?.attributes, id: data.from?.data?.id };
    const to = { ...data.to?.data?.attributes, id: data.to?.data?.id };

    const [offering, setOffering] = useState(false);

    const onClickOffer = (activity) => {
        submit(activity, data.id);
    }

    const generateBody = () => {
        switch (data.activity) {
            case "transfer":
                if (from.id == getAccount().id) {
                    return <div>
                        <div className="cs-activity_right">
                            <div className="cs-activity_text">
                                <div className="cs-activity_text_line">
                                    {`You transferred to `} <a href={`/profile/${to.wallet}`}>
                                        <Avatar className="cs-profile_avatar_oval" {...{ name: to?.wallet, image: to?.picture_url }} />
                                        {getSummaryUsername(to)}
                                    </a>
                                </div>
                            </div >
                            <p className="cs-activity_date">{getDifferenceTime(data.createdAt)}</p>
                        </div>
                        <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("cancel_transfer")}>
                            <span>Cancel</span>
                        </button>
                    </div>
                } else if (to.id == getAccount().id) {
                    return <div>
                        <div className="cs-activity_right">
                            <div className="cs-activity_text">
                                <div className="cs-activity_text_line">
                                    {`You received from `} <a href={`/profile/${from.wallet}`}>
                                        <Avatar className="cs-profile_avatar_oval" {...{ name: from?.wallet, image: from?.picture_url }} />
                                        {getSummaryUsername(from)}
                                    </a>
                                </div>
                            </div >
                            <p className="cs-activity_date">{getDifferenceTime(data.createdAt)}</p>
                        </div>
                        <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3" onClick={() => onClickOffer("claim_transfer")}>
                            <span>Claim</span>
                        </button>
                    </div>
                }
        }
    }

    return (
        <div>
            <div className="cs-activity cs-type2 cs-white_bg cs-box_shadow">
                <div className="cs-activity_nft_thumb ml-0">
                    <a href={`/nft/${nft.nft_tokenid}`}><img src={nft?.picture_url} alt="Image" /></a>
                </div>
                <div className="cs-activity_right cs-activity_nft_name">
                    <div className="cs-activity_text"><h3><a href={`/nft/${nft.nft_tokenid}`}>{nft?.name}</a></h3></div>
                </div>
                {generateBody()}
            </div>
        </div>
    )
}

export default OfferCard;