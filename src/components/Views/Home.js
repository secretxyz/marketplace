import React from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from '../Layout/ContentWrapper';

import BidBanner from './Home/BidBanner';
import NewItems from './Home/NewItems';
import CollectionBanner from './Home/CollectionBanner';
import TopSellers from './Home/TopSellers';
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
                <HomeBanner2 />

                <FeaturedRaffles />

                <div className="cs-height_70 cs-height_lg_40"></div>
                <TrendingCollections />

                <div className="cs-height_70 cs-height_lg_40"></div>
                <TopCollections />

                <div className="cs-height_70 cs-height_lg_40"></div>

                <section>
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
                </section>

                <div className="cs-height_70 cs-height_lg_40"></div>
                <ExplorerCategory />

                <div className="cs-height_70 cs-height_lg_40"></div>
                <section>
                    <div className="container">
                        <div className="cs-cta cs-style1 cs-bg" style={{ backgroundImage: `url("img/general/cta_bg.jpeg")` }}>
                            <div className="cs-cta_img"><img src="img/general/cta.svg" alt="Image" /></div>
                            <div className="cs-cta_right">
                                <h2 className="cs-cta_title cs-white_color_8">Create, Sell well & Collect your Best NFTs with us Very Fast</h2>
                                <div className="cs-cta_subtitle cs-white_color_8">What’s Different Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorsum is simply dummy text of the printing and </div>
                                <a href="connect-wallet.html" className="cs-btn cs-style1 cs-btn_lg"><span>Connect Wallet</span></a>
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
