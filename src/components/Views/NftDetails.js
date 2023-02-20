import React, { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import ContentWrapper from "../Layout/ContentWrapper";
import CountLoader from "../Common/CountLoader";
import Avatar from "./Profile/Avatar";
import SimilarItems from './Single/SimilarItems';
import AboutTab from "./Single/AboutTab";
import DetailsTab from "./Single/DetailsTab";
import AttributesTab from "./Single/AttributesTab";
import { useNft } from "../../hooks/useNft";
import { getAccount, getSummaryAddress, getDateTimeWithFormat, isLoggedIn, getImageLink, isVideoAsset, notify, getExpirationDateTime, getExpirationDateTime1 } from "../Helpers/Utils";
import PageLoader from "../Common/PageLoader";
import CreateRaffleModal from "./Single/CreateRaffleModal";
import CreateOfferModal from "./Single/CreateOfferModal";
import BuyTicketModal from "./Single/BuyTicketModal";
import RaffleInfoTabs from "./Single/RaffleInfoTabs";
import NftInfoTabs from "./Single/NftInfoTabs";
import ConnectModal from "../Common/ConnectModal";
import accountStore from "../../store/account.store";
import DrawNftModal from "./Single/DrawNftModal";
import DrawPrizeModal from "./Single/DrawPrizeModal";
import { BITHOMP_URL } from "../Common/constants";
import LikeNft from "../Common/LikeNft";
import ReportModal from '../Common/ReportModal';
import { getReportedItems } from '../Helpers/Reports';

const NftDetails = (props) => {
    const { auth_token } = accountStore;
    const { tokenId, raffleId } = props.match.params;

    const { loading, nft, fetchNftDetails, refresh } = useNft(tokenId, raffleId);

    const [offer, setOffer] = useState();
    const [raffle, setRaffle] = useState();
    const [raffler, setRaffler] = useState();
    const [winner, setWinner] = useState();
    const [collection, setCollection] = useState();
    const [owner, setOwner] = useState();
    const [ticket, setTicket] = useState({ ticket_count: 0 });
    const [activity, setActivity] = useState();
    const [reported, setReported] = useState(false);

    const [connecting, setConnecting] = useState(false);
    const [raffling, setRaffling] = useState(false);
    const [ticketing, setTicketing] = useState(false);
    const [drawing, setDrawing] = useState(false);
    const [prizing, setPrizing] = useState(false);
    const [offering, setOffering] = useState(false);
    const [reporting, setReporting] = useState(false);

    const initPage = () => {
        CountLoader('.cs-countdown_style2');

        $('.cs-tabs.cs-fade_tabs .cs-tab_links a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');
            $('.cs-tabs ' + currentAttrValue)
                .fadeIn(200)
                .siblings()
                .hide();
            $(this).parents('li').addClass('active').siblings().removeClass('active');
            e.preventDefault();
        });
    }

    useEffect(() => {
        if (auth_token) {
            fetchNftDetails(tokenId, raffleId);
        }
    }, [auth_token]);

    useEffect(() => {
        if (!nft) {
            window.location.replace("/not-found");
            return;
        }
        setCollection(nft?.collection);
        setOwner(nft?.owner);
        if (nft?.raffles) {
            setRaffle(nft.raffles[0] || null);
        }
        if (nft?.offers) {
            setOffer(nft.offers[0] || null);
        }
        if (isReportNft()) {
            setReported(true);
        }
    }, [nft])

    useEffect(() => {
        setRaffler(raffle?.raffler);
        setWinner(raffle?.winner);
        setTicket({
            ...ticket,
            nft: { id: nft?.id },
            raffle: { id: raffle?.id }
        })
    }, [raffle])

    useEffect(() => {
        if (!loading) {
            initPage();
        }
    }, [loading])

    const getRafflePriceView = () => {
        return raffle && <div>
            <div className="cs-height_5 cs-height_lg_5"></div>
            <div className="cs-raffle_comment">
                {raffle.comment}
            </div>
            <div className="cs-height_10 cs-height_lg_10"></div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="cs-single_raffle_info">
                        <div className="cs-collection_list_wrap">
                            <ul className="cs-collection_list cs-white_bg cs-box_shadow cs-mp0">
                                {/* <li>
                                    <div className="cs-collection_list_title">NFT Floor Price</div>
                                    <div className="cs-collection_list_number">{collection?.floor_price || 0} XRP</div>
                                </li> */}
                                {isRaffleOwner() && <li>
                                    <div className="cs-collection_list_title">Total Raffle Price</div>
                                    <div className="cs-collection_list_number">{raffle?.total_ticket_price} XRP</div>
                                </li>}
                                <li>
                                    <div className="cs-collection_list_title">Ticket Price</div>
                                    <div className="cs-collection_list_number">{raffle?.ticket_price} XRP</div>
                                </li>
                                <li>
                                    <div className="cs-collection_list_title">Reserve to Sales</div>
                                    <div className="cs-collection_list_number">{raffle?.sell_option * 25} %</div>
                                </li>
                                <li>
                                    <div className="cs-collection_list_title">
                                        {raffle?.reserved_count == raffle?.ticket_count ? <span className="text-danger">
                                            <strong>Sold Out</strong>
                                        </span> : <span>
                                            Tickets Sold ({Number(raffle?.reserved_count / raffle?.ticket_count * 100).toFixed(0)}%)
                                        </span>}
                                    </div>
                                    <div className="cs-collection_list_number">{raffle?.reserved_count} / {raffle?.ticket_count}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    const getPriceView = () => {
        return <div className="cs-single_product_head">
            <p>
                On sale for <span className="cs-accent_color"><strong>{offer?.price} XRP</strong></span>
                {/* {nft?.highest_bid_price && <span> · Highest bid ~ <span className="cs-accent_color"><strong>{nft?.highest_bid_price} XRP</strong></span></span>} */}
                {offer.expire_at && <span> · {getExpirationDateTime1(offer.expire_at)}</span>}
            </p>
        </div>
    }

    const isOwner = () => {
        return nft?.owner?.id == getAccount()?.id || isRaffleOwner();
    }

    const isRaffleOwner = () => {
        return raffler?.id == getAccount()?.id;
    }

    const isWinner = () => {
        return winner?.id == getAccount()?.id;
    }

    const getBuySellView = () => {
        if (isLoggedIn() && getAccount().id == nft?.owner?.id && !raffle) {
            if (!offer) {
                return <div className="row">
                    <div className="col-xl-12">
                        <div className="cs-white_bg cs-box_shadow cs-general_box_5 cs-buy_sell_view">
                            <div className="row">
                                <div className="col-3">
                                    <a className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickCreateRaffle}>
                                        <span>Create Raffle</span>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickListOffer}>
                                        <span>List at Secret</span>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href={`https://nft.onxrp.com/nft/${nft.nft_tokenid}/`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                        <span>List at onXRP</span>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a href={`https://xrp.cafe/nft/${nft.nft_tokenid}`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                        <span>List at xrp.cafe</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                </div>
            } else {
                return <div className="row">
                    <div className="col-xl-7">
                        <div className="cs-white_bg cs-box_shadow cs-general_box_5 cs-buy_sell_view">
                            <div className="row">
                                <div className="col-6">
                                    <a href={`https://nft.onxrp.com/nft/${nft.nft_tokenid}/`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                        <span>List at onXRP</span>
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href={`https://xrp.cafe/nft/${nft.nft_tokenid}`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                        <span>List at xrp.cafe</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                    <div className="col-xl-5">
                        <div className="cs-author_card cs-white_bg cs-box_shadow cs-general_box_4">
                            <a className="cs-btn cs-style1 cs-btn_lg text-center w-100" onClick={onClickUnlist}>
                                <span>Unlist Sale</span>
                            </a>
                        </div>
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                </div>
            }
        } else if (isLoggedIn() && !raffle && (!offer || (offer && offer.from.id != getAccount().id))) {
            return <div className="row">
                <div className="col-xl-12">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                        <div className="row">
                            <div className="col-4">
                                <a className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickOffer}>
                                    <span>Offer at Secret</span>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href={`https://nft.onxrp.com/nft/${nft.nft_tokenid}/`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                    <span>Offer at OnXRP</span>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href={`https://xrp.cafe/nft/${nft.nft_tokenid}`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                    <span>Offer at XRP.cafe</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
            </div>
        } else if (!isLoggedIn() && (!raffle || (raffle && raffle.status == "active"))) {
            return <div className="row">
                <div className="col-xl-12">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                        <div className="row">
                            <div className="col-12 cs-center">
                                <button className="cs-btn cs-style1 cs-btn_lg w-50 text-center" onClick={() => { onConnectWallet() }}>
                                    <span>Connect Wallet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
            </div>
        }

        if (raffle) {
            if (raffle.status == "active") {
                return <div className="row">
                    <div className="col-xl-7">
                        {isRaffleOwner() ? <ul className="cs-collection_list  cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-mp0">
                            <li>
                                <div className="cs-collection_list_title">Possible Earning</div>
                                <div className="cs-collection_list_number">{
                                    Number(raffle.ticket_price * raffle.reserved_count * (100 - raffle.raffle_fee) / 100).toFixed(2)
                                } XRP</div>
                            </li>
                            <li>
                                <div className="cs-collection_list_title">Reserve to Sales</div>
                                <div className="cs-collection_list_number">{25 * raffle.sell_option}%</div>
                            </li>
                            <li>
                                <div className="cs-collection_list_title">Raffle Fee ({raffle.raffle_fee}%)</div>
                                <div className="cs-collection_list_number">{
                                    Number(raffle.ticket_price * raffle.reserved_count * raffle.raffle_fee / 100).toFixed(2)
                                } XRP</div>
                            </li>
                        </ul> : <div className="cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-grid_5 cs-gap_20">
                            <span>Reserve Tickets</span>
                            <div className="cs-form_field_wrap">
                                <input name="ticket_count" type="number" className="cs-form_field" placeholder="0" value={ticket.ticket_count || ""} onChange={onChangeTicketInfo} min={1} />
                            </div>
                            <a className="cs-btn cs-style1 cs-btn_lg text-center" onClick={onClickBuyTickets}><span>Buy</span></a>
                        </div>}
                        <div className="cs-height_20 cs-height_lg_20"></div>
                    </div>
                    <div className="col-xl-5">
                        <div className="cs-general_box_4 cs-box_shadow cs-white_bg cs-center">
                            <div className="cs-countdown_style2" data-countdate={raffle.raffle_end_datetime}>
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
                                    <h3 className="cs-countdown_text">Hours</h3>
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
                        </div>
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                </div>
            } else if (raffle.status == "canceling") {
                return <div className="row">
                    <div className="col-xl-7">
                        {isRaffleOwner() ? <div className="cs-author_card cs-white_bg cs-box_shadow cs-general_box_4">
                            <a className="cs-btn cs-style1 cs-btn_lg text-center w-100" onClick={onClickDrawNft}>
                                <span>Claim NFT</span>
                            </a>
                        </div> : <ul className="cs-collection_list  cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-mp0">
                            <li>
                                <div className="cs-collection_list_title">Raffle Status</div>
                                <div className="cs-collection_list_number">Cancelled</div>
                            </li>
                            <li>
                                <div className="cs-collection_list_title">Refund Tickets</div>
                                <div className="cs-collection_list_number">{Number(raffle.ticket_price * raffle.reserved_count)} XRP</div>
                            </li>
                        </ul>}
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                    <div className="col-xl-5">
                        <div className="cs-author_card cs-white_bg cs-box_shadow cs-general_box_4">
                            <div>
                                <p>Raffle Ended on:</p>
                                <h3>{getDateTimeWithFormat(raffle?.raffle_end_datetime)}</h3>
                            </div>
                        </div>
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                </div>
            } else if (raffle.status == "raffling") {
                return <div className="row">
                    <div className="col-xl-7">
                        <div className="cs-author_card cs-white_bg cs-box_shadow cs-winner_box">
                            <i className="fas fa-crown fa-fw"></i>
                            <span className="cs-winner_title">RAFFLE WINNER</span>
                            <div className="cs-author_img">
                                <Avatar className="cs-profile_avatar_oval" {...{ name: winner?.wallet, image: winner?.picture_url }} />
                            </div>
                            <div>
                                <p className="cs-winner_text">
                                    <a href={`/profile/${winner?.wallet}`}>@{winner?.username || "Unknown"}</a>
                                    {winner?.verified && <i className="fas fa-id-card"></i>}
                                    {winner?.twitter_username && <i className="fab fa-twitter fa-fw"></i>}
                                    {/* <i className="fas fa-medal"></i> */}
                                </p>
                                <div className="cs-white_color_8">{getSummaryAddress(winner?.wallet)}</div>
                            </div>
                        </div>
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                    <div className="col-xl-5">
                        {isWinner() ? <div className="cs-author_card cs-white_bg cs-box_shadow cs-general_box_4">
                            <a className="cs-btn cs-style1 cs-btn_lg text-center w-100" onClick={onClickDrawPrize}>
                                <span>Claim Prize</span>
                            </a>
                        </div> : <ul className="cs-collection_list  cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-mp0">
                            <li>
                                <div className="cs-collection_list_title">Verify Hash <button onClick={onClickCopyHash}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.35381 4.15531L4.35156 5.74756V13.6256C4.35156 14.272 4.60837 14.892 5.06549 15.3491C5.52261 15.8063 6.1426 16.0631 6.78906 16.0631H13.2511C13.1346 16.3921 12.9191 16.6769 12.634 16.8784C12.349 17.0799 12.0086 17.1881 11.6596 17.1881H6.78906C5.84423 17.1881 4.93809 16.8127 4.26999 16.1446C3.6019 15.4765 3.22656 14.5704 3.22656 13.6256V5.74756C3.22656 5.01256 3.69681 4.38631 4.35381 4.15531ZM13.5391 2.18506C13.7607 2.18506 13.9801 2.22871 14.1848 2.31351C14.3896 2.39832 14.5756 2.52262 14.7323 2.67932C14.889 2.83601 15.0133 3.02204 15.0981 3.22678C15.1829 3.43152 15.2266 3.65095 15.2266 3.87256V13.6226C15.2266 13.8442 15.1829 14.0636 15.0981 14.2683C15.0133 14.4731 14.889 14.6591 14.7323 14.8158C14.5756 14.9725 14.3896 15.0968 14.1848 15.1816C13.9801 15.2664 13.7607 15.3101 13.5391 15.3101H6.78906C6.34151 15.3101 5.91229 15.1323 5.59582 14.8158C5.27935 14.4993 5.10156 14.0701 5.10156 13.6226V3.87256C5.10156 3.42501 5.27935 2.99578 5.59582 2.67932C5.91229 2.36285 6.34151 2.18506 6.78906 2.18506H13.5391ZM13.5391 3.31006H6.78906C6.63988 3.31006 6.4968 3.36932 6.39132 3.47481C6.28583 3.5803 6.22656 3.72337 6.22656 3.87256V13.6226C6.22656 13.9331 6.47856 14.1851 6.78906 14.1851H13.5391C13.6882 14.1851 13.8313 14.1258 13.9368 14.0203C14.0423 13.9148 14.1016 13.7717 14.1016 13.6226V3.87256C14.1016 3.72337 14.0423 3.5803 13.9368 3.47481C13.8313 3.36932 13.6882 3.31006 13.5391 3.31006Z" fill="currentColor" />
                                    </svg>
                                </button></div>
                                <div className="cs-collection_list_number">
                                    <a href={`${BITHOMP_URL}/${raffle?.payment_tx_hash}`} target="_blank">{raffle?.payment_tx_hash}</a>
                                </div>
                            </li>
                            <li>
                                <div className="cs-collection_list_title">Lucky Number</div>
                                <div className="cs-collection_list_number">{raffle?.lucky_number}</div>
                            </li>
                        </ul>}
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                </div>
            } else {
                return <div className="row">
                    <div className="col-xl-7">
                        {winner ? <div className="cs-author_card cs-white_bg cs-box_shadow cs-winner_box">
                            <i className="fas fa-crown fa-fw"></i>
                            <span className="cs-winner_title">RAFFLE WINNER</span>
                            <div className="cs-author_img">
                                <Avatar className="cs-profile_avatar_oval" {...{ name: winner?.wallet, image: winner?.picture_url }} />
                            </div>
                            <div>
                                <p className="cs-winner_text">
                                    <a href={`/profile/${winner?.wallet}`}>@{winner?.username || "Unknown"}</a>
                                    {winner?.verified && <i className="fas fa-id-card"></i>}
                                    {winner?.twitter_username && <i className="fab fa-twitter fa-fw"></i>}
                                    {/* <i className="fas fa-medal"></i> */}
                                </p>
                                <div className="cs-white_color_8">{getSummaryAddress(winner?.wallet)}</div>
                            </div>
                        </div> : <ul className="cs-collection_list  cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-mp0">
                            <li>
                                <div className="cs-collection_list_title">Raffle Status</div>
                                <div className="cs-collection_list_number">Cancelled</div>
                            </li>
                            <li>
                                <div className="cs-collection_list_title">Refund Tickets</div>
                                <div className="cs-collection_list_number">{Number(raffle.ticket_price * raffle.reserved_count)} XRP</div>
                            </li>
                        </ul>}
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                    <div className="col-xl-5">
                        {winner ? <ul className="cs-collection_list  cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-mp0">
                            <li>
                                <div className="cs-collection_list_title">Verify Hash <button onClick={onClickCopyHash}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.35381 4.15531L4.35156 5.74756V13.6256C4.35156 14.272 4.60837 14.892 5.06549 15.3491C5.52261 15.8063 6.1426 16.0631 6.78906 16.0631H13.2511C13.1346 16.3921 12.9191 16.6769 12.634 16.8784C12.349 17.0799 12.0086 17.1881 11.6596 17.1881H6.78906C5.84423 17.1881 4.93809 16.8127 4.26999 16.1446C3.6019 15.4765 3.22656 14.5704 3.22656 13.6256V5.74756C3.22656 5.01256 3.69681 4.38631 4.35381 4.15531ZM13.5391 2.18506C13.7607 2.18506 13.9801 2.22871 14.1848 2.31351C14.3896 2.39832 14.5756 2.52262 14.7323 2.67932C14.889 2.83601 15.0133 3.02204 15.0981 3.22678C15.1829 3.43152 15.2266 3.65095 15.2266 3.87256V13.6226C15.2266 13.8442 15.1829 14.0636 15.0981 14.2683C15.0133 14.4731 14.889 14.6591 14.7323 14.8158C14.5756 14.9725 14.3896 15.0968 14.1848 15.1816C13.9801 15.2664 13.7607 15.3101 13.5391 15.3101H6.78906C6.34151 15.3101 5.91229 15.1323 5.59582 14.8158C5.27935 14.4993 5.10156 14.0701 5.10156 13.6226V3.87256C5.10156 3.42501 5.27935 2.99578 5.59582 2.67932C5.91229 2.36285 6.34151 2.18506 6.78906 2.18506H13.5391ZM13.5391 3.31006H6.78906C6.63988 3.31006 6.4968 3.36932 6.39132 3.47481C6.28583 3.5803 6.22656 3.72337 6.22656 3.87256V13.6226C6.22656 13.9331 6.47856 14.1851 6.78906 14.1851H13.5391C13.6882 14.1851 13.8313 14.1258 13.9368 14.0203C14.0423 13.9148 14.1016 13.7717 14.1016 13.6226V3.87256C14.1016 3.72337 14.0423 3.5803 13.9368 3.47481C13.8313 3.36932 13.6882 3.31006 13.5391 3.31006Z" fill="currentColor" />
                                    </svg>
                                </button></div>
                                <div className="cs-collection_list_number">
                                    <a href={`${BITHOMP_URL}/${raffle?.payment_tx_hash}`} target="_blank">{raffle?.payment_tx_hash}</a>
                                </div>
                            </li>
                            <li>
                                <div className="cs-collection_list_title">Lucky Number</div>
                                <div className="cs-collection_list_number">{raffle?.lucky_number}</div>
                            </li>
                        </ul> : <div className="cs-author_card cs-white_bg cs-box_shadow cs-general_box_4">
                            <div>
                                <p>Raffle Ended on:</p>
                                <h3>{getDateTimeWithFormat(raffle?.raffle_end_datetime)}</h3>
                            </div>
                        </div>}
                        <div className="cs-height_15 cs-height_lg_15"></div>
                    </div>
                </div>
            }
        }

        if (nft?.activity?.type == "auction") {
            return <div className="row">
                <div className="col-xl-7">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                        <div className="row">
                            <div className="col-6">
                                <a href="#" className="cs-btn cs-style1 cs-btn_lg w-100 text-center">
                                    <span>Buy Now</span>
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="#" className="cs-btn cs-style1 cs-btn_lg w-100 text-center">
                                    <span>Place Bid</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
                <div className="col-xl-5">
                    <div className="cs-general_box_4 cs-box_shadow cs-white_bg cs-center">
                        <div className="cs-countdown_style2" data-countdate="24 Feburary 2023">
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
                                <h3 className="cs-countdown_text">Hours</h3>
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
                    </div>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
            </div>
        }


    }

    const getOwnerView = () => {
        let user = raffle ? raffler : owner;
        return <div className="cs-author_card cs-white_bg cs-box_shadow">
            <a href={`/profile/${user?.wallet}`}>
                <div className="cs-author_img">
                    <Avatar className="cs-profile_avatar_oval" {...{ name: user?.wallet, image: user?.picture_url }} />
                </div>
            </a>
            <div className="cs-author_right">
                <h3>{raffle ? "Raffled by" : "Owned by"}</h3>
                <a href={`/profile/${user?.wallet}`}>
                    <p>{user?.username ? `@${user?.username.trimStart()}` : getSummaryAddress(user?.wallet)}</p>
                </a>
            </div>
        </div>
    }

    const onClickCreateRaffle = () => {
        setRaffling(true);
    }

    useEffect(() => {
        if (raffling) {
            $("#create_raffle_modal").toggleClass("active");
        }
    }, [raffling])

    const onClickBuyTickets = () => {
        if (Number(ticket.ticket_count) < 1) {
            return
        }

        setTicketing(true);
    }

    useEffect(() => {
        if (ticketing) {
            $("#buy_ticket_modal").toggleClass("active");
        }
    }, [ticketing])

    const onChangeTicketInfo = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        // disallow float value
        if (!Number.isInteger(Number(value))) {
            return;
        }

        if (name == "ticket_count") {
            setTicket({
                ...ticket,
                ticket_count: Number(value)
            });
        }
    }

    useEffect(() => {
        if (connecting) {
            $("#connect_modal").toggleClass("active");
        }
    }, [connecting])

    const onConnectWallet = () => {
        setConnecting(true);
    }

    useEffect(() => {
        if (drawing) {
            $("#draw_nft_modal").toggleClass("active");
        }
    }, [drawing])

    const onClickDrawNft = () => {
        setDrawing(true);
    }

    useEffect(() => {
        if (prizing) {
            $("#draw_prize_modal").toggleClass("active");
        }
    }, [prizing])

    const onClickDrawPrize = () => {
        setPrizing(true);
    }

    const onClickRefresh = () => {
        const res = refresh();
        if (res && res.status) {
            fetchNftDetails(tokenId);
        }
    }

    const onClickShare = () => {
        if (raffle) {
            navigator.clipboard.writeText(`https://secretmarket.xyz/nft/${nft?.nft_tokenid}/${raffle?.id}`);
        } else {
            navigator.clipboard.writeText(`https://secretmarket.xyz/nft/${nft?.nft_tokenid}`);
        }
        notify("The NFT link has been copied.");
    }

    const isReportNft = () => {
        let nfts = getReportedItems("nft");
        if (nfts.includes(nft.id)) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (reporting) {
            $("#report_modal").toggleClass("active");
        }
    }, [reporting])

    const onClickReport = () => {
        if (reported) {
            return;
        }
        setReporting(true);
    }

    useEffect(() => {
        if (offering) {
            $("#create_offer_modal").toggleClass("active");
        }
    }, [offering])

    useEffect(() => {
        if (activity) {
            setOffering(true);
        }
    }, [activity]);

    const onClickTransfer = () => {
        setActivity({
            activity: "transfer",
            nft: nft,
        });
    }

    const onClickListOffer = () => {
        setActivity({
            activity: "list",
            nft: nft,
        });
    }

    const onClickUnlist = () => {
        setActivity({
            activity: "cancel",
            offer_id: offer.offer_index,
            nft: { id: nft.id, nft_tokenid: nft.nft_tokenid },
        });
    }

    const onClickOffer = () => {
        setActivity({
            activity: "bid",
            owner: { id: owner.id, wallet: owner.wallet },
            nft: { id: nft.id, nft_tokenid: nft.nft_tokenid },
        });
    }

    const submitOffer = (activity, offer) => {
        setActivity({
            activity,
            offer_id: offer.offer_id,
            offer_owner: { id: offer.owner.id, wallet: offer.owner.wallet },
            destination: offer.destination?.wallet,
            price: offer.amount,
            nft: { id: nft.id, nft_tokenid: nft.nft_tokenid },
        });
    }

    const onClickCopyHash = () => {
        navigator.clipboard.writeText(raffle?.payment_tx_hash);
    }

    const getAssetView = (nft) => {
        if (isVideoAsset(nft)) {
            return <video src={getImageLink(nft.animation_url || nft.video_url)} autoPlay loop muted controls />
        }

        return <img style={{ background: `url(${getImageLink(nft.picture_url)})` }} alt="" />
    }

    return (
        loading ? <PageLoader /> : <ContentWrapper>
            <div className="cs-height_140 cs-height_lg_120"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cs-single_asset">
                            <div className="cs-asset_view">
                                {getAssetView(nft)}
                                {/* <span className="cs-card_rare cs-primary_color">
                                    #{nft?.rarity}
                                </span> */}
                                {raffle?.featured && <span className="cs-card_featured cs-primary_color">
                                    Featured
                                </span>}
                                <LikeNft nft={nft} />
                            </div>
                        </div>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <div className="cs-tabs cs-fade_tabs cs-style1">
                            <div className="cs-medium">
                                <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                                    <li className="active"><a href="#About">About</a></li>
                                    <li><a href="#Details">Details</a></li>
                                    <li><a href="#Attributes">Attributes</a></li>
                                </ul>
                            </div>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div className="cs-tab_content cs-tab_nft_detail_content">
                                <AboutTab {...{ description: nft?.description }} />
                                <DetailsTab {...{
                                    issuer: collection?.issuer,
                                    owner: owner?.wallet,
                                    nft_tokenid: nft?.nft_tokenid,
                                    standard: "XLS-20",
                                    creator_fee: nft?.transfer_fee,
                                    ipfs_url: nft?.ipfs_url
                                }} />
                                <AttributesTab {...{ attributes: nft?.nft_attributes || [] }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="cs-height_0 cs-height_lg_40"></div>
                        <div className="cs-single_product_head">
                            <h2>{nft?.name}</h2>
                            <div className="cs-single_info_head cs-box_shadow">
                                <a id="nft_refresh" className="cs-style1 cs-btn" onClick={onClickRefresh}>
                                    <span><i className="fas fa-redo fa-fw"></i></span>
                                </a>
                                <ReactTooltip anchorId="nft_refresh" className="cs-modal_tooltip" place="bottom" content="Refresh NFT details" />
                                <a id="nft_share" className="cs-style1 cs-btn" onClick={onClickShare}>
                                    <span><i className="fas fa-share-alt fa-fw"></i></span>
                                </a>
                                <ReactTooltip anchorId="nft_share" className="cs-modal_tooltip" place="bottom" content="Copy NFT link" />
                                {!isOwner() && <a className="cs-style1 cs-btn" id="nft_report" onClick={onClickReport}>
                                    <span><i className={`${reported ? "fas" : "far"} fa-flag fa-fw`}></i></span>
                                </a>}
                                <ReactTooltip anchorId="nft_report" className="cs-modal_tooltip" place="bottom" content={reported ? "You have already reported this NFT" : "Report illegal material"} />
                                {isOwner() && <a className="cs-style1 cs-btn" id="nft_transfer" onClick={onClickTransfer}>
                                    <span><i className="fas fa-paper-plane fa-fw"></i></span>
                                </a>}
                                <ReactTooltip anchorId="nft_transfer" className="cs-modal_tooltip" place="bottom" content="Transfer NFT" />
                            </div>
                        </div>
                        {getRafflePriceView()}
                        {offer && getPriceView()}
                        <div className="cs-height_15 cs-height_lg_15"></div>
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="cs-author_card cs-white_bg cs-box_shadow">
                                    <a href={`/collection/${collection?.slug}`}>
                                        <div className="cs-author_img">
                                            <img src={getImageLink(collection?.picture_url)} alt="" />
                                        </div>
                                    </a>
                                    <div className="cs-author_right">
                                        <a href={`/collection/${collection?.slug}`}>
                                            <h3 className="cs-nft_details_collection_name">{collection?.name}</h3>
                                        </a>
                                        <p>created by <a href={`/profile/${collection?.issuer}`}>
                                            <span>{collection?.creator?.username ? `@${collection?.creator?.username.trimStart()}` : getSummaryAddress(collection?.issuer)}</span>
                                        </a></p>
                                    </div>
                                </div>
                                <div className="cs-height_15 cs-height_lg_15"></div>
                            </div>
                            <div className="col-xl-5">
                                {getOwnerView()}
                                <div className="cs-height_15 cs-height_lg_15"></div>
                            </div>
                        </div>
                        {getBuySellView()}
                        {nft && raffle && <RaffleInfoTabs raffleId={raffle?.id} reservedCount={raffle?.reserved_count} status={raffle?.status} />}
                        {nft && !raffle && <NftInfoTabs tokenId={tokenId} nftOwner={owner} submit={submitOffer} />}
                        <div className="cs-height_30 cs-height_lg_30"></div>
                    </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30"></div>
                {collection && <SimilarItems tokenId={nft.nft_tokenid} collection={collection} />}
            </div>
            <div className="cs-height_70 cs-height_lg_70"></div>

            {connecting && <ConnectModal
                closeModal={() => { setConnecting(false) }} />}
            {raffling && <CreateRaffleModal nft={nft}
                refreshDetails={() => { fetchNftDetails(tokenId) }}
                closeModal={() => { setRaffling(false) }} />}
            {ticketing && <BuyTicketModal ticket={ticket}
                refreshDetails={() => { fetchNftDetails(tokenId) }}
                closeModal={() => { setTicketing(false) }} />}
            {drawing && <DrawNftModal raffleId={raffle?.id}
                refreshDetails={() => { fetchNftDetails(tokenId) }}
                closeModal={() => { setDrawing(false) }} />}
            {prizing && <DrawPrizeModal raffleId={raffle?.id}
                refreshDetails={() => { fetchNftDetails(tokenId) }}
                closeModal={() => { setPrizing(false) }} />}
            {offering && <CreateOfferModal activity={activity}
                refreshDetails={() => { fetchNftDetails(tokenId) }}
                closeModal={() => { setOffering(false); setActivity(); }} />}
            {reporting && <ReportModal data={{ nft: nft.id }}
                closeModal={(res) => { setReporting(false); setReported(res); }} />}
        </ContentWrapper >
    );
}

export default observer(NftDetails);
