import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col } from "reactstrap";

class Buy extends Component {
	state = {
		numPages: null,
		pageNumber: 2,
	};

	componentDidMount() {}

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	clickedPrev = () => {
		var pageNumber = this.state.pageNumber;
		pageNumber--;
		if (pageNumber < 1) {
			pageNumber = 1;
		}
		this.setState({ pageNumber });
	};

	clickedNext = () => {
		var pageNumber = this.state.pageNumber;
		pageNumber++;
		if (pageNumber > 6) {
			pageNumber = 6;
		}
		this.setState({ pageNumber });
	};

	render() {
		return (
			<ContentWrapper>
				<section className="breadcrumb-area breadcrumb-bg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-8">
								<div className="breadcrumb-content text-center">
									<h3 className="title">How To Buy</h3>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="terms-area">
					<div className="container blog-details-content terms-description">
						<h4 className="title">
							How to obtain a premint voucher token
						</h4>
						<p>1. Download Xumm Wallet</p>
						<p>2. Add trustline for the token you wish to obtain</p>
						<p>3. Purchase your token from the DEX</p>



						<p>
							If you need assistance reach out to us in discord.
						</p>
						<p>
							To get any of our collections on the secondary
							markets, simply go to{" "}
							<a href="marketplaces">Marketplaces</a>
						</p>

						<div className="text-center">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/i2NYeFqjjL4"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</section>
			</ContentWrapper>
		);
	}
}

export default Buy;
