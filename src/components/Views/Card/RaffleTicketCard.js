import React, { useEffect } from 'react';
import Avatar from "../Profile/Avatar";
import CountLoader from '../../Common/CountLoader';
import { getAccount, getDateTimeWithFormat, getDifferenceTime } from '../../Helpers/Utils';
import { getSummaryAddress, getSummaryUsername, getTicketStatus } from '../../Helpers/Utils';

const RaffleTicketCard = ({ data }) => {
    const raffle = data?.raffle?.data?.attributes;
    const raffler = raffle?.raffler?.data?.attributes;
    const nft = raffle?.nft?.data?.attributes;

    return (
        <li>
            <div className={`cs-activity cs-white_bg cs-type1 cs-raffle_ticket ${data.status == "winner" && "cs-winner_border"}`}>
                <a href={`/nft/${nft?.nft_tokenid}/${data?.raffle?.data?.id}`} target="_blank">
                    <img className="cs-ticket_image" src={nft.picture_url} />
                </a>
                <div className="row w-100">
                    <div className="col-xl-4">
                        <a href={`/nft/${nft?.nft_tokenid}`} target="_blank"><h4>{raffle?.name}</h4></a>
                        <p className="cs-activity_text">Raffled by <a href={`/profile/${raffler?.wallet}`} target="_blank">{getSummaryUsername(raffler)}</a></p>
                    </div>
                    <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Raffle Ended</span></p>
                        <p className="cs-activity_text">{getDifferenceTime(raffle.raffle_end_datetime)}</p>
                        {getTicketStatus(data.status)}
                    </div>
                    <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Tickets Sold</span></p>
                        {raffle.reserved_count == raffle.ticket_count ? <p className="text-danger">
                            Sold Out
                        </p> : <p className="cs-activity_text">
                            {raffle.reserved_count} / {raffle.ticket_count}
                        </p>}
                        <p className="cs-activity_text" ><span>Ticket Price:</span> <strong>{raffle.ticket_price} XRP</strong></p>
                    </div>
                    <div className="col-xl-2">
                        <p className="cs-activity_text"><span>Tickets Bought</span></p>
                        <p className="cs-activity_text">{data.ticket_count}</p>
                        <p className="cs-activity_text"><strong>{Number(data.ticket_count / raffle.ticket_count * 100).toFixed(2)}% Chance</strong></p>
                    </div>
                </div>
                {/* <a href="#" className="cs-activity_icon cs-center cs-gray_bg cs-accent_color" target="_blank">
                    <i className="fas fa-arrow-right"></i>
                </a> */}
            </div>
        </li>
    );
}

export default RaffleTicketCard;