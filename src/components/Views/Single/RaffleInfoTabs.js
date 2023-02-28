import { useEffect } from "react";
import Avatar from "../Profile/Avatar";
import { useRaffleBuyers, useRaffleHistory, useRaffleTransactions } from "../../../hooks/useRaffle";
import { getSummaryAddress, getSummaryUsername, getDateTimeWithFormat, getTicketStatus } from "../../Helpers/Utils";
import { APP_COLORS, BITHOMP_URL } from "../../Common/constants";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

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
                <a href={`${BITHOMP_URL}/${status == "canceling" || status == "canceled" ? ticket.cancel_tx_hash : ticket.create_tx_hash}`} className="cs-activity_icon cs-center cs-gray_bg cs-accent_color" target="_blank">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div >
        </li >
    );
}

const RaffleHistoryRow = ({ data }) => {
    const raffle = data?.attributes;
    const raffler = raffle?.raffler?.data.attributes;

    return (
        <li>
            <div className="cs-activity cs-box_shadow cs-white_bg cs-type1">
                <div className="cs-activity_avatar">
                    <Avatar className="cs-activity_avatar" {...{ name: raffler.wallet, image: raffler.picture_url }} />
                </div>
                <div className="row w-100">
                    <div className="col-xl-12">
                        <div className="cs-activity_text">Raffled by <a href="#">{getSummaryUsername(raffler)}</a></div>
                        <div className="cs-activity_posted_by">
                            {getDateTimeWithFormat(raffle.raffle_start_datetime)}
                            <span className="cs-activity_status">{getTicketStatus(raffle.status)}</span>
                        </div>
                    </div>
                    {/* <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Ticket Price</span></p>
                        <p className="cs-activity_text">{raffle.ticket_price} XRP</p>
                    </div>
                    <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Tickets Sold</span></p>
                        <p className="cs-activity_text">
                            {raffle.reserved_count} / {raffle.ticket_count}
                        </p>
                    </div> */}
                </div>
                <a href={`/raffle/${data.id}`} className="cs-btn cs-style1 cs-card_btn_3">
                    <span>View</span>
                </a>
            </div>
        </li>
    );
}

const RaffleInfoTabs = ({ raffleId, reservedCount, status, tokenId }) => {
    const { loading: buyersLoading, buyers, fetchRaffleBuyers } = useRaffleBuyers();
    const { loading: txLoading, transactions, fetchNext } = useRaffleTransactions();
    const { loading: historyLoading, history, fetchNext: fetchHistoryNext } = useRaffleHistory();

    const [txs, setTxs] = useState([]);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            fetchNext(raffleId);
        }
    }

    const handleScroll1 = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            fetchHistoryNext(tokenId);
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
            fetchNext(raffleId, 1);
        }
    }, [raffleId])

    useEffect(() => {
        fetchHistoryNext(tokenId, 1);
    }, [tokenId])

    return (
        <div className="row">
            <div className="col-xl-7">
                <div className="cs-tabs cs-fade_tabs cs-style1">
                    <div className="cs-medium">
                        <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                            <li className="active"><a className="cs-tab-sm" href="#participants">Participants ({buyers.length})</a></li>
                            <li><a className="cs-tab-sm" href="#transactions">Transactions ({transactions.length})</a></li>
                            <li><a className="cs-tab-sm" href="#history">History</a></li>
                        </ul>
                    </div>
                    <div className="cs-height_10 cs-height_lg_10"></div>
                    <div className="cs-tab_content cs-tab_nft_info_content" >
                        <div id="participants" className="cs-tab active">
                            <ul className="cs-activity_list cs-mp0">
                                {buyers.map(buyer => (
                                    <RaffleBuyerRow data={buyer} key={buyer.account_id} />
                                ))}
                                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={buyersLoading} size={15} />
                                {!buyersLoading && buyers.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                            </ul>
                        </div>
                        <div id="transactions" className="cs-tab">
                            <ul className="cs-activity_list cs-mp0" onScroll={handleScroll}>
                                {txs.map(tx => (
                                    <RaffleTxRow data={tx} status={status} key={tx.id} />
                                ))}
                                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={txLoading} size={15} />
                                {!txLoading && txs.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                            </ul>
                        </div>
                        <div id="history" className="cs-tab">
                            <ul className="cs-activity_list cs-mp0" onScroll={handleScroll1}>
                                {history.map(d => (
                                    <RaffleHistoryRow data={d} key={d.id} />
                                ))}
                                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={historyLoading} size={15} />
                                {!historyLoading && history.length == 0 && <div className="cs-center_line">There are no records to display</div>}
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