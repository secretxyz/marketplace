import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ContentWrapper from "../Layout/ContentWrapper";
import CountLoader from "../Common/CountLoader";

import Avatar from "./Profile/Avatar";
import SimilarItems from './Single/SimilarItems';
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

class NftDetails extends Component {
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
                <div className="cs-height_160 cs-height_lg_120"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="cs-single_asset">
                                <div className="cs-asset_view">
                                    <img src="img/nfts/img9.png" alt="" />
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
                                <h2>BearableGuy #1234</h2>
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
                            <div className="cs-single_product_head">
                                <p>On sale for <span className="cs-accent_color"><strong>1230 XRP</strong></span> · Highest bid ~ <span className="cs-accent_color"><strong>589 XRP</strong></span></p>
                            </div>
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="cs-author_card cs-white_bg cs-box_shadow">
                                        <div className="cs-author_img"><img src="img/collections/collection1.png" alt="" /></div>
                                        <div className="cs-author_right">
                                            <h3>BearableGuyClub Loadstar II</h3>
                                            <p>created by @bearalbeguy.club</p>
                                        </div>
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="cs-author_card cs-white_bg cs-box_shadow">
                                        <div className="cs-author_img"><img src="img/avatar/avatar_21.png" alt="" /></div>
                                        <div className="cs-author_right">
                                            <h3>Owned by</h3>
                                            <p>@david.tian</p>
                                        </div>
                                    </div>
                                    <div className="cs-height_25 cs-height_lg_25"></div>
                                </div>
                            </div>
                            <div className="row">
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
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div className="cs-tabs cs-fade_tabs cs-style1">
                                <div className="cs-medium">
                                    <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                                        <li className="active"><a href="#tab_two">History</a></li>
                                        <li><a href="#tab_one">Offers</a></li>
                                        <li><a href="#tab_two">Activities</a></li>
                                    </ul>
                                </div>
                                <div className="cs-height_20 cs-height_lg_20"></div>
                                <div className="cs-tab_content">
                                    <div id="tab_one" className="cs-tab active">
                                        <ul className="cs-activity_list cs-mp0">
                                            <li>
                                                <div className="cs-activity cs-white_bg cs-type1">
                                                    <div className="cs-activity_avatar"><img src="img/avatar/avatar_21.png" alt="" /></div>
                                                    <div className="cs-activity_right">
                                                        <p className="cs-activity_text">Bid accepted <span>9 XRP</span> by <a href="#">@raymond</a></p>
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
                                                    <div className="cs-activity_avatar"><img src="img/avatar/avatar_22.png" alt="" /></div>
                                                    <div className="cs-activity_right">
                                                        <p className="cs-activity_text">Followed by <a href="#">@jessica</a></p>
                                                        <p className="cs-activity_posted_by">05 Mar 2022 12:05</p>
                                                    </div>
                                                    <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color">
                                                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.63077 0.682215C3.54897 1.19345 1.32548 3.33145 0.659316 6.42415C0.48962 7.212 0.491446 8.66284 0.663182 9.46153C0.891519 10.5236 1.35813 11.5696 2.05366 12.5785C2.58627 13.3512 2.97684 13.812 3.89078 14.7464C5.12268 16.0058 6.34765 17.0674 9.04205 19.2106C9.82185 19.8308 11.3151 21.0215 12.3605 21.8567L14.261 23.375L15.4535 22.4169C16.1094 21.89 17.5401 20.7494 18.633 19.8824C22.0488 17.1723 23.3246 16.0765 24.6752 14.6928C26.5173 12.8057 27.4683 11.2381 27.8491 9.46153C28.0093 8.71375 28.0234 7.26844 27.8775 6.53907C27.5582 4.94291 26.832 3.59679 25.7244 2.54838C24.7512 1.62719 23.5724 1.02359 22.1772 0.731942C21.5043 0.591299 19.9529 0.589581 19.3152 0.728774C17.4151 1.14361 15.8147 2.28095 14.6219 4.06409C14.4431 4.33142 14.2786 4.5502 14.2563 4.5502C14.2341 4.5502 14.0676 4.32857 13.8865 4.0577C12.709 2.29733 11.1094 1.155 9.23527 0.736077C8.69998 0.616431 7.21273 0.58566 6.63077 0.682215Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cs-activity cs-white_bg cs-type1">
                                                    <div className="cs-activity_avatar"><img src="img/avatar/avatar_23.png" alt="" /></div>
                                                    <div className="cs-activity_right">
                                                        <p className="cs-activity_text">Created by <a href="#">@federico</a></p>
                                                        <p className="cs-activity_posted_by">05 Mar 2022 12:05</p>
                                                    </div>
                                                    <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.84877 0.697846C2.72674 0.944149 1.70588 1.78044 1.21197 2.85793C0.860341 3.62495 0.864967 3.52947 0.883827 9.6425C0.902865 15.8326 0.87505 15.3853 1.29406 16.2325C1.75066 17.1555 2.67763 17.9095 3.71681 18.2029C4.07847 18.305 4.45056 18.3117 9.7365 18.3117H15.3707L15.8155 18.1734C16.4667 17.971 16.9767 17.6642 17.4513 17.1897C17.9258 16.7151 18.2326 16.2051 18.435 15.5539L18.5733 15.1091V9.4749C18.5733 3.17974 18.5949 3.52609 18.1501 2.67776C17.6664 1.755 16.8811 1.10618 15.8155 0.748791C15.5086 0.645893 15.1558 0.638717 9.85511 0.627745C5.25631 0.618315 4.15255 0.631185 3.84877 0.697846ZM21.7984 4.56984C21.5675 4.69047 21.4325 4.81424 21.3023 5.02478L21.1235 5.31402L21.0938 11.5756L21.0642 17.8372L20.9323 18.2227C20.5452 19.3543 19.6159 20.2836 18.4843 20.6707L18.0988 20.8026L11.8419 20.8322L5.58499 20.8619L5.30488 21.0266C4.81062 21.3171 4.57036 21.9184 4.72261 22.4839C4.81542 22.8284 5.2062 23.2173 5.5573 23.3146C5.76208 23.3714 7.23522 23.3839 12.0495 23.3696L18.2767 23.3511L18.8566 23.1918C21.1499 22.5621 22.8238 20.8891 23.4525 18.5985L23.6127 18.0151L23.6312 11.7879C23.6455 6.97362 23.633 5.50049 23.5762 5.2957C23.4831 4.95984 23.1086 4.57606 22.7772 4.47708C22.4012 4.36469 22.1445 4.38907 21.7984 4.56984ZM10.0496 5.71927C10.4296 5.81493 10.8463 6.23163 10.9419 6.61161C10.9802 6.76373 11.0116 7.18333 11.0116 7.54404V8.1998L11.7678 8.2011C12.6331 8.20258 12.874 8.27553 13.1854 8.63019C13.7199 9.23892 13.5572 10.1739 12.8475 10.5721C12.6101 10.7053 12.5039 10.7224 11.8031 10.7409L11.023 10.7614L11.0025 11.5415C10.984 12.2423 10.9669 12.3485 10.8337 12.5859C10.6108 12.9832 10.2634 13.2004 9.80452 13.2296C9.38267 13.2565 9.08756 13.1432 8.80555 12.846C8.52272 12.548 8.46139 12.3069 8.46139 11.4932V10.75H7.80563C6.9213 10.75 6.66403 10.6782 6.32183 10.336C5.69744 9.7116 5.84802 8.7453 6.63052 8.35536C6.91852 8.21183 7.00149 8.1998 7.70202 8.1998H8.46139V7.44043C8.46139 6.73989 8.47343 6.65692 8.61696 6.36892C8.78331 6.03508 9.08471 5.78819 9.4243 5.70765C9.70352 5.6414 9.74344 5.64217 10.0496 5.71927Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cs-activity cs-white_bg cs-type1">
                                                    <div className="cs-activity_avatar"><img src="img/avatar/avatar_24.png" alt="" /></div>
                                                    <div className="cs-activity_right">
                                                        <p className="cs-activity_text">Bid accepted <span>2 XRP</span> by <a href="#">@richard</a></p>
                                                        <p className="cs-activity_posted_by">16 Mar 2022, 11:22 PM</p>
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
                                    <div id="tab_two" className="cs-tab">
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
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                    </div>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                    <SimilarItems />
                </div>
                <div className="cs-height_70 cs-height_lg_70"></div>
            </ContentWrapper>
        );
    }
}

export default withRouter(NftDetails);
