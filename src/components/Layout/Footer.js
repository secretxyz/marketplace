import React, { Component } from 'react';

const Footer = () => {

    const onClickSubscribe = () => {

    }

    return (
        <footer className="cs-footer cs-style1">
            <div className="cs-footer_bg"></div>
            <div className="cs-height_80"></div>
            <div className="container cs-footer_main">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="cs-footer_widget">
                                    <h2 className="cs-widget_title">Marketplace</h2>
                                    <ul className="cs-widget_nav">
                                        <li><a href="/explorer-raffles">Explore Raffles</a></li>
                                        <li><a href="/explorer-collections">Explore Collections</a></li>
                                        <li><a href="/explorer-nfts">Explore NFTs</a></li>
                                        <li><a href="/drops">Drops</a></li>
                                        <li><a href="/leaderboards">Leaderboards</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="cs-footer_widget">
                                    <h2 className="cs-widget_title">Account</h2>
                                    <ul className="cs-widget_nav">
                                        <li><a href="/my-profile/raffles">My Raffles</a></li>
                                        <li><a href="/my-profile/raffle-tickets">My Tickets</a></li>
                                        <li><a href="/my-profile/collected">My NFTs</a></li>
                                        <li><a href="/my-profile/collections">My Collections</a></li>
                                        <li><a href="/my-profile/profile-info">My Profile</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="cs-footer_widget">
                                    <h2 className="cs-widget_title">Secret Labs</h2>
                                    <ul className="cs-widget_nav">
                                        <li><a href="/provably-fair">Provably Fair</a></li>
                                        <li><a href="/about">Contact Us</a></li>
                                        <li><a href="/faq">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="cs-footer_widget">
                            <h2 className="cs-widget_title">Subscribe to our newsletter.</h2>
                            <form className="cs-footer_newsletter">
                                <input type="text" placeholder="Enter Your Email" className="cs-newsletter_input" />
                                <button className="cs-newsletter_btn" onClick={onClickSubscribe}>
                                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.7014 9.03523C25.0919 8.64471 25.0919 8.01154 24.7014 7.62102L18.3374 1.25706C17.9469 0.866533 17.3137 0.866533 16.9232 1.25706C16.5327 1.64758 16.5327 2.28075 16.9232 2.67127L22.5801 8.32812L16.9232 13.985C16.5327 14.3755 16.5327 15.0087 16.9232 15.3992C17.3137 15.7897 17.9469 15.7897 18.3374 15.3992L24.7014 9.03523ZM0.806641 9.32812H23.9943V7.32812H0.806641V9.32812Z" fill="white" />
                                    </svg>
                                </button>
                            </form>
                            <div className="cs-footer_social_btns">
                                <a href="https://bearableguy.club" target="_blank"><i className="fas fa-mask fa-fw"></i></a>
                                <a href="https://twitter.com/BearableguyClub" target="_blank"><i className="fab fa-twitter fa-fw"></i></a>
                                <a href="https://discord.gg/VnNGWAAj3Q" target="_blank"><i className="fab fa-discord fa-fw"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs-height_40 cs-height_lg_20"></div>
            <div className="cs-footer_bottom">
                <div className="container">
                    <div className="cs-footer_separetor"></div>
                    <div className="cs-footer_bottom_in">
                        <div className="cs-copyright">Copyright 2023. Created by SecretLabs.</div>
                        <ul className="cs-footer_menu">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-condition">Term & Condition</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
