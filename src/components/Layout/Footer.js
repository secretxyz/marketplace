import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="cs-footer cs-style1">
                <div className="cs-footer_bg"></div>
                <div className="cs-height_100 cs-height_lg_60"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="cs-footer_widget">
                                        <h2 className="cs-widget_title">Marketplace</h2>
                                        <ul className="cs-widget_nav">
                                            <li><a href="explore-1.html">All NFTs</a></li>
                                            <li><a href="explore-2.html">Popular Art</a></li>
                                            <li><a href="explore-1.html">Digital Art</a></li>
                                            <li><a href="explore-1.html">Trending</a></li>
                                            <li><a href="explore-details.html">Explore Details</a></li>
                                            <li><a href="live-action.html">Live Action</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="cs-footer_widget">
                                        <h2 className="cs-widget_title">Account</h2>
                                        <ul className="cs-widget_nav">
                                            <li><a href="user-profile.html">Profile</a></li>
                                            <li><a href="user-items.html">My Collection</a></li>
                                            <li><a href="create-items.html">Create & Upload</a></li>
                                            <li><a href="user-account-settings.html">Account Setting</a></li>
                                            <li><a href="connect-wallet.html">Connect wallet</a></li>
                                            <li><a href="explore-1.html">Wishlist</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="cs-footer_widget">
                                        <h2 className="cs-widget_title">Company</h2>
                                        <ul className="cs-widget_nav">
                                            <li><a href="blog.html">Recent News</a></li>
                                            <li><a href="how-it-works.html">How it Works</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="faq.html">Help Center & FAQ</a></li>
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
                                    <button className="cs-newsletter_btn">
                                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.7014 9.03523C25.0919 8.64471 25.0919 8.01154 24.7014 7.62102L18.3374 1.25706C17.9469 0.866533 17.3137 0.866533 16.9232 1.25706C16.5327 1.64758 16.5327 2.28075 16.9232 2.67127L22.5801 8.32812L16.9232 13.985C16.5327 14.3755 16.5327 15.0087 16.9232 15.3992C17.3137 15.7897 17.9469 15.7897 18.3374 15.3992L24.7014 9.03523ZM0.806641 9.32812H23.9943V7.32812H0.806641V9.32812Z" fill="white" />
                                        </svg>
                                    </button>
                                </form>
                                <div className="cs-footer_social_btns">
                                    <a href="#"><i className="fab fa-facebook-f fa-fw"></i></a>
                                    <a href="#"><i className="fab fa-twitter fa-fw"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a>
                                    <a href="#"><i className="fab fa-instagram fa-fw"></i></a>
                                    <a href="#"><i className="fab fa-whatsapp fa-fw"></i></a>
                                    <a href="#"><i className="fab fa-github fa-fw"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_60 cs-height_lg_20"></div>
                <div className="cs-footer_bottom">
                    <div className="container">
                        <div className="cs-footer_separetor"></div>
                        <div className="cs-footer_bottom_in">
                            <div className="cs-copyright">Copyright 2022. Created by BearableGuyClub.</div>
                            <ul className="cs-footer_menu">
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-condition.html">Term & Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
