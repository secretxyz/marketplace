import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ContentWrapper from "../Layout/ContentWrapper";
import CountLoader from "../Common/CountLoader";

import Avatar from "./Profile/Avatar";
import AboutTab from "./Single/AboutTab";
import DetailsTab from "./Single/DetailsTab";
import AttributesTab from "./Single/AttributesTab";

const NFT = {
    id: "0",
    likes: "64",
    image_url: "img/nfts/img9.png",
    name: "BearableGuy #590",
    description: "NO AFFILIATION to the original bearableguy123 riddler we all love. BearableGuyClub is an NFT community that enjoys XRP researchers and riddlers.",
    owner: {
        name: "david.tian",
        picture_url: "img/avatar/avatar_29.png",
        address: "rhJtyhwXjhnGwW2WcE7P4GAXqjzjzQGmFh"
    },
    collection: {
        name: "BearableGuyClub Loadstar II",
        picture_url: "img/collections/collection1.png",
        is_verified: true,
        create_by: "bearableguy.club",
        issuer: "rLoMBprALb22SkmNK4K3hFWrpgqXbAi6qQ"
    },
    issuer: "rLoMBprALb22SkmNK4K3hFWrpgqXbAi6qQ",
    nft_tokenid: "00081702D92E5D0C52405B8E9DD7EB6B2244453DA8D5BB4DC8588D7D00000301",
    ipfs_url: "https://marketplace-api.onxrp.com/api/metadata/00081702D92E5D0C52405B8E9DD7EB6B2244453DA8D5BB4DC8588D7D00000301",
    creator_fee: 5890,
    standard: "XLS-20",
    rarity: 1342,
    likes: 86,
    attributes: [
        {
            trait_type: "Background",
            value: "Pink",
            percentage: 7.38
        },
        {
            trait_type: "Cover",
            value: "CastleStaircase",
            percentage: 3.3
        },
        {
            trait_type: "Body",
            value: "Polar",
            percentage: 5.61
        },
        {
            trait_type: "Dress",
            value: "RomanGoldArmor",
            percentage: 22.2
        },
        {
            trait_type: "Eye",
            value: "Rightview",
            percentage: 7.38
        },
        {
            trait_type: "Mask",
            value: "Fire",
            percentage: 18.1
        },
        {
            trait_type: "Hat",
            value: "RomanGoldHelmet",
            percentage: 4.42
        },
        {
            trait_type: "Mouth",
            value: "GrinMulticolored",
            percentage: 0.23
        },
        {
            trait_type: "Laser",
            value: "YellowRightWithFog",
            percentage: 1.23
        },
        {
            trait_type: "Role",
            value: "Loadstar",
            percentage: 100
        }
    ],
}

class RaffleDetails extends Component {
    state = {
        nft: NFT,
    };

