import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col } from "reactstrap";

class Marketplaces extends Component {
	componentDidMount() {}

	render() {
		return (
			<ContentWrapper>
				<section className="breadcrumb-area breadcrumb-bg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-8">
								<div className="breadcrumb-content text-center">
									<h3 className="title">Marketplaces</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="terms-area">
					<div class="container">
						<div class="row justify-content-center">
                            <div class="col-xl-3 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-thumb">
                                        <a href="https://www.onxrp.com" target="_blank"><img src="./img/marketplaces/onxrp.png" alt=""/></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title">
                                            <a href="https://www.onxrp.com" target="_blank">OnXRP</a> 
                                            <a href="https://www.onxrp.com" target="_blank" class="btn">Visit</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-thumb">
                                        <a href="https://www.xrpnft.com" target="_blank"><img src="./img/marketplaces/xrpnft.png" alt=""/></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title">
                                            <a href="https://www.xrpnft.com" target="_blank">XRPNFT</a> 
                                            <a href="https://www.xrpnft.com" target="_blank" class="btn">Visit</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-thumb">
                                        <a href="https://www.sologenic.org" target="_blank"><img src="./img/marketplaces/sologenic.png" alt=""/></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title">
                                            <a href="https://www.sologenic.org" target="_blank">Sologenic</a> 
                                            <a href="https://www.sologenic.org" target="_blank" class="btn">Visit</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-thumb">
                                        <a href="https://www.nftmaster.com" target="_blank"><img src="./img/marketplaces/nftmaster.png" alt=""/></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title">
                                            <a href="https://www.nftmaster.com" target="_blank">NFTMaster</a> 
                                            <a href="https://www.nftmaster.com" target="_blank" class="btn">Visit</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</section>
			</ContentWrapper>
		);
	}
}

export default Marketplaces;
