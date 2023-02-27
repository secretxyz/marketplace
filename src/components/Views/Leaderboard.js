import React, { useState } from "react";
import ContentWrapper from '../Layout/ContentWrapper';
import TopBuyers from "./Leaderboard/TopBuyers";
import TopRafflers from "./Leaderboard/TopRafflers";

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
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="cs-height_40 cs-height_lg_30"></div>
						<TopRafflers />
					</div>
					<div className="col-lg-6">
						<div className="cs-height_40 cs-height_lg_30"></div>
						<TopBuyers />
					</div>
				</div>
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>


		</ContentWrapper>
	);
}

export default Leaderboard;
