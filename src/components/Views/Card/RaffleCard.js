import React, { useEffect } from 'react';
import Avatar from "../Profile/Avatar";
import CountLoader from '../../Common/CountLoader';
import { getAccount } from '../../Helpers/Utils';
import { getSummaryAddress } from '../../Helpers/Utils';

const RaffleCard = ({ data }) => {

    const nft_link = `/nft/${data.nft?.data?.attributes?.nft_tokenid}`;

    useEffect(() => {
        CountLoader('.cs-countdown');
    }, [data])


    return (
        <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
            <span className="cs-card_rare cs-primary_color">
                #1342
            </span>
            <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw"></i>
                {data.likes}
            </span>
            <a href={nft_link} className="cs-card_thumb cs-zoom_effect">
                <img style={{ background: `url(${data.nft?.data?.attributes?.picture_url})` }} alt="Image" className="cs-zoom_item" />
            </a>
            <div className="cs-countdown" data-countdate={data.raffle_end_datetime}>
                <div className="cs-countdown_item">
                    <div className="cs-countdown_number">
                        <div className="cs-count_days"></div>
                    </div>
                    <h3 className="cs-countdown_text">Days</h3>
                </div>
                <div className="cs-countdown_item">
                    <div className="cs-countdown_number">
                        <div className="cs-count_hours"></div>
                    </div>
                    <h3 className="cs-countdown_text">Hrs</h3>
                </div>
                <div className="cs-countdown_item">
                    <div className="cs-countdown_number">
                        <div className="cs-count_minutes"></div>
                    </div>
                    <h3 className="cs-countdown_text">Min</h3>
                </div>
                <div className="cs-countdown_item">
                    <div className="cs-countdown_number">
                        <div className="cs-count_seconds"></div>
                    </div>
                    <h3 className="cs-countdown_text">Sec</h3>
                </div>
            </div>
            <div className="cs-raffle_card_info">
                <a href={nft_link} className="cs-avatar cs-white_bg">
                    <Avatar className="cs-profile_avatar_oval"
                        {...{
                            name: data.raffler?.data?.attributes?.wallet,
                            image: data.raffler?.data?.attributes?.picture_url
                        }}
                    />
                    <span>{data.raffler?.data?.attributes?.username ?? getSummaryAddress(data.raffler?.data?.attributes?.wallet)}</span>
                </a>
                <h3 className="cs-card_title">
                    <a href={nft_link}>{data.name}</a>
                </h3>
                <div className="cs-card_price">Tickets Remaining: <b className="cs-primary_color">{data.reserved_count} / {data.ticket_count}</b></div>
                <div className="cs-card_price">Price/Ticket: <b className="cs-primary_color">{data.ticket_price} XRP</b></div>
                <hr />
                <div className="cs-card_footer cs-card_footer_center">
                    <a href={nft_link} className="cs-btn cs-style1 cs-card_btn_3" data-modal="#bid_1">
                        <span>View Raffle</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RaffleCard;