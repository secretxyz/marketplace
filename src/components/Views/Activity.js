import React, { Component } from "react";
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from "reactstrap";

class Activity extends Component {
	componentDidMount() { }

	render() {
		return (
			<ContentWrapper>
				<div className="cs-height_90 cs-height_lg_80"></div>
				<section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
					<div className="container">
						<div className="text-center">
							<h1 className="cs-page_title">Activity</h1>
						</div>
					</div>
				</section>
				<div className="cs-height_40 cs-height_lg_30"></div>
				<div className="container">

				</div>
				<div className="cs-height_70 cs-height_lg_40"></div>
			</ContentWrapper>
		);
	}
}

export default Activity;
