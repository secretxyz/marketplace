import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import $ from 'jquery';
import "../../../assets/js/plugins/jquery.slick.min.js";

class BidBanner extends React.Component {
    componentDidMount() {
        if ($('.cs-slider')) {
            $('.cs-slider').each(function () {
                // Slick Variable
                var $ts = $(this).find('.cs-slider_container');
                var $slickActive = $(this).find('.cs-slider_wrapper');
                var $sliderNumber = $(this).siblings('.slider-number');

                // Auto Play
                var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
                // Auto Play Time Out
                var autoplaySpdVar = 3000;
                if (autoPlayVar > 1) {
                    autoplaySpdVar = autoPlayVar;
                    autoPlayVar = 1;
                }
                // Slide Change Speed
                var speedVar = parseInt($ts.attr('data-speed'), 10);
                // Slider Loop
                var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
                // Slider Center
                var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
                // Slider Center
                var variableWidthVar = Boolean(
                    parseInt($ts.attr('data-variable-width'), 10)
                );
                // Pagination
                var paginaiton = $(this).children().hasClass('cs-pagination');
                // Slide Per View
                var slidesPerView = $ts.attr('data-slides-per-view');
                if (slidesPerView == 1) {
                    slidesPerView = 1;
                }
                if (slidesPerView == 'responsive') {
                    var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
                    var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
                    var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
                    var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
                    var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
                }
                // Fade Slider
                var fadeVar = parseInt($($ts).attr('data-fade-slide'));
                fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

                // Slick Active Code
                $slickActive.slick({
                    autoplay: autoPlayVar,
                    dots: paginaiton,
                    centerPadding: '0',
                    speed: speedVar,
                    infinite: loopVar,
                    autoplaySpeed: autoplaySpdVar,
                    centerMode: centerVar,
                    fade: fadeVar,
                    prevArrow: $(this).find('.cs-left_arrow'),
                    nextArrow: $(this).find('.cs-right_arrow'),
                    appendDots: $(this).find('.cs-pagination'),
                    slidesToShow: slidesPerView,
                    variableWidth: variableWidthVar,
                    // slidesToScroll: slidesPerView,
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: lgPoint,
                            },
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: mdPoint,
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: smPoint,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: xsPoing,
                            },
                        },
                    ],
                });
            });
        }
    }

    render() {
        return (
            <section className="cs-hero cs-style4 cs-bg cs-center" style={{ backgroundImage: `url("img/hero_bg4.jpeg")` }}>
                <div className="container-fluid">
                    <div className="cs-hero_in">
                        <div className="cs-hero_in_left">
                            <div className="cs-hero_text">
                                <h1 className="cs-hero_title cs-white_color">The Best Beneficial Place to Collect , Buy and Sell NFT Marketplace</h1>
                                <div className="cs-hero_subtitle cs-medium cs-white_color">Secure and secret NFTs for gaming, entertainment, metaverse and data <br />management time capsules.</div>
                                <div className="cs-hero_btns">
                                    <a href="explore-1.html" className="cs-hero_btn cs-style1 cs-color3"><span>Explore</span></a>
                                    <a href="create-items.html" className="cs-hero_btn cs-style1 cs-color1"><span>Create</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="cs-hero_in_right">
                            <div className="cs-slider cs-style1">
                                <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="1" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="3" data-md-slides="3" data-lg-slides="3" data-add-slides="3">
                                    <div className="cs-slider_wrapper" >
                                        <div className="cs-slide">
                                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                                <span className="cs-card_like cs-primary_color">
                                                    <i className="fas fa-heart fa-fw"></i>
                                                    2.1K
                                                </span>
                                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                                    <img src="img/general/general_23.jpeg" alt="Image" className="cs-zoom_item" />
                                                </a>
                                                <div className="cs-card_info">
                                                    <a href="#" className="cs-avatar cs-white_bg">
                                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                                        <span>Johny E.</span>
                                                    </a>
                                                    <h3 className="cs-card_title"><a href="explore-details.html">Beautiful shiba artwork</a></h3>
                                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.29 ETH 7/21</b></div>
                                                    <hr />
                                                    <div className="cs-card_footer">
                                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                                            <i className="fas fa-redo fa-fw"></i>
                                                            View History
                                                        </span>
                                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs-slide">
                                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                                <span className="cs-card_like cs-primary_color">
                                                    <i className="fas fa-heart fa-fw"></i>
                                                    3.3K
                                                </span>
                                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                                    <img src="img/general/general_24.jpeg" alt="Image" className="cs-zoom_item" />
                                                </a>
                                                <div className="cs-card_info">
                                                    <a href="#" className="cs-avatar cs-white_bg">
                                                        <img src="img/avatar/avatar_13.png" alt="Avatar" />
                                                        <span>Johny E.</span>
                                                    </a>
                                                    <h3 className="cs-card_title"><a href="explore-details.html">Cool octopus traveling</a></h3>
                                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.63 ETH 7/21</b></div>
                                                    <hr />
                                                    <div className="cs-card_footer">
                                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                                            <i className="fas fa-redo fa-fw"></i>
                                                            View History
                                                        </span>
                                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs-slide">
                                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                                <span className="cs-card_like cs-primary_color">
                                                    <i className="fas fa-heart fa-fw"></i>
                                                    5.3K
                                                </span>
                                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                                    <img src="img/general/general_25.jpeg" alt="Image" className="cs-zoom_item" />
                                                </a>
                                                <div className="cs-card_info">
                                                    <a href="#" className="cs-avatar cs-white_bg">
                                                        <img src="img/avatar/avatar_14.png" alt="Avatar" />
                                                        <span>Johny E.</span>
                                                    </a>
                                                    <h3 className="cs-card_title"><a href="explore-details.html">Diamond animals</a></h3>
                                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.27 ETH 7/21</b></div>
                                                    <hr />
                                                    <div className="cs-card_footer">
                                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                                            <i className="fas fa-redo fa-fw"></i>
                                                            View History
                                                        </span>
                                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs-slide">
                                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                                <span className="cs-card_like cs-primary_color">
                                                    <i className="fas fa-heart fa-fw"></i>
                                                    2.1K
                                                </span>
                                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                                    <img src="img/general/general_23.jpeg" alt="Image" className="cs-zoom_item" />
                                                </a>
                                                <div className="cs-card_info">
                                                    <a href="#" className="cs-avatar cs-white_bg">
                                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                                        <span>Johny E.</span>
                                                    </a>
                                                    <h3 className="cs-card_title"><a href="explore-details.html">Beautiful shiba artwork</a></h3>
                                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.29 ETH 7/21</b></div>
                                                    <hr />
                                                    <div className="cs-card_footer">
                                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                                            <i className="fas fa-redo fa-fw"></i>
                                                            View History
                                                        </span>
                                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs-slide">
                                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                                <span className="cs-card_like cs-primary_color">
                                                    <i className="fas fa-heart fa-fw"></i>
                                                    3.3K
                                                </span>
                                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                                    <img src="img/general/general_24.jpeg" alt="Image" className="cs-zoom_item" />
                                                </a>
                                                <div className="cs-card_info">
                                                    <a href="#" className="cs-avatar cs-white_bg">
                                                        <img src="img/avatar/avatar_13.png" alt="Avatar" />
                                                        <span>Johny E.</span>
                                                    </a>
                                                    <h3 className="cs-card_title"><a href="explore-details.html">Cool octopus traveling</a></h3>
                                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.63 ETH 7/21</b></div>
                                                    <hr />
                                                    <div className="cs-card_footer">
                                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                                            <i className="fas fa-redo fa-fw"></i>
                                                            View History
                                                        </span>
                                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs-slide">
                                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                                <span className="cs-card_like cs-primary_color">
                                                    <i className="fas fa-heart fa-fw"></i>
                                                    5.3K
                                                </span>
                                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                                    <img src="img/general/general_25.jpeg" alt="Image" className="cs-zoom_item" />
                                                </a>
                                                <div className="cs-card_info">
                                                    <a href="#" className="cs-avatar cs-white_bg">
                                                        <img src="img/avatar/avatar_14.png" alt="Avatar" />
                                                        <span>Johny E.</span>
                                                    </a>
                                                    <h3 className="cs-card_title"><a href="explore-details.html">Diamond animals</a></h3>
                                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.27 ETH 7/21</b></div>
                                                    <hr />
                                                    <div className="cs-card_footer">
                                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                                            <i className="fas fa-redo fa-fw"></i>
                                                            View History
                                                        </span>
                                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
                                    <div className="cs-left_arrow cs-center cs-box_shadow">
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0269 7.55957H0.817552" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="cs-right_arrow cs-center cs-box_shadow">
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.816895 7.55957H13.0262" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.92188 1.45508L13.0265 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="cs-pagination cs-style1 cs-hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(BidBanner);