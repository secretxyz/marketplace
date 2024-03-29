import { useEffect } from "react";
import Avatar from "../Profile/Avatar";
import { useRaffleBuyers, useRaffleTransactions } from "../../../hooks/useRaffle";
import { getSummaryAddress, getSummaryUsername, getDateTimeWithFormat } from "../../Helpers/Utils";
import { BITHOMP_URL } from "../../Common/constants";
import { useState } from "react";

const RaffleBuyerRow = ({ data }) => {
    return (
        <li>
            <div className="cs-activity cs-white_bg cs-box_shadow cs-type1">
                <a className="cs-activity_avatar" href={`/profile/${data.wallet}`}>
                    <Avatar className="cs-activity_avatar" {...{ name: data.wallet, image: data.picture_url }} />
                </a>
                <div className="cs-activity_right">
                    <p className="cs-activity_text">
                        <a href={`/profile/${data.wallet}`}>@{data.username || "Unknown"}</a>
                        {data.verified && <i className="fas fa-id-card"></i>}
                        {data.twitter_username && <i className="fab fa-twitter fa-fw"></i>}
                        {/* <i className="fas fa-medal"></i> */}
                    </p>
                    <p className="cs-activity_posted_by">{getSummaryAddress(data.wallet)}</p>
                </div>
                <div className="cs-activity_sub_right cs-center cs-accent_color">
                    {data.tickets} <i className="fas fa-ticket-alt"></i>
                </div>
            </div>
        </li>
    );
}

const RaffleTxRow = ({ data, status }) => {
    const ticket = data?.attributes;
    const buyer = data?.attributes?.buyer?.data?.attributes;
    return (
        <li>
            <div className={`cs-activity cs-white_bg cs-box_shadow cs-type1 ${ticket.status == "winner" && "cs-winner_border"}`}>
                <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color cs-activity_number">
                    {data.number}
                </div>
                <a className="cs-activity_avatar cs-activity_tx_avatar" href={`/profile/${buyer.wallet}`}>
                    <Avatar className="cs-activity_avatar" {...{ name: buyer.wallet, image: buyer.picture_url }} />
                </a>
                <div className="cs-activity_right">
                    <p className="cs-activity_text cs-activity_row_text">
                        {
                            status == "canceling" || status == "canceled" ?
                                <>Refunded <span>{ticket.ticket_count} Tickets</span> to <a href={`/profile/${buyer.wallet}`}>{getSummaryUsername(buyer)}</a></> :
                                <>Reserved <span>{ticket.ticket_count} Tickets</span> by <a href={`/profile/${buyer.wallet}`}>{getSummaryUsername(buyer)}</a></>
                        }
                    </p>
                    <p className="cs-activity_text">
                        {getDateTimeWithFormat(status == "canceling" || status == "canceled" ? ticket.updatedAt : ticket.createdAt)}
                    </p>
                </div>
                <a href={`${BITHOMP_URL}${status == "canceling" || status == "canceled" ? ticket.cancel_tx_hash : ticket.create_tx_hash}`} className="cs-activity_icon cs-center cs-gray_bg cs-accent_color" target="_blank">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div >
        </li >
    );
}

const RaffleInfoTabs = ({ raffleId, reservedCount, status }) => {
    const { buyers, fetchRaffleBuyers } = useRaffleBuyers();
    const { loading, transactions, fetchNext } = useRaffleTransactions();
    const [txs, setTxs] = useState([]);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            fetchNext(raffleId);
        }
    }

    useEffect(() => {
        if (transactions) {
            let sum = 0;
            let txs = transactions.map(t => {
                sum += t.attributes.ticket_count;
                return { ...t, number: reservedCount - sum + 1 }
            })
            setTxs(txs);
        }
    }, [transactions])

    useEffect(() => {
        if (raffleId) {
            fetchRaffleBuyers(raffleId);
            fetchNext(raffleId, 0);
        }
    }, [raffleId])

    return (
        <div className="row">
            <div className="col-xl-7">
                <div className="cs-tabs cs-fade_tabs cs-style1">
                    <div className="cs-medium">
                        <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                            <li className="active"><a className="cs-tab-sm" href="#participants">Participants ({buyers.length})</a></li>
                            <li><a className="cs-tab-sm" href="#transactions">Transactions ({transactions.length})</a></li>
                        </ul>
                    </div>
                    <div className="cs-height_10 cs-height_lg_10"></div>
                    <div className="cs-tab_content cs-tab_nft_info_content" onScroll={handleScroll}>
                        <div id="participants" className="cs-tab active">
                            <ul className="cs-activity_list cs-mp0">
                                {buyers.map(buyer => (
                                    <RaffleBuyerRow data={buyer} key={buyer.account_id} />
                                ))}
                            </ul>
                        </div>
                        <div id="transactions" className="cs-tab">
                            <ul className="cs-activity_list cs-mp0">
                                {txs.map(tx => (
                                    <RaffleTxRow data={tx} status={status} key={tx.id} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
            </div>
            <div className="col-xl-5">
                <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                    <h5>Terms & Conditions</h5>
                    <ul>
                        <li className="cs-mp1">Once raffle is complete or cancelled, all NFT prizes can be claimed by the winner or creator once complete.</li>
                        <li className="cs-mp1">Raffle tickets cannot be refunded once bought unless the raffle is cancelled.</li>
                        <li className="cs-mp1">Raffle tickets will not be refunded if you did not win the raffle.</li>
                        <li className="cs-mp1">You can only buy 20% of total tickets.</li>
                        <li className="cs-mp1">Do not purchase tickets to your own hosted raffle.</li>
                    </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
            </div>
        </div>
    );
}

export default RaffleInfoTabs;