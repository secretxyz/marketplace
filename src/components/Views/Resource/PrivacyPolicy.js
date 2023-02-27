import React from 'react';
import ContentWrapper from "../../Layout/ContentWrapper";

const PrivacyPolicy = () => {

    return (
        <ContentWrapper>
            <div className="cs-height_90 cs-height_lg_80"></div>
            <section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                <div className="container">
                    <div className="text-center">
                        <h1 className="cs-page_title">Privacy Policy</h1>
                    </div>
                </div>
            </section>
            <div className="cs-height_40 cs-height_lg_30"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="cs-single_post">
                            <p>At SecretMarket, we take privacy seriously and are committed to protecting the personal information of our users. We believe in transparency and want to make sure our users fully understand what data we collect and how it is used.</p>
                            <p>We do not collect any personal information from our users. This means we do not ask for, or store, any personally identifiable information such as names, addresses, phone numbers, or email addresses.</p>
                            <p>In addition, we will never sell or share any of our users' data with third parties for any reason. We do not engage in any data mining or data tracking practices, and we do not use cookies or other tracking technologies to gather information about our users.</p>
                            <p>We understand the importance of privacy and security, and we are dedicated to ensuring that our users' data remains confidential and protected at all times.</p>
                            <p>If you have any questions or concerns about our privacy policy, please do not hesitate to contact us.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs-height_120 cs-height_lg_40"></div>
        </ContentWrapper >
    );
}

export default PrivacyPolicy;
