import React from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from '../Layout/ContentWrapper';

import BidBanner from './Home/BidBanner';
import NewItems from './Home/NewItems';
import CollectionBanner from './Home/CollectionBanner';
import TopRafflers from './Home/TopRafflers';
import Partners from './Home/Partners';

import HomeBanner from './Home/HomeBanner';
import FeaturedRaffles from './Home/FeaturedRaffles';
import TrendingCollections from './Home/TrendingCollections';
import TopCollections from './Home/TopCollections';
import ExplorerCategory from './Home/ExplorerCategory';
import TrendingNfts from './Home/TrendingNfts';
import LiveAuctions from './Home/LiveAuctions';
import HomeBanner2 from './Home/HomeBanner2';

// const slider = React.useRef(null)

class Home extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<ContentWrapper>
				<div className="cs-height_90 cs-height_lg_80"></div>
				<HomeBanner />

				<div className="cs-height_70 cs-height_lg_40"></div>
				<TrendingCollections />

				<div className="cs-height_70 cs-height_lg_40"></div>
				<TopCollections />

				{/* <section>
                    <div className="cs-height_70 cs-height_lg_40"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <TrendingNfts />
                            </div>
                            <div className="col-xl-6">
                                <LiveAuctions />
                            </div>
                        </div>
                    </div>
                </section> */}

				<div className="cs-height_70 cs-height_lg_40"></div>
				<ExplorerCategory />

				<div className="cs-height_70 cs-height_lg_40"></div>
				<section>
					<div className="container">
						<div className="cs-cta cs-style1 cs-bg" style={{ backgroundImage: `url("img/general/cta_bg.jpeg")` }}>
							<div className="cs-cta_img"><img src="img/general/cta.svg" alt="Image" /></div>
							<div className="cs-cta_right">
								<h2 className="cs-cta_title cs-white_color_8">Build Your XRPL-Based Private Minting Solution</h2>
								<div className="cs-cta_subtitle cs-white_color_8">Leverage the power of XRPL for your private minting needs with our development services. Our team will work with you to create a customized, secure, and efficient platform that meets your unique requirements. Start realizing the full potential of XRPL-based private minting today.</div>
								<a href="/contact" className="cs-btn cs-style1 cs-btn_lg"><span>Contact Us</span></a>
							</div>
						</div>
					</div>
				</section>

				<div className="cs-height_100 cs-height_lg_70"></div>
			</ContentWrapper>
		);
	}
}

export default withRouter(Home);
