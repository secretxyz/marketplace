import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col } from "reactstrap";

class Terms extends Component {
	componentDidMount() { }

	render() {
		return (
			<ContentWrapper>
				<section className="breadcrumb-area breadcrumb-bg">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-8">
								<div className="breadcrumb-content text-center">
									<h3 className="title">Terms of Service</h3>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="terms-area">
					<div className="container terms-description">
						<div className="title1">Voucher Token Terms of Use:</div><p />
						Please note, Club XRPL collections do not use "IOU" tokens. <br />
						Tokens issued by Club XRPL are primarily airdropped voucher tokens with 0 value outside of redeeming them for a whitelist spot to mint an NFT for $0, in exchange for participation in the community or other qualifying methods such as setting trustlines, engagement, dev bounties, discord contests, etc. To make use of the voucher tokens, they must be redeemed within the redemption period set forth by Club XRPL. 
						Whitelist period is subject to change at anytime, however, we will make good faith efforts for a very lengthy time period before expiration of the voucher. <br />
						Redemption period not to exceed 4/20/2023(April 20th 2023)<p />

						<div className="title1">General Terms of Service:</div><p />
						Club XRPL is a web3 brand fullfillment service for art
						fans, artists, developers, and companies across the
						globe. We offer art design, back end development, and
						go-to market advisory as a service.
						<p />
						Our in house art communities and collections are made up
						of free NFT mint voucher tokens and curated collections
						using the deprecatied XLS14 standard on the XRP Ledger.
						The purchase of each NFT is a transaction in goods and
						not a promise to provide, or a guarantee of receipt of,
						future services from Club XRPL, although Club XRPL will
						make reasonable efforts to ensure that a utility comes
						into existence which allows you to unlock expanded
						functionality associated with the NFTs.
						<p />
						You understand and agree that the sale of any Club XRPL
						NFT grants you no rights and carries with it no
						guarantee of future performance of any kind by Club
						XRPL. You are not entitled, as a holder of any NFT, to
						vote or receive dividends or profits or be deemed the
						holder of shares or membership interests of Club XRPL or
						any other person by virtue of your ownership of a Club
						XRPL NFT, nor will anything contained herein be
						construed to convey on you any of the rights of a
						shareholder, partner, joint venturer, member, manager,
						etc. or any right to vote for the election of directors,
						members, or managers or upon any matter submitted to
						shareholders, members, or managers at any meeting
						thereof, or to give or withhold consent to any corporate
						action or to receive notice of meetings. Club XRPL may
						in the future, however, offer holders of various NFTs
						the opportunity to participate in massively open online
						governance system. You acknowledge that by no means do
						you own a portion of the brands or intellectual property
						by Club XRPL, unless expressly stated as on a specific
						projects whitepaper or roadmap. Any funds donated from
						Club XRPL to the community wallet are not guaranteed and
						simply a donation.
						<p />
						You understand that the development of Club XRPL
						business is a significantly risky venture, and you
						acknowledge and assume the risk that Club XRPL may not
						be able to complete certain concepts beyond it's
						control. Your purchase of an NFT could lead to the
						complete loss of your money, and no payments will be
						returned. Club XRPL NFTs will be created and delivered
						to any purchaser at the sole risk of the purchaser and
						on an “as-is” basis. Purchaser has not relied on any
						representations or warranties made by Club XRPL or any
						other person outside of the context of these Terms of
						Sale, including but not limited to conversations of any
						kind, including but not limited to whether such
						statements are made through oral or electronic
						communication, or any White Paper, social media post or
						website.
						<p />
						Without prejudice to any other provision of these Terms
						of Sale, you acknowledge and agree that, except in the
						case of Club XRPL fraud or wilfull default, and except
						as otherwise required by any non-waivable provision of
						applicable law, Club XRPL shall not be liable in any
						manner whatsoever to you or any other person for losses
						or damages of any kind, whether arising in contract,
						tort, or otherwise, arising from the sale of Club XRPL
						NFTs to any person.
						<p />
						All purchases of any Club XRPL NFT are final and
						nonrefundable. In the event XLS20 is not brought forth
						onto the XRP Ledger, we reserve the right to complete
						fulfillment and minting on an alternate blockchain.
					</div>
				</section>
			</ContentWrapper>
		);
	}
}

export default Terms;
