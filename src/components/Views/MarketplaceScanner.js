import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col } from "reactstrap";

class MarketplaceScanner extends Component {
	componentDidMount() {}

	render() {
		return (
			<ContentWrapper>
				<section className="breadcrumb-area breadcrumb-bg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-8">
								<div className="breadcrumb-content text-center">
									<h3 className="title">Marketplace Scanner</h3>
								</div>
							</div>
						</div>
					</div>
                </section>
                
				<section className="terms-area">
					<div className="container terms-description bid-countdown-wrap">
                        <hr></hr>
                        <h2 className="coming-time">COMING SOON</h2>
                        <hr></hr>
                    </div>
                </section>
			</ContentWrapper>
		);
	}
}

export default MarketplaceScanner;
