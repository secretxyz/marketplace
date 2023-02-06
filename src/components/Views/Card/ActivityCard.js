import React, { useEffect, useState } from 'react';
import { getDifferenceTime, getSummaryUsername } from '../../Helpers/Utils';
import Avatar from '../Profile/Avatar';

const ActivityCard = ({ data }) => {
    const nft = data.nft?.data?.attributes;
    const from = data.from?.data?.attributes;
    const raffle = {
        ...data.raffle?.data?.attributes,
        id: data.raffle?.data?.id,
    };
    const raffle_ticket = data.raffle_ticket?.data?.attributes;

    const generateMessage = () => {
        switch (data.activity) {
            case "raffle-create":
                return <p>
                    <a href={`/profile/${from?.wallet}`}>{`${getSummaryUsername(from)}`}</a> created the raffle
                </p>
            case "raffle-winner":
                return <>
                    {`${getSummaryUsername(from)} was chosen as the winner`}
                </>
            case "raffle-cancel":
                return <>
                    {`The raffle has cancelled`}
                </>
            case "raffle-end":
                return <>
                    {`The raffle has ended`}
                </>
            case "raffle-ticket":
                return <p>
                    <a href={`/profile/${from?.wallet}`}>{`${getSummaryUsername(from)}`} </a> reserved <span>{raffle_ticket?.ticket_count} tickets</span>
                </p>
        }
    }

    const getCategoryIcon = () => {
        switch (data.activity) {
            case "raffle-create":
                return "fa fa-award";
            case "raffle-winner":
                return "fas fa-crown";
            case "raffle-cancel":
                return "fa fa-trash";
            case "raffle-end":
                return "fas fa-clock";
            case "raffle-ticket":
                return "fas fa-ticket-alt";
        }
    }

    return (
        <div className="cs-activity cs-type2 cs-white_bg cs-box_shadow">
            <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color cs-activity_category_icon">
                <i className={getCategoryIcon()}></i>
            </div>
            <div className="cs-activity_nft_thumb">
                <a href={`/nft/${nft.nft_tokenid}`}><img src={nft?.picture_url} alt="Image" /></a>
            </div>
            <div className="cs-activity_right cs-activity_nft_name">
                <div className="cs-activity_text"><h3><a href={`/nft/${nft.nft_tokenid}`}>{nft?.name}</a></h3></div>
                <p className="cs-activity_price"><span>Ticket/Price</span> {raffle.ticket_price} XRP</p>
            </div>
            <div className="cs-activity_right">
                <div className="cs-activity_text">
                    <a href={`/profile/${from?.wallet}`}><Avatar className="cs-profile_avatar_oval" {...{ name: from?.wallet, image: from?.picture_url }} /></a>
                    {generateMessage()}
                </div>
                <p className="cs-activity_date">{getDifferenceTime(data.createdAt)}</p>
            </div>
            <a href={`/nft/${nft.nft_tokenid}/${raffle.id}`} className="cs-activity_view cs-btn cs-style1 cs-card_btn_3">
                <span>View</span>
            </a>
        </div>
    )
}

export default ActivityCard;