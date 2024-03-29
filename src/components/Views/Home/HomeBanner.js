import React, { useState } from 'react';
import Slider from "react-slick";
import { useBannerCollections } from '../../../hooks/useHomepage';
import { getImageLink } from "../../Helpers/Utils";

const HomeBanner = () => {
    const { loading, collections } = useBannerCollections();
    const [slider, setSlider] = useState();

    return (
        <section className="cs-hero cs-style3 cs-bg cs-center" style={{ backgroundImage: `url("img/hero_bg3.jpeg")` }}>
            <div className="container-fluid">
                <div className="cs-hero_in">
                    <div className="cs-hero_in_left">
                        <div className="cs-hero_text">
                            <h1 className="cs-hero_title cs-white_color">Welcome to the XRP Ledger's biggest secret.</h1>
                            <div className="cs-hero_subtitle cs-medium cs-white_color"> Quickly trade NFTs on multiple marketplaces for unique digital assets.
                                Join the exciting world of NFT trading on SecretMarket now!</div>
                            <div className="cs-hero_btns">
                                <a href="/explorer-collections" className="cs-hero_btn cs-style1 cs-color2"><span>Explore</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="cs-hero_in_right">
                        <div className="cs-slider cs-style1">
                            <div className="cs-slider_container">
                                <div className="cs-slider_wrapper" >
                                    <Slider
                                        ref={c => (setSlider(c))}
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
                                                    <a href={`/collection/${c.attributes?.slug}`} className="cs-card_thumb cs-zoom_effect ">
                                                        <img src={c.attributes?.banner_picture_url} alt="Image" className="cs-zoom_item cs-height_150 cs-height_lg_150" />
                                                    </a>
                                                    <a href={`/collection/${c.attributes?.slug}`} className="cs-avatar cs-collection-avatar">
                                                        <img src={getImageLink(c.attributes?.picture_url)} alt="Avatar" />
                                                    </a>
                                                    <div className="cs-card_info">
                                                        <h3 className="cs-card_title"><a href={`/collection/${c.attributes?.slug}`}>{c.attributes?.name}</a></h3>
                                                        <div className="cs-card_footer">
                                                            <div className="cs-card_subtitle">
                                                                <span>{c.attributes?.bio}</span>
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
                                <div className="cs-left_arrow cs-center cs-box_shadow slick-arrow" onClick={() => slider.slickPrev()}>
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0269 7.55957H0.817552" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="cs-right_arrow cs-center cs-box_shadow slick-arrow" onClick={() => slider.slickNext()}>
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

export default HomeBanner;