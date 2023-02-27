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
import { getAccount, getSummaryAddress, getDateTimeWithFormat, isLoggedIn, isVideoAsset, notify, getExpirationDateTime1, getImageLink } from "../Helpers/Utils";
import PageLoader from "../Common/PageLoader";
import CreateOfferModal from "./Single/CreateOfferModal";
import NftInfoTabs from "./Single/NftInfoTabs";
import ConnectModal from "../Common/ConnectModal";
import accountStore from "../../store/account.store";
import { BITHOMP_URL } from "../Common/constants";
import LikeNft from "../Common/LikeNft";
import ReportModal from '../Common/ReportModal';
import { getReportedItems } from '../Helpers/Reports';

const NftDetails = (props) => {
    const { auth_token } = accountStore;
    const { tokenId } = props.match.params;

    const { loading, nft, fetchNftDetails, refresh } = useNft(tokenId);

    const [offer, setOffer] = useState();
    const [collection, setCollection] = useState();
    const [owner, setOwner] = useState();
    const [activity, setActivity] = useState();
    const [reported, setReported] = useState(false);

    const [connecting, setConnecting] = useState(false);
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
            fetchNftDetails(tokenId);
        }
    }, [auth_token]);

    useEffect(() => {
        if (!nft) {
            window.location.replace("/not-found");
            return;
        }
        setCollection(nft?.collection);
        setOwner(nft?.owner);
        if (nft?.offers) {
            setOffer(nft.offers[0] || null);
        }
        if (isReportNft()) {
            setReported(true);
        }
    }, [nft])

    useEffect(() => {
        if (!loading) {
            initPage();
        }
    }, [loading])

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
        return nft?.owner?.id == getAccount()?.id;
    }

    const getBuySellView = () => {
        if (isLoggedIn() && getAccount().id == nft?.owner?.id) {
            if (!offer) {
                return <div className="row">
                    <div className="col-xl-12">
                        <div className="cs-white_bg cs-box_shadow cs-general_box_5 cs-buy_sell_view">
                            <div className="row">
                                <div className="col-4">
                                    <a className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickListOffer}>
                                        <span>List at Secret</span>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href={`https://nft.onxrp.com/nft/${nft.nft_tokenid}/`} className="cs-btn cs-style2 cs-btn_lg w-100 text-center" target="_blank">
                                        <span>List at onXRP</span>
                                    </a>
                                </div>
                                <div className="col-4">
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
        } else if (isLoggedIn() && (!offer || (offer && offer.from.id != getAccount().id))) {
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
        return <div className="cs-author_card cs-white_bg cs-box_shadow">
            <a href={`/profile/${owner?.wallet}`}>
                <div className="cs-author_img">
                    <Avatar className="cs-profile_avatar_oval" {...{ name: owner?.wallet, image: owner?.picture_url }} />
                </div>
            </a>
            <div className="cs-author_right">
                <h3>Owned by</h3>
                <a href={`/profile/${owner?.wallet}`}>
                    <p>{owner?.username ? `@${owner?.username.trimStart()}` : getSummaryAddress(owner?.wallet)}</p>
                </a>
            </div>
        </div>
    }

    useEffect(() => {
        if (connecting) {
            $("#connect_modal").toggleClass("active");
        }
    }, [connecting])

    const onConnectWallet = () => {
        setConnecting(true);
    }

    const onClickRefresh = () => {
        const res = refresh();
        if (res && res.status) {
            fetchNftDetails(tokenId);
        }
    }

    const onClickShare = () => {
        navigator.clipboard.writeText(`https://secretmarket.xyz/nft/${nft?.nft_tokenid}`);
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
                        {nft && <NftInfoTabs tokenId={tokenId} nftOwner={owner} submit={submitOffer} />}
                        <div className="cs-height_30 cs-height_lg_30"></div>
                    </div>
                </div>
                <div className="cs-height_30 cs-height_lg_30"></div>
                {collection && <SimilarItems tokenId={nft.nft_tokenid} collection={collection} />}
            </div>
            <div className="cs-height_70 cs-height_lg_70"></div>

            {connecting && <ConnectModal
                closeModal={() => { setConnecting(false) }} />}
            {offering && <CreateOfferModal activity={activity}
                refreshDetails={() => { fetchNftDetails(tokenId) }}
                closeModal={() => { setOffering(false); setActivity(); }} />}
            {reporting && <ReportModal data={{ nft: nft.id }}
                closeModal={(res) => { setReporting(false); setReported(res); }} />}
        </ContentWrapper >
    );
}

export default observer(NftDetails);
