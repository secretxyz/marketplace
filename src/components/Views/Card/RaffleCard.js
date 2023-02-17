import React, { useEffect } from 'react';
import Avatar from "../Profile/Avatar";
import CountLoader from '../../Common/CountLoader';
import { getAccount, getDateTimeWithFormat, getDifferenceTime, getImageLink, getRaffleStatus } from '../../Helpers/Utils';
import { getSummaryAddress } from '../../Helpers/Utils';
import LikeNft from '../../Common/LikeNft';

const RaffleCard = ({ data, hiddenStatus }) => {
    const nft = data.nft?.data?.attributes;
    const nft_link = `/nft/${nft?.nft_tokenid}`;
    const raffle_link = `/nft/${nft?.nft_tokenid}/${data.id}`;
    const raffler = data.raffler?.data?.attributes;

    const counter = new Date(data.raffle_end_datetime).getTime();
    useEffect(() => {
        CountLoader(`#${counter}`);
    }, [])

    return (
        <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
            {/* {nft?.rarity_rank && <span className="cs-card_rare cs-primary_color">
                #{nft.rarity_rank}
            </span>} */}
            {data.featured && <span className="cs-card_featured cs-primary_color">
                Featured
            </span>}
            {/* {nft?.likes && <span className="cs-card_like cs-primary_color">
                <i className="fas fa-heart fa-fw"></i>
                {nft.likes}
            </span>} */}
            <LikeNft nft={{ id: data.nft?.data?.id, likes: nft?.likes }} />
            <a href={nft_link} className="cs-card_thumb cs-zoom_effect">
                <img style={{ background: `url(${getImageLink(nft.picture_url)})` }} alt="Image" className="cs-zoom_item" />
            </a>
            {
                data.status == "active" ? <div id={counter} className="cs-countdown" data-countdate={data.raffle_end_datetime} data-key={counter}>
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
                </div> : <div className="cs-sale_end_item">
                    <div className="cs-sale_end_text1">Raffle ended on</div>
                    <h3 className="cs-sale_end_text2">{getDifferenceTime(data.raffle_end_datetime)}</h3>
                </div>
            }
            <div className="cs-raffle_card_info">
                <a href={`/profile/${raffler.wallet}`} className="cs-avatar cs-white_bg cs-box_shadow" target="_blank">
                    <Avatar className="cs-profile_avatar_oval" {...{ name: raffler?.wallet, image: raffler?.picture_url }} />
                    <span>{raffler?.username ?? getSummaryAddress(raffler?.wallet)}</span>
                </a>
                <h3 className="cs-card_title">
                    <a href={nft_link}>{data.name}</a>
                </h3>
                <div className="cs-card_price">
                    Price/Ticket: <b className="cs-primary_color">{data.ticket_price} XRP</b>
                </div>
                <div className="cs-card_price">Sold: {data.reserved_count == data.ticket_count ? <b className="text-danger">
                    Sold Out
                </b> : <span><b className="cs-primary_color">{data.reserved_count} / {data.ticket_count}</b> ({Number(data.reserved_count / data.ticket_count * 100).toFixed(0)}%) <span className="cs-card_threshold cs-primary_color cs-box_shadow">{data.sell_option * 25} %</span></span>
                }
                </div>
                {/* <div className="cs-card_price">
                    Reserve to Sales: <b className="cs-primary_color">{data.sell_option * 25} %</b>
                </div> */}
                <hr />
                <div className="cs-card_footer cs-card_footer_center">
                    <a href={raffle_link} className="cs-btn cs-style1 cs-card_btn_3">
                        <span>View Raffle</span>
                        {!hiddenStatus && <span className="cs-btn_small_text"> ({getRaffleStatus(data.status)})</span>}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RaffleCard;