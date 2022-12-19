import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import $ from 'jquery';
import "../../../assets/js/plugins/jquery.slick.min.js";

const COLLECTIONS = [
    {
        id: "0",
        name: "BearableGuyClub Loadstar II",
        description: "NO AFFILIATION to the original bearableguy123 riddler we all love. BearableGuyClub is an NFT community that enjoys XRP researchers and riddlers.",
        picture_url: "img/collections/collection1.png",
        banner_picture_url: "img/collections/collection_bg1.png",
        is_verified: true,
        owners: 2024,
        nfts_count: "5890",
        total_volume: "859.8K XRP",
        floor_price: "360 XRP"
    },
    {
        id: "1",
        name: "The Bearable Bulls",
        description: "The Bearable Bulls are one of the first OG art collections on the XRP Ledger, and are the Genesis collection for Club XRPL. 10,000 completely original, hand-drawn characters by professional artists featuring over 200 illustrated and randomly generated traits. Collectors benefit from additional art-s...",
        picture_url: "img/collections/collection2.gif",
        banner_picture_url: "img/collections/collection_bg2.png",
        is_verified: true,
        owners: 4088,
        nfts_count: "10K",
        total_volume: "1.43M XRP",
        floor_price: "197 XRP"
    },
    {
        id: "2",
        name: "XPunks",
        description: "The XPUNK collection consists of 10,000 uniquely generated characters on a 24-by-24-pixel canvas. They are distinguished by their colorful traits and trademark X-mouth that represents their love for the XRPL.",
        picture_url: "img/collections/collection3.png",
        banner_picture_url: "img/collections/collection_bg3.png",
        is_verified: true,
        owners: 1869,
        nfts_count: "10K",
        total_volume: "2.11M XRP",
        floor_price: "4192 XRP"
    }
]

class HomeBanner extends React.Component {
    state = {
        collections: COLLECTIONS,
    }

    componentDidMount() {

    }

    render() {
        let { collections } = this.state;
        return (
            <section className="cs-hero cs-style3 cs-bg cs-center" style={{ backgroundImage: `url("img/hero_bg3.jpeg")` }}>
                <div className="container-fluid">
                    <div className="cs-hero_in">
                        <div className="cs-hero_in_left">
                            <div className="cs-hero_text">
                                <h1 className="cs-hero_title cs-white_color">The Best Beneficial Place to Collect , Buy and Sell XRPL NFT Marketplace</h1>
                                <div className="cs-hero_subtitle cs-medium cs-white_color">Secure and secret NFTs for gaming, entertainment, metaverse and data <br />management time capsules.</div>
                                <div className="cs-hero_btns">
                                    <a href="/explorer-collections" className="cs-hero_btn cs-style1 cs-color2"><span>Explore</span></a>
                                    <a href="/create" className="cs-hero_btn cs-style1 cs-color1"><span>Create</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="cs-hero_in_right">
                            <div className="cs-slider cs-style1">
                                <div className="cs-slider_container">
                                    <div className="cs-slider_wrapper" >
                                        <Slider
                                            ref={c => (this.slider = c)}
                                            {...{
                                                autoplay: true,
                                                autoplaySpeed: 3000,
                                                speed: 600,
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                arrows: false
                                            }}>
                                            {collections.map(c => (
                                                <div className="cs-slide cs-slide-collection" key={c.id}>
                                                    <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
                                                        <a href={`/collection/${c.slug}`} className="cs-card_thumb cs-zoom_effect">
                                                            <img src={c.banner_picture_url} alt="Image" className="cs-zoom_item" />
                                                        </a>
                                                        <a href={`/collection/${c.slug}`} className="cs-avatar cs-collection-avatar">
                                                            <img src={c.picture_url} alt="Avatar" />
                                                        </a>
                                                        <div className="cs-card_info">
                                                            <h3 className="cs-card_title"><a href={`/collection/${c.slug}`}>{c.name}</a></h3>
                                                            <div className="cs-card_footer">
                                                                <div className="cs-card_subtitle">
                                                                    <span>{c.description}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
                                    <div className="cs-left_arrow cs-center cs-box_shadow slick-arrow" onClick={() => this.slider.slickPrev()}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0269 7.55957H0.817552" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="cs-right_arrow cs-center cs-box_shadow slick-arrow" onClick={() => this.slider.slickNext()}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.816895 7.55957H13.0262" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.92188 1.45508L13.0265 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="cs-pagination cs-style1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(HomeBanner);