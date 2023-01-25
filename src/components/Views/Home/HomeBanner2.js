import React, { useState } from 'react';
import Slider from "react-slick";
import { useBannerCollections } from '../../../hooks/useHomepage';
import { getImageLink } from "../../Helpers/Utils";

const HomeBanner2 = () => {
    const { loading, collections } = useBannerCollections();
    const [slider, setSlider] = useState();

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

export default HomeBanner2;