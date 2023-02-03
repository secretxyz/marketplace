import React from "react";
import ContentWrapper from '../Layout/ContentWrapper';

const Leaderboard = () => {

	return (
		<ContentWrapper>
			<div className="cs-height_90 cs-height_lg_80"></div>
			<section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
				<div className="container">
					<div className="text-center">
						<h1 className="cs-page_title">Leaderboard</h1>
					</div>
				</div>
			</section>
			<div className="cs-height_40 cs-height_lg_30"></div>
			<div className="container">
				<div className="cs-coming_soon">
					<h1 className="cs-page_title">
						Coming Soon...
					</h1>
				</div>
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>
		</ContentWrapper>
	);
}

export default Leaderboard;
