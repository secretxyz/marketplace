import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from "../../Layout/ContentWrapper";

class TermsCondition extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <ContentWrapper>
                <div className="cs-height_90 cs-height_lg_80"></div>
                <section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                    <div className="container">
                        <div className="text-center">
                            <h1 className="cs-page_title">Terms & Conditions</h1>
                        </div>
                    </div>
                </section>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="cs-single_post">
                                <h3>General Use</h3>
                                <p>SecretMarket offers an open marketplace aggregating offers from across the XRP Ledger. </p>
                                <p>Use of the raffle feature is not trustless. While most processes are automated and have been tested thoroughly, by using any of our tools you agree to accept any risk associated with entering raffles, trading on the marketplace, and hosting of raffles.</p>
                                <p>By using any raffle hosting services or using any of the tools within the SecretMarket platform, you agree SecretMarket and it's partners will not be held liable in any way for any losses at anytime. We do not use or store any of your seed phrases, passcodes, or other vulnerable information. We do not and will not sell any of your data. </p>
                                <p>We reserve the right to blacklist or ban any users at our discretion, although this primarily centers around abuse of the platform, fraud, or other activities. You also agree that by entering any raffles you do not expect any return, and that entering a raffle does not guarantee a prize and carries an aspect of probability</p>

                                <h3>Fees and payments</h3>
                                <p>All marketplaces or raffle fees can be changed at our discretion. No fee will ever be changed on an active raffle or sale, and at least 72 hour notice will be provided for any platform wide fee changes. </p>
                                <p>Raffle tickets once purchased are only refunded in the event a raffle is cancelled. Fees are only paid upon successful sales, with the exception of the "Features Option" fee.</p>

                                <h3>Raffle Feature</h3>
                                <p>Raffles cannot be manually cancelled by the creator. A raffle is cancelled if the timer set by the seller reaches 0, and the minimum ticket sales have not yet been reached. Raffle sellers have responsibility to double check their Raffle settings to ensure proper pricing, time frame, and other parameters.</p>
                                <p>SecretMarket will not be held liable for any user mistakes when hosting their own raffles. For buyers, once a raffle ticket is purchased, you cannot cancel and will not be refunded unless the raffle is automatically cancelled as stated above.</p>
                                <p>In the event a raffle cancels, 100% of ticket purchased are refunded and no fee is taken, and seller reclaims their NFT.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        );
    }
}

export default withRouter(TermsCondition);
