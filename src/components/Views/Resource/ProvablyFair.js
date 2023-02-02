import React from 'react';
import ContentWrapper from "../../Layout/ContentWrapper";

const ProvablyFair = () => {
	return (
		<ContentWrapper>
			<div className="cs-height_90 cs-height_lg_80"></div>
			<section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
				<div className="container">
					<div className="text-center">
						<h1 className="cs-page_title">Provably Fair</h1>
					</div>
				</div>
			</section>
			<div className="cs-height_40 cs-height_lg_30"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="cs-single_post">
							<h2>
								Ensuring Fairness in Raffle Draws with Provable Randomness
							</h2>
							<img src="img/provably-fair.png" alt="" />
							<div className="cs-height_40 cs-height_lg_40"></div>
							<p>
								Raffles have always been a popular way of raising funds and providing an exciting opportunity for participants to win big prizes.
								In the traditional setup, a raffle draw involves purchasing tickets, writing numbers on them, and putting them in a container. <br />
								The winner is then selected through a random drawing process.
								However, there is always an element of doubt and suspicion that the drawing may not be fair or unbiased.
								This is where the concept of "provably fair" comes in.
							</p>
							<p>
								At <strong>SecretLabs</strong>, we understand the importance of trust and transparency in the raffle drawing process.
								That's why we have implemented a provable fair system that guarantees fairness in every raffle draw.
								Our platform uses the transaction hash generated on the XRP ledger to generate a random number under the reserved ticket amount.
								This ensures that the lucky number is generated in a completely random and unbiased manner.
							</p>
							<p>
								To verify the fairness of a raffle draw, participants can use third-party scripts to check the lucky number against the transaction hash.
								The process is simple and straightforward. <br />
								Here's how it works:
							</p>
							<ul>
								<li>Copy the verify hash and navigate to the <a className="cs-accent_color" href="https://jsfiddle.net/SecretLabs/zp7nuxsa/" target='_blank'><strong>3rd party scripts</strong></a>.</li>
								<li>Past verify hash and enter the number of reserved tickets.</li>
								<li>Generate lucky number.</li>
								<li>Verify that the generated lucky number matches the winner's ticket information.</li>
							</ul>
							<div className="cs-height_10 cs-height_lg_10"></div>
							<div className="cs-center">
								<img src="img/provably-fair_1.png" alt="" />
							</div>
							<div className="cs-center">
								<span>Screenshots of verification progress</span>
							</div>

							<div className="cs-height_40 cs-height_lg_40"></div>
							<div className="cs-center">
								<img src="img/provably-fair_2.png" alt="" />
							</div>
							<div className="cs-center">
								<span>Random number generation code</span>
							</div>
							<div className="cs-height_40 cs-height_lg_40"></div>
							<p>
								The provable fair system provides complete transparency and eliminates any doubt about the fairness of the raffle draw.
								This not only boosts participant confidence in the platform but also enhances the overall credibility and reputation of <strong>SecretLabs</strong>.
							</p>
							<p>
								In conclusion, <strong>SecretLabs</strong> is committed to providing a fair and transparent raffle drawing experience to all participants.
								With our provable fair system, participants can rest assured that every raffle draw is fair and unbiased.<br/>
								So why wait? Join us today and participate in exciting raffle draws for a chance to win big prizes!
							</p>
						</div>
						<div className="cs-height_60 cs-height_lg_30"></div>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}

export default ProvablyFair;