import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';

class CollectionBanner extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <section className="container-fluid">
                <div className="cs-hero_slider_1">
                    <div className="cs-slider cs-style1">
                        <Slider
                            ref={c => (this.slider = c)}
                            className="cs-slider_container cs-slider_wrapper"
                            {...{
                                autoplay: false,
                                speed: 600,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false
                            }}>
                            <div className="cs-slide" >
                                {/* <img className="cs-slide-cover" src="img/collection_bg1.png" /> */}
                                <div className="cs-hero cs-style1 cs-bg cs-center" style={{ backgroundImage: `url("img/collection_bg1.png")` }}>
                                    <div className="container">
                                        <div className="cs-hero_text">
                                            <h1 className="cs-hero_title">BearableGuyClub <br />Loadstar II</h1>
                                            <div className="cs-hero_subtitle cs-medium">NO AFFILIATION to the original bearableguy123 riddler we all love. <br /> BearableGuyClub is an NFT community that enjoys XRP researchers and riddlers.</div>
                                            <div className="cs-hero_btns">
                                                <a href="#" className="cs-hero_btn cs-style1 cs-color3"><span>Explore</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-slide">
                                {/* <img className="cs-slide-cover" src="img/collection_bg2.png" /> */}
                                <div className="cs-hero cs-style1 cs-bg cs-center">
                                    <div className="container">
                                        <div className="cs-hero_text">
                                            <h1 className="cs-hero_title">The Best Beneficial Place <br />to Collect , Buy and Sell <br />NFT Marketplace</h1>
                                            <div className="cs-hero_subtitle cs-medium">Secure and secret NFTs for gaming, entertainment, metaverse and data <br />management time capsules.</div>
                                            <div className="cs-hero_btns">
                                                <a href="#" className="cs-hero_btn cs-style1 cs-color1">Explore</a>
                                                <a href="#" className="cs-hero_btn cs-style1 cs-color2">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-slide">
                                {/* <img className="cs-slide-cover" src="img/collection_bg3.png" /> */}
                                <div className="cs-hero cs-style1 cs-bg cs-center">
                                    <div className="container">
                                        <div className="cs-hero_text">
                                            <h1 className="cs-hero_title">The Best Beneficial Place <br />to Collect , Buy and Sell <br />NFT Marketplace</h1>
                                            <div className="cs-hero_subtitle cs-medium">Secure and secret NFTs for gaming, entertainment, metaverse and data <br />management time capsules.</div>
                                            <div className="cs-hero_btns">
                                                <a href="#" className="cs-hero_btn cs-style1 cs-color1">Explore</a>
                                                <a href="#" className="cs-hero_btn cs-style1 cs-color2">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="cs-slider_arrows cs-style2">
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
                        <div className="cs-pagination cs-style1 cs-hidden"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(CollectionBanner);