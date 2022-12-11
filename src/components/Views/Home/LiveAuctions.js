import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import CountLoader from '../../Common/CountLoader'
import SlickLoader from '../../Common/SlickLoader'
import AuctionCard from '../Card/AuctionCard';

const NFTS = [
    {
        id: "0",
        likes: "2.3K",
        image_url: "img/nfts/img1.png",
        name: "DB9 Droid #532",
        bid_price: "89 XRP",
        bidders: [
            { picture_url: "img/avatar/avatar_14.png" },
            { picture_url: "img/avatar/avatar_15.png" },
            { picture_url: "img/avatar/avatar_16.png" },
            { picture_url: "img/avatar/avatar_17.png" },
        ],
        bidders_count: 12,
        schedule_end_date: "24 January 2023"
    },
    {
        id: "1",
        likes: "421",
        image_url: "img/nfts/img6.png",
        name: "BearableGuy #487",
        bid_price: "589 XRP",
        bidders: [
            { picture_url: "img/avatar/avatar_14.png" },
            { picture_url: "img/avatar/avatar_15.png" },
            { picture_url: "img/avatar/avatar_16.png" },
            { picture_url: "img/avatar/avatar_17.png" },
        ],
        bidders_count: 7,
        schedule_end_date: "30 December 2022"
    },
    {
        id: "2",
        likes: "64",
        image_url: "img/nfts/img24.png",
        name: "BearableBulls #11",
        bid_price: "190 XRP",
        bidders: [
            { picture_url: "img/avatar/avatar_14.png" },
            { picture_url: "img/avatar/avatar_15.png" },
            { picture_url: "img/avatar/avatar_16.png" },
            { picture_url: "img/avatar/avatar_17.png" },
        ],
        bidders_count: 12,
        schedule_end_date: "12 January 2023"
    },
    {
        id: "3",
        likes: "2.3K",
        image_url: "img/nfts/img12.png",
        name: "PunkWorlds #1245",
        bid_price: "120 XRP",
        bidders: [
            { picture_url: "img/avatar/avatar_14.png" },
            { picture_url: "img/avatar/avatar_15.png" },
            { picture_url: "img/avatar/avatar_16.png" },
            { picture_url: "img/avatar/avatar_17.png" },
        ],
        bidders_count: 12,
        schedule_end_date: "8 January 2023"
    },
    {
        id: "4",
        likes: "2.3K",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "1230 XRP",
        bidders: [
            { picture_url: "img/avatar/avatar_14.png" },
            { picture_url: "img/avatar/avatar_15.png" },
            { picture_url: "img/avatar/avatar_16.png" },
            { picture_url: "img/avatar/avatar_17.png" },
        ],
        bidders_count: 12,
        schedule_end_date: "30 January 2023"
    }
]

class LiveAuctions extends React.Component {
    state = {
        nfts: NFTS,
    }

    componentDidMount() {
        CountLoader('.cs-countdown');
        SlickLoader('.cs-live_auction_slider');
    }

    render() {
        let { nfts } = this.state;
        return (
            <section>
                <div className="cs-section_heading cs-style2">
                    <div className="cs-section_left">
                        <h2 className="cs-section_title">Live Auctions</h2>
                    </div>
                    <div className="cs-section_right">
                        <a href="collection.html" className="cs-btn cs-style1"><span>Explore More</span></a>
                    </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
                <div className="cs-general_box_3">
                    <div className="cs-live_auction_slider cs-style1 cs-gap-30">
                        <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lg-slides="2" data-add-slides="2">
                            <div className="cs-slider_wrapper">
                                {nfts.map(n => (
                                    <div className="cs-slide" key={n.id}>
                                        <AuctionCard data={n} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="cs-height_0 cs-height_lg_15"></div>
                        <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
                            <div className="cs-left_arrow cs-center cs-box_shadow">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0269 7.55957H0.817552" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="cs-right_arrow cs-center cs-box_shadow">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.816895 7.55957H13.0262" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 1.45508L13.0265 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="cs-pagination cs-style1 cs-hidden_desktop"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(LiveAuctions);