    componentDidMount() {
        CountLoader('.cs-countdown_style2');

        $('.cs-tabs.cs-fade_tabs .cs-tab_links a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');
            $('.cs-tabs ' + currentAttrValue)
                .fadeIn(400)
                .siblings()
                .hide();
            $(this).parents('li').addClass('active').siblings().removeClass('active');
            e.preventDefault();
        });
    }

    render() {
        let { nft } = this.state;
        return (
            <ContentWrapper>
                <div className="cs-height_140 cs-height_lg_120"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="cs-single_asset">
                                <div className="cs-asset_view">
                                    <img src={nft.image_url} alt="" />
                                    <span className="cs-card_rare cs-primary_color">
                                        #{nft.rarity}
                                    </span>
                                    <span className="cs-card_like cs-primary_color cs-box_shadow">
                                        <i className="fas fa-heart fa-fw"></i>
                                        {nft.likes}
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
                                <div className="cs-height_20 cs-height_lg_20"></div>
                                <div className="cs-tab_content">
                                    <AboutTab {...{ description: nft.description }} />
                                    <DetailsTab {...{
                                        issuer: nft.issuer,
                                        owner: nft.owner.address,
                                        nft_tokenid: nft.nft_tokenid,
                                        standard: nft.standard,
                                        creator_fee: nft.creator_fee,
                                        ipfs_url: nft.ipfs_url
                                    }} />
                                    <AttributesTab {...{ attributes: nft.attributes }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="cs-height_0 cs-height_lg_40"></div>
                            <div className="cs-single_product_head">
                                <h2>{nft.name}</h2>
                                <div className="cs-single_info_head">
                                    <a className="cs-style1 cs-btn" href="#">
                                        <span><i className="fas fa-redo fa-fw"></i></span>
                                    </a>
                                    <a className="cs-style1 cs-btn" href="#">
                                        <span><i className="fas fa-share fa-fw"></i></span>
                                    </a>
                                    <a className="cs-style1 cs-btn" href="#">
                                        <span><i className="fas fa-flag fa-fw"></i></span>
                                    </a>
                                </div>
                            </div>
                            <div className="cs-height_25 cs-height_lg_25"></div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="cs-single_raffle_info">
                                        <div className="cs-collection_list_wrap">
                                            <ul className="cs-collection_list cs-white_bg cs-mp0">
                                                <li>
                                                    <div className="cs-collection_list_title">NFT Floor Price</div>
                                                    <div className="cs-collection_list_number">120 XRP</div>
                                                </li>
                                                <li>
                                                    <div className="cs-collection_list_title">Total Ticket Price</div>
                                                    <div className="cs-collection_list_number">150 XRP</div>
                                                </li>
                                                <li>
                                                    <div className="cs-collection_list_title">Ticket Price</div>
                                                    <div className="cs-collection_list_number">3 XRP</div>
                                                </li>
                                                <li>
                                                    <div className="cs-collection_list_title">Tickets Sold</div>
                                                    <div className="cs-collection_list_number">35 / 50</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-height_15 cs-height_lg_15"></div>
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="cs-author_card cs-white_bg cs-box_shadow">
                                        <div className="cs-author_img">
                                            <img src={nft.collection.picture_url} alt="" />
                                            {
                                                nft.collection.is_verified ? <span className="cs-avatar_status">
                                                    <i className="fa fa-check cs-check-icon"></i>
                                                </span> : ``
                                            }
                                        </div>
                                        <div className="cs-author_right">
                                            <h3>{nft.collection.name}</h3>
                                            <p>created by @bearalbeguy.club</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="cs-author_card cs-white_bg cs-box_shadow">
                                        <Avatar className="cs-author_img" {...{ image: nft.owner.picture_url }} />
                                        <div className="cs-author_right">
                                            <h3>Owned by</h3>
                                            <p>@david.tian</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-height_15 cs-height_lg_15"></div>
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="cs-white_bg cs-box_shadow cs-general_box_6 cs-single_buy_area cs-grid_5 cs-gap_20">
                                        <span>Reserve Tickets</span>
                                        <div className="cs-form_field_wrap">
                                            <input type="number" className="cs-form_field" placeholder="1" />
                                        </div>
                                        <a href="#" className="cs-btn cs-style1 cs-btn_lg text-center"><span>Buy</span></a>
                                    </div>
                                    <div className="cs-height_20 cs-height_lg_20"></div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="cs-general_box_4 cs-box_shadow cs-white_bg cs-center">
                                        <div className="cs-countdown_style2" data-countdate="6 January 2023">
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
                                    <div className="cs-height_20 cs-height_lg_20"></div>
                                </div>
                            </div>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="cs-tabs cs-fade_tabs cs-style1">
                                        <div className="cs-medium">
                                            <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                                                <li className="active"><a className="cs-tab-sm" href="#participants">Participants (14)</a></li>
                                                <li><a className="cs-tab-sm" href="#transactions">Transactions (20)</a></li>
                                            </ul>
                                        </div>
                                        <div className="cs-height_20 cs-height_lg_20"></div>
                                        <div className="cs-tab_content">
                                            <div id="participants" className="cs-tab active">
                                                <ul className="cs-activity_list cs-mp0">
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <Avatar className="cs-activity_avatar" {...{ name: "raymond" }} />
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">
                                                                    <a href="#">@raymond</a>
                                                                    <i className="fas fa-id-card"></i>
                                                                    <i className="fab fa-twitter fa-fw"></i>
                                                                    <i className="fas fa-medal"></i>
                                                                </p>
                                                                <p className="cs-activity_posted_by">rCxe3fs3z45a9...</p>
                                                            </div>
                                                            <div className="cs-activity_sub_right cs-center cs-accent_color">
                                                                6 <i className="fas fa-ticket-alt"></i>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <Avatar className="cs-activity_avatar" {...{ name: "jessica" }} />
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">
                                                                    <a href="#">@jessica</a>
                                                                    <i className="fas fa-id-card"></i>
                                                                </p>
                                                                <p className="cs-activity_posted_by">rSddywe09sdjs...</p>
                                                            </div>
                                                            <div className="cs-activity_sub_right cs-center cs-accent_color">
                                                                2 <i className="fas fa-ticket-alt"></i>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <Avatar className="cs-activity_avatar" {...{ name: "federico" }} />
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">
                                                                    <a href="#">@federico</a>
                                                                    <i className="fas fa-id-card"></i>
                                                                    <i className="fab fa-twitter fa-fw"></i>
                                                                    <i className="fab fa-discord fa-fw"></i>
                                                                    <i className="fas fa-medal"></i>
                                                                </p>
                                                                <p className="cs-activity_posted_by">rSddywe09sdjs...</p>
                                                            </div>
                                                            <div className="cs-activity_sub_right cs-center cs-accent_color">
                                                                1 <i className="fas fa-ticket-alt"></i>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <Avatar className="cs-activity_avatar" {...{ name: "richard" }} />
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">
                                                                    <a href="#">@richard</a>
                                                                    <i className="fas fa-id-card"></i>
                                                                    <i className="fab fa-twitter fa-fw"></i>
                                                                </p>
                                                                <p className="cs-activity_posted_by">rSddywe09sdjs...</p>
                                                            </div>
                                                            <div className="cs-activity_sub_right cs-center cs-accent_color">
                                                                1 <i className="fas fa-ticket-alt"></i>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="transactions" className="cs-tab">
                                                <ul className="cs-activity_list cs-mp0">
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <div className="cs-activity_avatar"><img src="img/avatar/avatar_27.png" alt="" /></div>
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">Bid accepted <span>6 XRP</span> by <a href="#">@clarence</a></p>
                                                                <p className="cs-activity_posted_by">16 Mar 2022, 11:22 PM</p>
                                                            </div>
                                                            <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.58321 0.709957C6.80344 0.874407 6.18914 1.21704 5.59168 1.82076C5.18675 2.22991 5.00479 2.50229 4.76907 3.05207C4.50504 3.66793 4.48083 3.89286 4.48083 5.73042V7.37635H3.41299C2.54968 7.37635 2.3136 7.3895 2.18057 7.44513C1.96981 7.53316 1.82838 7.66619 1.71925 7.87903C1.6398 8.03397 1.60008 8.62486 1.2546 14.7885C1.04683 18.4956 0.887802 21.6486 0.901176 21.7952C0.933924 22.154 1.17236 22.635 1.43954 22.8813C1.5516 22.9846 1.77688 23.1324 1.94009 23.2097L2.23691 23.3504L6.05108 23.3627L9.86525 23.375L9.73124 23.1405C9.51169 22.7562 9.36302 22.248 9.33844 21.7974C9.30778 21.2353 9.83037 13.8479 9.92639 13.4862C9.96527 13.3396 10.0588 13.1041 10.1341 12.9627C10.2958 12.6594 10.745 12.2223 11.058 12.0637C11.495 11.8422 11.7038 11.8211 13.4676 11.8204L15.1006 11.8198L15.1013 11.6976C15.1016 11.6304 15.0606 10.8055 15.01 9.86466C14.9095 7.99483 14.8896 7.87774 14.6301 7.62567C14.4029 7.40505 14.2408 7.37635 13.2221 7.37635H12.3092L12.2904 5.65453C12.2732 4.07388 12.2639 3.90467 12.1777 3.59066C11.6104 1.52377 9.62549 0.279258 7.58321 0.709957ZM8.86051 2.0029C9.75083 2.16326 10.5632 2.9018 10.8612 3.82163C10.9298 4.03349 10.9426 4.28614 10.9576 5.72118L10.9749 7.37635H11.6417H12.3085L12.2938 8.15083C12.2804 8.85049 12.2702 8.93709 12.1874 9.04787C11.8758 9.46484 11.3401 9.47515 11.0691 9.06938C10.9739 8.92692 10.9682 8.87498 10.9682 8.14737V7.37635H8.39471H5.82118L5.80643 8.15083C5.79305 8.85049 5.78279 8.93709 5.70001 9.04787C5.38839 9.46484 4.85274 9.47515 4.58169 9.06938C4.48651 8.92692 4.48083 8.87498 4.48083 8.14737V7.37635H5.14734H5.81385V5.80112C5.81385 4.10672 5.8302 3.93978 6.04233 3.46904C6.27632 2.94988 6.72745 2.48132 7.25 2.21472C7.68696 1.99179 8.3297 1.90728 8.86051 2.0029ZM11.7014 13.2364C11.4861 13.3362 11.3508 13.4769 11.2592 13.6961C11.1769 13.893 10.6373 21.2578 10.6707 21.7285C10.7251 22.4959 11.2453 23.1174 11.9949 23.3103C12.2061 23.3647 13.0058 23.3726 17.2603 23.3624L22.2767 23.3504L22.5735 23.2097C22.7367 23.1324 22.9614 22.9851 23.0729 22.8824C23.3192 22.6553 23.57 22.1737 23.6098 21.8513C23.6271 21.7113 23.5294 20.0574 23.3663 17.7295C23.0598 13.3569 23.0937 13.5829 22.7036 13.3087L22.5134 13.175L17.1962 13.1645C12.0992 13.1544 11.8717 13.1574 11.7014 13.2364ZM15.4736 15.253C15.7574 15.4157 15.8115 15.5711 15.8115 16.2241C15.8115 16.9539 15.8786 17.177 16.1929 17.4933C16.5907 17.8934 17.1539 17.9713 17.6468 17.6946C18.1309 17.4227 18.2998 17.0384 18.2998 16.2092C18.2998 15.6054 18.3481 15.4412 18.5725 15.2811C18.7704 15.14 19.126 15.1327 19.3047 15.2661C19.5817 15.4729 19.6094 15.5528 19.6248 16.1885C19.65 17.2283 19.439 17.8413 18.8537 18.4286C18.0668 19.2184 16.9536 19.4099 15.9495 18.9283C15.6546 18.7868 15.5055 18.6776 15.2373 18.4061C14.6651 17.8268 14.4806 17.3113 14.4792 16.2883C14.4786 15.8042 14.4924 15.6848 14.567 15.5307C14.7354 15.183 15.1369 15.06 15.4736 15.253Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <div className="cs-activity_avatar"><img src="img/avatar/avatar_28.png" alt="" /></div>
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">Bid accepted <span>4 XRP</span> by <a href="#">@bernard</a></p>
                                                                <p className="cs-activity_posted_by">19 Feb 2022, 10:22 PM</p>
                                                            </div>
                                                            <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.58321 0.709957C6.80344 0.874407 6.18914 1.21704 5.59168 1.82076C5.18675 2.22991 5.00479 2.50229 4.76907 3.05207C4.50504 3.66793 4.48083 3.89286 4.48083 5.73042V7.37635H3.41299C2.54968 7.37635 2.3136 7.3895 2.18057 7.44513C1.96981 7.53316 1.82838 7.66619 1.71925 7.87903C1.6398 8.03397 1.60008 8.62486 1.2546 14.7885C1.04683 18.4956 0.887802 21.6486 0.901176 21.7952C0.933924 22.154 1.17236 22.635 1.43954 22.8813C1.5516 22.9846 1.77688 23.1324 1.94009 23.2097L2.23691 23.3504L6.05108 23.3627L9.86525 23.375L9.73124 23.1405C9.51169 22.7562 9.36302 22.248 9.33844 21.7974C9.30778 21.2353 9.83037 13.8479 9.92639 13.4862C9.96527 13.3396 10.0588 13.1041 10.1341 12.9627C10.2958 12.6594 10.745 12.2223 11.058 12.0637C11.495 11.8422 11.7038 11.8211 13.4676 11.8204L15.1006 11.8198L15.1013 11.6976C15.1016 11.6304 15.0606 10.8055 15.01 9.86466C14.9095 7.99483 14.8896 7.87774 14.6301 7.62567C14.4029 7.40505 14.2408 7.37635 13.2221 7.37635H12.3092L12.2904 5.65453C12.2732 4.07388 12.2639 3.90467 12.1777 3.59066C11.6104 1.52377 9.62549 0.279258 7.58321 0.709957ZM8.86051 2.0029C9.75083 2.16326 10.5632 2.9018 10.8612 3.82163C10.9298 4.03349 10.9426 4.28614 10.9576 5.72118L10.9749 7.37635H11.6417H12.3085L12.2938 8.15083C12.2804 8.85049 12.2702 8.93709 12.1874 9.04787C11.8758 9.46484 11.3401 9.47515 11.0691 9.06938C10.9739 8.92692 10.9682 8.87498 10.9682 8.14737V7.37635H8.39471H5.82118L5.80643 8.15083C5.79305 8.85049 5.78279 8.93709 5.70001 9.04787C5.38839 9.46484 4.85274 9.47515 4.58169 9.06938C4.48651 8.92692 4.48083 8.87498 4.48083 8.14737V7.37635H5.14734H5.81385V5.80112C5.81385 4.10672 5.8302 3.93978 6.04233 3.46904C6.27632 2.94988 6.72745 2.48132 7.25 2.21472C7.68696 1.99179 8.3297 1.90728 8.86051 2.0029ZM11.7014 13.2364C11.4861 13.3362 11.3508 13.4769 11.2592 13.6961C11.1769 13.893 10.6373 21.2578 10.6707 21.7285C10.7251 22.4959 11.2453 23.1174 11.9949 23.3103C12.2061 23.3647 13.0058 23.3726 17.2603 23.3624L22.2767 23.3504L22.5735 23.2097C22.7367 23.1324 22.9614 22.9851 23.0729 22.8824C23.3192 22.6553 23.57 22.1737 23.6098 21.8513C23.6271 21.7113 23.5294 20.0574 23.3663 17.7295C23.0598 13.3569 23.0937 13.5829 22.7036 13.3087L22.5134 13.175L17.1962 13.1645C12.0992 13.1544 11.8717 13.1574 11.7014 13.2364ZM15.4736 15.253C15.7574 15.4157 15.8115 15.5711 15.8115 16.2241C15.8115 16.9539 15.8786 17.177 16.1929 17.4933C16.5907 17.8934 17.1539 17.9713 17.6468 17.6946C18.1309 17.4227 18.2998 17.0384 18.2998 16.2092C18.2998 15.6054 18.3481 15.4412 18.5725 15.2811C18.7704 15.14 19.126 15.1327 19.3047 15.2661C19.5817 15.4729 19.6094 15.5528 19.6248 16.1885C19.65 17.2283 19.439 17.8413 18.8537 18.4286C18.0668 19.2184 16.9536 19.4099 15.9495 18.9283C15.6546 18.7868 15.5055 18.6776 15.2373 18.4061C14.6651 17.8268 14.4806 17.3113 14.4792 16.2883C14.4786 15.8042 14.4924 15.6848 14.567 15.5307C14.7354 15.183 15.1369 15.06 15.4736 15.253Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <div className="cs-activity_avatar"><img src="img/avatar/avatar_25.png" alt="" /></div>
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">Bid accepted <span>3 XRP</span> by <a href="#">@andrew</a></p>
                                                                <p className="cs-activity_posted_by">27 Feb 2022, 09:22 AM</p>
                                                            </div>
                                                            <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.58321 0.709957C6.80344 0.874407 6.18914 1.21704 5.59168 1.82076C5.18675 2.22991 5.00479 2.50229 4.76907 3.05207C4.50504 3.66793 4.48083 3.89286 4.48083 5.73042V7.37635H3.41299C2.54968 7.37635 2.3136 7.3895 2.18057 7.44513C1.96981 7.53316 1.82838 7.66619 1.71925 7.87903C1.6398 8.03397 1.60008 8.62486 1.2546 14.7885C1.04683 18.4956 0.887802 21.6486 0.901176 21.7952C0.933924 22.154 1.17236 22.635 1.43954 22.8813C1.5516 22.9846 1.77688 23.1324 1.94009 23.2097L2.23691 23.3504L6.05108 23.3627L9.86525 23.375L9.73124 23.1405C9.51169 22.7562 9.36302 22.248 9.33844 21.7974C9.30778 21.2353 9.83037 13.8479 9.92639 13.4862C9.96527 13.3396 10.0588 13.1041 10.1341 12.9627C10.2958 12.6594 10.745 12.2223 11.058 12.0637C11.495 11.8422 11.7038 11.8211 13.4676 11.8204L15.1006 11.8198L15.1013 11.6976C15.1016 11.6304 15.0606 10.8055 15.01 9.86466C14.9095 7.99483 14.8896 7.87774 14.6301 7.62567C14.4029 7.40505 14.2408 7.37635 13.2221 7.37635H12.3092L12.2904 5.65453C12.2732 4.07388 12.2639 3.90467 12.1777 3.59066C11.6104 1.52377 9.62549 0.279258 7.58321 0.709957ZM8.86051 2.0029C9.75083 2.16326 10.5632 2.9018 10.8612 3.82163C10.9298 4.03349 10.9426 4.28614 10.9576 5.72118L10.9749 7.37635H11.6417H12.3085L12.2938 8.15083C12.2804 8.85049 12.2702 8.93709 12.1874 9.04787C11.8758 9.46484 11.3401 9.47515 11.0691 9.06938C10.9739 8.92692 10.9682 8.87498 10.9682 8.14737V7.37635H8.39471H5.82118L5.80643 8.15083C5.79305 8.85049 5.78279 8.93709 5.70001 9.04787C5.38839 9.46484 4.85274 9.47515 4.58169 9.06938C4.48651 8.92692 4.48083 8.87498 4.48083 8.14737V7.37635H5.14734H5.81385V5.80112C5.81385 4.10672 5.8302 3.93978 6.04233 3.46904C6.27632 2.94988 6.72745 2.48132 7.25 2.21472C7.68696 1.99179 8.3297 1.90728 8.86051 2.0029ZM11.7014 13.2364C11.4861 13.3362 11.3508 13.4769 11.2592 13.6961C11.1769 13.893 10.6373 21.2578 10.6707 21.7285C10.7251 22.4959 11.2453 23.1174 11.9949 23.3103C12.2061 23.3647 13.0058 23.3726 17.2603 23.3624L22.2767 23.3504L22.5735 23.2097C22.7367 23.1324 22.9614 22.9851 23.0729 22.8824C23.3192 22.6553 23.57 22.1737 23.6098 21.8513C23.6271 21.7113 23.5294 20.0574 23.3663 17.7295C23.0598 13.3569 23.0937 13.5829 22.7036 13.3087L22.5134 13.175L17.1962 13.1645C12.0992 13.1544 11.8717 13.1574 11.7014 13.2364ZM15.4736 15.253C15.7574 15.4157 15.8115 15.5711 15.8115 16.2241C15.8115 16.9539 15.8786 17.177 16.1929 17.4933C16.5907 17.8934 17.1539 17.9713 17.6468 17.6946C18.1309 17.4227 18.2998 17.0384 18.2998 16.2092C18.2998 15.6054 18.3481 15.4412 18.5725 15.2811C18.7704 15.14 19.126 15.1327 19.3047 15.2661C19.5817 15.4729 19.6094 15.5528 19.6248 16.1885C19.65 17.2283 19.439 17.8413 18.8537 18.4286C18.0668 19.2184 16.9536 19.4099 15.9495 18.9283C15.6546 18.7868 15.5055 18.6776 15.2373 18.4061C14.6651 17.8268 14.4806 17.3113 14.4792 16.2883C14.4786 15.8042 14.4924 15.6848 14.567 15.5307C14.7354 15.183 15.1369 15.06 15.4736 15.253Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-activity cs-white_bg cs-type1">
                                                            <div className="cs-activity_avatar"><img src="img/avatar/avatar_26.png" alt="" /></div>
                                                            <div className="cs-activity_right">
                                                                <p className="cs-activity_text">Bid accepted <span>5 XRP</span> by <a href="#">@steven</a></p>
                                                                <p className="cs-activity_posted_by">24 Feb 2022, 10:22 PM</p>
                                                            </div>
                                                            <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.58321 0.709957C6.80344 0.874407 6.18914 1.21704 5.59168 1.82076C5.18675 2.22991 5.00479 2.50229 4.76907 3.05207C4.50504 3.66793 4.48083 3.89286 4.48083 5.73042V7.37635H3.41299C2.54968 7.37635 2.3136 7.3895 2.18057 7.44513C1.96981 7.53316 1.82838 7.66619 1.71925 7.87903C1.6398 8.03397 1.60008 8.62486 1.2546 14.7885C1.04683 18.4956 0.887802 21.6486 0.901176 21.7952C0.933924 22.154 1.17236 22.635 1.43954 22.8813C1.5516 22.9846 1.77688 23.1324 1.94009 23.2097L2.23691 23.3504L6.05108 23.3627L9.86525 23.375L9.73124 23.1405C9.51169 22.7562 9.36302 22.248 9.33844 21.7974C9.30778 21.2353 9.83037 13.8479 9.92639 13.4862C9.96527 13.3396 10.0588 13.1041 10.1341 12.9627C10.2958 12.6594 10.745 12.2223 11.058 12.0637C11.495 11.8422 11.7038 11.8211 13.4676 11.8204L15.1006 11.8198L15.1013 11.6976C15.1016 11.6304 15.0606 10.8055 15.01 9.86466C14.9095 7.99483 14.8896 7.87774 14.6301 7.62567C14.4029 7.40505 14.2408 7.37635 13.2221 7.37635H12.3092L12.2904 5.65453C12.2732 4.07388 12.2639 3.90467 12.1777 3.59066C11.6104 1.52377 9.62549 0.279258 7.58321 0.709957ZM8.86051 2.0029C9.75083 2.16326 10.5632 2.9018 10.8612 3.82163C10.9298 4.03349 10.9426 4.28614 10.9576 5.72118L10.9749 7.37635H11.6417H12.3085L12.2938 8.15083C12.2804 8.85049 12.2702 8.93709 12.1874 9.04787C11.8758 9.46484 11.3401 9.47515 11.0691 9.06938C10.9739 8.92692 10.9682 8.87498 10.9682 8.14737V7.37635H8.39471H5.82118L5.80643 8.15083C5.79305 8.85049 5.78279 8.93709 5.70001 9.04787C5.38839 9.46484 4.85274 9.47515 4.58169 9.06938C4.48651 8.92692 4.48083 8.87498 4.48083 8.14737V7.37635H5.14734H5.81385V5.80112C5.81385 4.10672 5.8302 3.93978 6.04233 3.46904C6.27632 2.94988 6.72745 2.48132 7.25 2.21472C7.68696 1.99179 8.3297 1.90728 8.86051 2.0029ZM11.7014 13.2364C11.4861 13.3362 11.3508 13.4769 11.2592 13.6961C11.1769 13.893 10.6373 21.2578 10.6707 21.7285C10.7251 22.4959 11.2453 23.1174 11.9949 23.3103C12.2061 23.3647 13.0058 23.3726 17.2603 23.3624L22.2767 23.3504L22.5735 23.2097C22.7367 23.1324 22.9614 22.9851 23.0729 22.8824C23.3192 22.6553 23.57 22.1737 23.6098 21.8513C23.6271 21.7113 23.5294 20.0574 23.3663 17.7295C23.0598 13.3569 23.0937 13.5829 22.7036 13.3087L22.5134 13.175L17.1962 13.1645C12.0992 13.1544 11.8717 13.1574 11.7014 13.2364ZM15.4736 15.253C15.7574 15.4157 15.8115 15.5711 15.8115 16.2241C15.8115 16.9539 15.8786 17.177 16.1929 17.4933C16.5907 17.8934 17.1539 17.9713 17.6468 17.6946C18.1309 17.4227 18.2998 17.0384 18.2998 16.2092C18.2998 15.6054 18.3481 15.4412 18.5725 15.2811C18.7704 15.14 19.126 15.1327 19.3047 15.2661C19.5817 15.4729 19.6094 15.5528 19.6248 16.1885C19.65 17.2283 19.439 17.8413 18.8537 18.4286C18.0668 19.2184 16.9536 19.4099 15.9495 18.9283C15.6546 18.7868 15.5055 18.6776 15.2373 18.4061C14.6651 17.8268 14.4806 17.3113 14.4792 16.2883C14.4786 15.8042 14.4924 15.6848 14.567 15.5307C14.7354 15.183 15.1369 15.06 15.4736 15.253Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </li>
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
                                            <li className="cs-mp1">Here's a guide to buy into raffles.</li>
                                            <li className="cs-mp1">All NFT prizes are held by raffle in escrow and can be claimed by the winner or creator once the draw is done.</li>
                                            <li className="cs-mp1">Raffle tickets cannot be refunded once bought.</li>
                                            <li className="cs-mp1">Raffle tickets will not be refunded if you did not win the raffle.</li>
                                            <li className="cs-mp1">You can only buy 20% of total tickets.</li>
                                        </ul>
                                    </div>
                                    <div className="cs-height_20 cs-height_lg_20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_70 cs-height_lg_70"></div>
            </ContentWrapper>
        );
    }
}

export default withRouter(RaffleDetails);
