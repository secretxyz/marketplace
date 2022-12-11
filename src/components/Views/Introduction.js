import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ContentWrapper from "../Layout/ContentWrapper";
import { Row, Col } from "reactstrap";

const db = {
	thebearablebulls: {
		name: "The Bearable Bulls",
		description:
			"Our core membership NFT, The Bearable Bulls is an originally illustrated and meticulously designed art collection of 10,000 randomly generated bulls. The BearableBulls are an OG artset that encompasses the spirit of the XRP Army, while delivering some proven flavor with companion collections and surprise incentives. Each Bull is unique and generated from over 200 hand drawn traits, with several options from skins to eyes and apparel.",
		title2: "Buy a Bearable Bulls NFT Voucher",
		description2:
			"To reserve a pre-mint Bearable Bull NFT, simply add the $CLUB trustline to your XRP wallet. Then, purchase a CLUB token via the XRPL DEX.",
		image1: "./img/others/bulls/bulls0.png",
		image2: "./img/others/bulls/bulls1.png",
		image3: "./img/others/bulls/bulls2.png",
		image4: "./img/others/bulls/bulls3.png",
		terms: "Voucher token Terms of Service",
		set_link: {
			title: "SET $CLUB TRUSTLINE",
			url: "https://rebrand.ly/CLUBX-Trustline",
		},
		buy_link: {
			title: "BUY $CLUB Voucher",
			url: "https://rebrand.ly/BuyCLUB",
		},
		thumbnail_image: "img/others/top_collection01.png",
		cover_image: "img/bg/sample/bulls.png",
		twitter: "https://twitter.com/ClubXRPL",
		discord: "https://discord.gg/clubxrpl",
		mint_button: "redeem CLUB on OnXRP.com",
		mint_link: "https://nft.onxrp.com/launchpad/details/the-bearable-bulls/",
	},
	therichducks: {
		name: "The Rich Ducks Crypto Club",
		description:
			"A collection of 10,000 Rich Ducks who ignore the fud, and stay stuffing those bags! Over 200 traits, and various forms of bling make each duck unique! Collection curated in partnership with youtuber and musician XRPBagman. The Rich Ducks are a free mint triggered by holding a Bearable Bull NFT. Any remaining unclaimed supply will be available to the public via sale. Richest Ducks will have its own future utility, events, and future branding led by the Moon Commander XRP Bags after the public minting is complete.",
		title2: "How to purchase a Rich Duck NFT",
		description2:
			"There is no token or Trustline for the Richest Ducks drop, you simply hold a Bearable Bull NFT after mint and you'll be eligible for a Rich Duck NFT.",
		image1: "./img/others/bulls/ducks0.png",
		image2: "./img/others/bulls/ducks1.png",
		image3: "./img/others/bulls/ducks2.png",
		image4: "./img/others/bulls/ducks3.png",
		set_link: {
			title: "Buy Bull",
			url: "https://nft.onxrp.com/collection/the-bearable-bulls/",
		},
		buy_link: {
			title: "Claim Duck",
			url: "https://richducks.clubxrpl.com/",
		},
		thumbnail_image: "img/others/top_collection06.png",
		cover_image: "img/bg/sample/ducks.png",
		twitter: "https://twitter.com/xrpbags",
		discord: "https://discord.gg/huwXrqSAkm",
		description3: "FREE DUCK CLAIM IS LIVE!",
	},
	clubxbaes: {
		name: "Club X Baes",
		description:
			"The 'XBAES' are the flagship female influenced collection on the XRP Ledger. Only 6900 Baes will be available, with 100 legendary ladies and 6800 randomly generated Baes. Over 150 unique, hand drawn traits make up the collection and will lead the way to creating a female inspired web3 brand on the XRP Ledger. Good Baes, Bad Baes, Humans, Cyborgs, Aliens, there's a special Bae out the in the cryptoverse for everyone!",
		title2: "Buy an XBAE NFT Voucher",
		description2:
			"To reserve a pre-mint Club X Bae, simply add the $XBAE trustline to your XRP wallet. Then, purchase a XBAE token via the XRPL DEX.",
		image1: "./img/others/bulls/xbae0.png",
		image2: "./img/others/bulls/xbae1.png",
		image3: "./img/others/bulls/xbae2.png",
		image4: "./img/others/bulls/xbae3.png",
		set_link: {
			title: "SET $XBAE TRUSTLINE",
			url: "https://rebrand.ly/XBAE-Trustline",
		},
		buy_link: {
			title: "BUY $XBAE Voucher",
			url: "https://rebrand.ly/BuyXBAE",
		},
		thumbnail_image: "img/others/top_collection03.png",
		cover_image: "img/bg/sample/default.png",
		twitter: "https://twitter.com/ClubXBaes",
		discord: "https://discord.gg/clubxrpl",
		mint_button: "Mint with XBAE token",
		mint_link: "https://nft.onxrp.com/launchpad/details/x-baes/",
	},
	phoenixeggs: {
		name: "Phoenix Eggs",
		description:
			"Stunning procedurally generative 3d eggs with a limited supply of 589 NFTs. Created from several materials, patterns, and bases with each individual egg having its own identity. Each Phoenix Egg represents access to a small DAO we aim to create on the XRPL, uniting ideas and execution within the organization.",
		title2: "Buy a Phoenix Eggs NFT Voucher",
		description2:
			"To reserve a pre-mint Phoenix Eggs, simply add the $PHX trustline to your XRP wallet. Then, purchase a PHX token via the XRPL DEX.",
		image1: "./img/others/bulls/eggs0.png",
		image2: "./img/others/bulls/eggs1.png",
		image3: "./img/others/bulls/eggs2.png",
		image4: "./img/others/bulls/eggs3.png",
		set_link: {
			title: "SET $PHX TRUSTLINE",
			url: "https://rebrand.ly/PHX-Trustline",
		},
		buy_link: {
			title: "BUY $PHX Voucher",
			url: "https://rebrand.ly/BuyPHX",
		},
		thumbnail_image: "img/others/top_collection04.png",
		cover_image: "img/bg/sample/eggs.png",
		twitter: "https://twitter.com/ClubXRPL",
		discord: "https://discord.gg/clubxrpl",
		mint_button: "Mint with PHX token",
		mint_link: "https://xrpnft.com/collection/phoenix-eggs"
	},
	babyaperocketbrigade: {
		name: "Baby Ape Rocket Brigade",
		description:
			"More than a community, The Rocket Brigade aims to be a web3 universe. Baby Apes will exist in limited quantity on different blockchains featuring unique traits to each network. Each new adopted network represents a new planet in the universe. The Genesis planet will be the XRP Ledger. Baby Ape minted with a voucher token will receive 1 free Baby Ape on the 2nd planet. 3300 Baby Apes will take flight on the XRPL with only 2200 voucher token supply, and 1100 available for public mint.",
		title2: "Buy a Baby Ape Rocket Brigade Voucher",
		description2:
			"To reserve a pre-mint Baby Ape Rocket Brigade, simply add the $BAPE trustline to your XRP wallet. Then, purchase a BAPE token via the XRPL DEX.",
		image1: "./img/others/bulls/ape0.png",
		image2: "./img/others/bulls/ape1.png",
		image3: "./img/others/bulls/ape2.png",
		image4: "./img/others/bulls/ape3.png",
		set_link: {
			title: "SET $BAPE TRUSTLINE",
			url: "https://rebrand.ly/BAPE-Trustline",
		},
		buy_link: {
			title: "BUY $BAPE Voucher",
			url: "https://rebrand.ly/BuyBAPE",
		},
		thumbnail_image: "img/others/top_collection05.png",
		cover_image: "img/bg/sample/apes1.png",
		twitter: "https://twitter.com/Oogi_Oogi",
		discord: "https://discord.gg/oogi",
	},
};
class Introduction extends Component {
	state = {
		data: {},
	};

