import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from "../../Layout/ContentWrapper";

const TermsCondition = () => {

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
                            <p>By using any services or using any of the tools within the SecretMarket platform, you agree SecretMarket and it's partners will not be held liable in any way for any losses at anytime. We do not use or store any of your seed phrases, passcodes, or other vulnerable information. We do not and will not sell any of your data.</p>
                            <p>We reserve the right to blacklist or ban any users at our discretion, although this primarily centers around abuse of the platform, fraud, or other activities.</p>

                            <h3>Fees and payments</h3>
                            <p>All marketplace fees can be changed at our discretion. No fee will ever be changed on an active sale, and at least 72 hour notice will be provided for any platform wide fee changes. </p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default TermsCondition;
