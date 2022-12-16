import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from "../../Layout/ContentWrapper";
import $ from 'jquery';

class Faq extends Component {
    componentDidMount() {
        $('.cs-accordion').children('.cs-accordion-body').hide();
        $('.cs-accordion.active').children('.cs-accordion-body').show();
        $('.cs-accordion_head').on('click', function () {
            $(this)
                .parent('.cs-accordion')
                .siblings()
                .children('.cs-accordion-body')
                .slideUp(250);
            $(this).siblings().slideDown(250);
            /* Accordion Active Class */
            $(this).parents('.cs-accordion').addClass('active');
            $(this).parent('.cs-accordion').siblings().removeClass('active');
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="cs-height_90 cs-height_lg_80"></div>
                <section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.svg")` }}>
                    <div class="container">
                        <div class="text-center">
                            <h1 class="cs-page_title">Frequently Asked Questions</h1>
                        </div>
                    </div>
                </section>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <div class="container">
                    <div class="row cs-col_reverse_lg">
                        <div class="col-lg-6">
                            <div class="cs-faq">
                                <div class="cs-section_heading cs-style3">
                                    <h2 class="cs-section_title">Getting Started</h2>
                                    <div class="cs-section_seperator"></div>
                                </div>
                                <div class="cs-height_30 cs-height_lg_30"></div>
                                <div class="cs-accordions">
                                    <div class="cs-accordion active">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">Do you have to mint an NFT to sell it?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">How much does the average NFT sell for?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">What kind of NFTs sell best?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">How to make money with NFTs as a beginner?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">Who owns the most expensive NFT?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="text-center">
                                <img src="img/faq_1.svg" alt="faq" />
                            </div>
                            <div class="cs-height_0 cs-height_lg_30"></div>
                        </div>
                    </div>
                </div>
                <div class="cs-height_80 cs-height_lg_70"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="text-center">
                                <img src="img/faq_2.svg" alt="faq" />
                            </div>
                            <div class="cs-height_0 cs-height_lg_30"></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="cs-faq">
                                <div class="cs-section_heading cs-style3">
                                    <h2 class="cs-section_title">Safety, Security, and Policies</h2>
                                    <div class="cs-section_seperator"></div>
                                </div>
                                <div class="cs-height_30 cs-height_lg_30"></div>
                                <div class="cs-accordions">
                                    <div class="cs-accordion active">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">How do I get started in NFT?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <b>Step 1:</b> Decide on the concept.
                                            <b>Step 2:</b> Decide on the platform. <br />
                                            <b>Step 3:</b> Connect and build community.
                                            <b>Step 4:</b> Create your art. <br />
                                            <b>Step 5:</b> Mint and share.
                                            <b>The final step:</b> Selling your NFT.
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">How much does the average NFT sell for?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">What kind of NFTs sell best?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">How to make money with NFTs as a beginner?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                    <div class="cs-accordion">
                                        <div class="cs-accordion_head">
                                            <h2 class="cs-accordion_title">Who owns the most expensive NFT?</h2>
                                            <span class="cs-accordion_toggle">
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="cs-accordion-body">
                                            <p>Once you have minted a piece of artwork on a marketplace as an <br />NFT, you should never mint it on another platform. If you ever decide <br />to do so, note that most platforms reserve</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_70 cs-height_lg_40"></div>
            </ContentWrapper>
        );
    }
}

export default withRouter(Faq);
