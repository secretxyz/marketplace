import React, { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import ContentWrapper from "../Layout/ContentWrapper";
import CountLoader from "../Common/CountLoader";
import Avatar from "./Profile/Avatar";
import SimilarItems from './Single/SimilarItems';
import AboutTab from "./Single/AboutTab";
import DetailsTab from "./Single/DetailsTab";
import AttributesTab from "./Single/AttributesTab";
import { useNft, useNftOther } from "../../hooks/useNft";
import { getAccount, getSummaryAddress, getDateTimeWithFormat, isLoggedIn, getImageLink } from "../Helpers/Utils";
import CreateRaffleModal from "./Single/CreateRaffleModal";
import BuyTicketModal from "./Single/BuyTicketModal";
import PageLoader from "../Common/PageLoader";
import RaffleInfoTabs from "./Single/RaffleInfoTabs";
import NftInfoTabs from "./Single/NftInfoTabs";
import ConnectModal from "../Common/ConnectModal";
import accountStore from "../../store/account.store";
import DrawNftModal from "./Single/DrawNftModal";
import DrawPrizeModal from "./Single/DrawPrizeModal";
import { BITHOMP_URL } from "../Common/constants";

const NftDetails = (props) => {
    const { auth_token } = accountStore;
    const { tokenid, raffleid } = props.match.params;

    const { loading, nft, fetchNftDetails } = useNft(tokenid, raffleid);
    const { loading: submitting, result, refresh, like, report } = useNftOther();

    const [raffle, setRaffle] = useState();
    const [raffler, setRaffler] = useState();
    const [winner, setWinner] = useState();
    const [collection, setCollection] = useState();
    const [owner, setOwner] = useState();
    const [ticket, setTicket] = useState({ ticket_count: 0 });

    const [connecting, setConnecting] = useState(false);
    const [raffling, setRaffling] = useState(false);
    const [ticketing, setTicketing] = useState(false);
    const [drawing, setDrawing] = useState(false);
    const [prizing, setPrizing] = useState(false);

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
            fetchNftDetails(tokenid, raffleid);
        }
    }, [auth_token]);

    useEffect(() => {
        if (!nft) {
            window.location.replace("/");
            return;
        }
        setCollection(nft?.collection);
        setOwner(nft?.owner);
        if (nft?.raffles) {
            setRaffle(nft.raffles[0] || null);
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
            <div className="cs-height_15 cs-height_lg_15"></div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="cs-single_raffle_info">
                        <div className="cs-collection_list_wrap">
                            <ul className="cs-collection_list cs-white_bg cs-box_shadow cs-mp0">
                                {/* <li>
                                    <div className="cs-collection_list_title">NFT Floor Price</div>
                                    <div className="cs-collection_list_number">{collection?.floor_price || 0} XRP</div>
                                </li> */}
                                <li>
                                    <div className="cs-collection_list_title">Total Ticket Price</div>
                                    <div className="cs-collection_list_number">{raffle?.total_ticket_price} XRP</div>
                                </li>
                                <li>
                                    <div className="cs-collection_list_title">Ticket Price</div>
                                    <div className="cs-collection_list_number">{raffle?.ticket_price} XRP</div>
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
        if (nft?.bid_price) {
            return <div className="cs-single_product_head">
                <p>
                    On sale for <span className="cs-accent_color"><strong>{nft?.bid_price} XRP</strong></span>
                    {nft?.highest_bid_price && <span> · Highest bid ~ <span className="cs-accent_color"><strong>{nft?.highest_bid_price} XRP</strong></span></span>}
                </p>
            </div>
        }
    }

    const isRaffleOwner = () => {
        return raffler?.id == getAccount()?.id;
    }

    const isWinner = () => {
        return winner?.id == getAccount()?.id;
    }

    const getBuySellView = () => {
        if (isLoggedIn() && getAccount().id == nft?.owner?.id && !raffle) {
            return <div className="row">
                <div className="col-xl-12">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                        <div className="row">
                            <div className="col-4">
                                <a className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickCreateRaffle}>
                                    <span>Create Raffle</span>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href={`https://nft.onxrp.com/nft/${nft.nft_tokenid}/`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                    <span>List at OnXRP</span>
                                </a>
                            </div>
                            <div className="col-4">
                                <a href={`https://xrp.cafe/nft/${nft.nft_tokenid}`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                    <span>List at XRP.cafe</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
            </div>
        } else if (!isLoggedIn()) {
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
                                <span>Draw Prize</span>
                            </a>
                        </div> : <ul className="cs-collection_list  cs-white_bg cs-box_shadow cs-general_box_4 cs-single_buy_area cs-mp0">
                            <li>
                                <div className="cs-collection_list_title">Verify Hash</div>
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
                                <div className="cs-collection_list_title">Verify Hash</div>
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
            <a href={`/profile/${user?.wallet}`} target="_blank">
                <div className="cs-author_img">
                    <Avatar className="cs-profile_avatar_oval" {...{ name: user?.wallet, image: user?.picture_url }} />
                </div>
            </a>
            <div className="cs-author_right">
                <h3>{raffle ? "Raffled by" : "Owned by"}</h3>
                <a href={`/profile/${user?.wallet}`} target="_blank">
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
        if (name == "ticket_count") {
            setTicket({
                ...ticket,
                ticket_count: Number(event.target.value)
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
        refresh(tokenid);
    }

    const onClickLike = () => {
        console.log("liking...");
    }

    const onClickShare = () => {
        console.log("sharing...");
    }

    const onClickReport = () => {
        console.log("sharing...");
    }

    useEffect(() => {
        if (result) {
            fetchNftDetails(tokenid);
        }
    }, [result])

    return (
        loading || submitting ? <PageLoader /> : <ContentWrapper>
            <div className="cs-height_140 cs-height_lg_120"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cs-single_asset">
                            <div className="cs-asset_view">
                                <img src={nft?.picture_url} alt="" />
                                <span className="cs-card_rare cs-primary_color">
                                    #{nft?.rarity}
                                </span>
                                <span className="cs-card_like cs-primary_color cs-box_shadow">
                                    <i className="fas fa-heart fa-fw"></i>
                                    {nft?.likes}
                                </span>
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
                                <a className="cs-style1 cs-btn" onClick={onClickRefresh}>
                                    <span><i className="fas fa-redo fa-fw"></i></span>
                                </a>
                                <a className="cs-style1 cs-btn" onClick={onClickShare}>
                                    <span><i className="fas fa-share fa-fw"></i></span>
                                </a>
                                <a className="cs-style1 cs-btn" onClick={onClickReport}>
                                    <span><i className="fas fa-flag fa-fw"></i></span>
                                </a>
                            </div>
                        </div>
                        {getRafflePriceView()}
                        {getPriceView()}
                        <div className="cs-height_15 cs-height_lg_15"></div>
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="cs-author_card cs-white_bg cs-box_shadow">
                                    <a href={`/collection/${collection?.slug}`} target="_blank">
                                        <div className="cs-author_img">
                                            <img src={getImageLink(collection?.picture_url)} alt="" />
                                        </div>
                                    </a>
                                    <div className="cs-author_right">
                                        <a href={`/collection/${collection?.slug}`} target="_blank">
                                            <h3 className="cs-nft_details_collection_name">{collection?.name}</h3>
                                        </a>
                                        <p>created by <a href={`/profile/${collection?.issuer}`}>
                                            <span>{collection?.creator ? `@${collection?.creator.name}` : getSummaryAddress(collection?.issuer)}</span>
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
                        {nft && raffle && <RaffleInfoTabs raffleId={raffle?.id} reservedCount={raffle?.reserved_count} />}
                        {nft && !raffle && <NftInfoTabs tokenid={tokenid} />}
                        <div className="cs-height_30 cs-height_lg_30"></div>
                    </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30"></div>
                <SimilarItems />
            </div>
            <div className="cs-height_70 cs-height_lg_70"></div>

            {connecting && <ConnectModal
                closeModal={() => { setConnecting(false) }} />}
            {raffling && <CreateRaffleModal nft={nft}
                refreshDetails={() => { fetchNftDetails(tokenid) }}
                closeModal={() => { setRaffling(false) }} />}
            {ticketing && <BuyTicketModal ticket={ticket}
                refreshDetails={() => { fetchNftDetails(tokenid) }}
                closeModal={() => { setTicketing(false) }} />}
            {drawing && <DrawNftModal raffleId={raffle?.id}
                refreshDetails={() => { fetchNftDetails(tokenid) }}
                closeModal={() => { setDrawing(false) }} />}
            {prizing && <DrawPrizeModal raffleId={raffle?.id}
                refreshDetails={() => { fetchNftDetails(tokenid) }}
                closeModal={() => { setPrizing(false) }} />}

        </ContentWrapper >
    );
}

export default observer(NftDetails);
