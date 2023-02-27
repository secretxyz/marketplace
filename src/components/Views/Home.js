import React from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from '../Layout/ContentWrapper';

import TopRafflers from './Home/TopRafflers';
import Partners from './Home/Partners';

import FeaturedRaffles from './Home/FeaturedRaffles';
import HomeBanner2 from './Home/HomeBanner2';
import IconBox from './Home/IconBox';

// const slider = React.useRef(null)

class Home extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<ContentWrapper>
				<div className="cs-height_90 cs-height_lg_80"></div>
				<HomeBanner2 />

				<div className="cs-height_70 cs-height_lg_40"></div>
				<TopRafflers />

				<FeaturedRaffles />

				<div className="cs-height_70 cs-height_lg_40"></div>

				<IconBox />

				<div className="cs-height_70 cs-height_lg_40"></div>
			</ContentWrapper>
		);
	}
}

export default withRouter(Home);