	componentDidMount() {
		const { match } = this.props;
		const collection = match.params.collection;
		this.setState({
			data: db[collection],
		});
	}

	clickedFilter = (e) => {
		e.preventDefault();
		$(e.target).toggleClass("active");
		$(e.target).parent().toggleClass("active");
	};

	render() {
		const { data } = this.state;
		return (
			<ContentWrapper>
				<section className="collection-breadcrumb-area">
					<div className="right-side">
						<ul className="collection-social">
							{/* <li>
								<a href="#">
									<i className="fab fi-sr-globe"></i>
								</a>
							</li> */}
							{data.twitter ? (
								<li>
									<a href={data.twitter} target="_blank">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
							) : (
								<></>
							)}
							{data.discord ? (
								<li>
									<a href={data.discord} target="_blank">
										<i className="fab fa-discord"></i>
									</a>
								</li>
							) : (
								<></>
							)}
						</ul>
					</div>
					<div
						className="cover"
						style={{ backgroundImage: `url(${data.cover_image})` }}
					/>
					<div
						className="thumbnail"
						style={{
							backgroundImage: `url(${data.thumbnail_image})`,
						}}
					/>
				</section>
				<section>
					<div className="container">
						<div className="intro-metadata">
							<h3 className="title">{data.name}</h3>
							<div className="intro-description">
								{data.description}
							</div>
							{data.terms ? (
								<div className="mt-20" style={{ maxWidth: "800px", width: "100%" }}>
									<a href="terms">
										<strong>{data.terms}</strong>
									</a>
								</div>
							) : (
								""
							)}
						</div>
						{data.title1 ? (
							<div className="intro-metadata mt-40 mb-20">
								<div className="title1">{data.title1}</div>
								<div className="intro-description">
									{data.description1}
								</div>
							</div>
						) : (
							""
						)}
						<hr></hr>
						<div className="intro-metadata mb-40">
							<div className="intro-description">
								<Row>
									<Col
										className="p-0 intro-section"
										lg={6}
										sm={12}
									>
										<div className="title2">
											{data.title2}
										</div>
										<div>{data.description2}</div>
										{data.set_link ? (
											<div className="button-section mt-20 pr-10 pl-10">
												<a
													href={data.set_link?.url}
													target="blank"
													className="btn btn-info"
												>
													{data.set_link?.title}
												</a>
												<a
													href={data.buy_link?.url}
													target="blank"
													className="btn btn-info"
												>
													{data.buy_link?.title}
												</a>
											</div>
										) : (
											""
										)}
										{data.description3 ? <div className="mt-20 text-center">
											<strong>{data.description3}</strong>
										</div> :
											<div className="mt-20">
												New to XRPL trustlines? See{" "}
												<a href="buy">
													<strong>How To Buy</strong>
												</a>
											</div>}

										{data.mint_link ? (
											<div className="button-section mt-20 pr-10 pl-10 justify-content-center">
												<a
													href={data.mint_link}
													target="blank"
													className="btn btn-redeem"
												>
													{data.mint_button}
												</a>
											</div>
										) : (
											""
										)}
									</Col>
									<Col lg={6} sm={12}>
										<Row>
											<Col className="pl-5 pr-5 pt-1 pb-1" xs={6}>
												<img src={data.image1}></img>
											</Col>
											<Col className="pl-5 pr-5 pt-1 pb-1" xs={6}>
												<img src={data.image2}></img>
											</Col>
										</Row>
										<Row>
											<Col className="pl-5 pr-5 pt-1 pb-1" xs={6}>
												<img src={data.image3}></img>
											</Col>
											<Col className="pl-5 pr-5 pt-1 pb-1" xs={6}>
												<img src={data.image4}></img>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</section>
			</ContentWrapper>
		);
	}
}

export default withRouter(Introduction);
