import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from "../../Layout/ContentWrapper";

class PrivacyPolicy extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <ContentWrapper>
                <div className="cs-height_90 cs-height_lg_80"></div>
                <section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.svg")` }}>
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
                                <h3>Privacy Policy</h3>
                                <p>It is a long established fact that a reader will be distrac by the readable content of a page when looking at its layout. The point of using Lorem Ipm i has a more-ornormal distribution of letters,as opposed It is a long established fact that a reader will be distrac by the readable content of a page when looking at itslayout. The point of using Lorem Ipm i has a NFTs<br /><br />Crypto is a long established fact that a reader will be distrac by the readable content of a page when looking at its layout. The point of using Lorem Ipm i has a more-ornormal distribution of letters,as opposed It is a long established fact that a reader will be distrac by the readable content of a page when looking at itslayout. The point of using Lorem Ipm i has a NFTs</p>
                                <h3>How do we use this information?</h3>
                                <p>NFTS Music is a long established fact that a reader will be distrac by the readable content of a page when looking at its layout. The point of using Lorem Ipm i has a more-ornormal distribution of letters,as opposed It is a long established fact that a reader will be distrac by the readable content of a page when looking at itslayout. The point of using Lorem Ipm i has a NFTs</p>
                                <ul>
                                    <li>How to make and sell an NFT.</li>
                                    <li>Buy some cryptocurrency to fund your wallet.</li>
                                    <li>Add some cryptocurrency to your wallet.</li>
                                    <li>Upload the file you want to turn into an NFT.</li>
                                    <li>Set up an auction for your NFT</li>
                                </ul>
                                <h3>Third-party applications, websites and services</h3>
                                <p>NFTs a long established fact that a reader will be distrac by the readable content of a page when looking at its layout. The point of using Lorem Ipm i has a.</p>
                                <h3>Data Access and Control</h3>
                                <p>You can view, access, edit, or delete your Personal Data for certain aspects of the Service via your Settings page. You may also have certain additional rights.</p>
                                <ul>
                                    <li>It is a long established fact that a reader will be distracted by the readable</li>
                                    <li>Content of a page when looking at its layout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_70 cs-height_lg_40"></div>
            </ContentWrapper >
        );
    }
}

export default withRouter(PrivacyPolicy);
