import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import SlickLoader from '../../Common/SlickLoader'
import RaffleCard from '../Card/RaffleCard';

const NFTS = [
    {
        id: "0",
        likes: "64",
        image_url: "img/nfts/img18.png",
        name: "Baby Ape #532",
        bid_price: "120 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "1",
        likes: "1.8K",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #4623",
        bid_price: "360 XRP",
        owner: {
            name: "nftcollector",
            picture_url: "img/avatar/avatar_12.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "2",
        likes: "12",
        image_url: "img/nfts/img26.png",
        name: "Rich Duck #3132",
        bid_price: "50 XRP",
        owner: {
            name: "justin",
            picture_url: "img/avatar/avatar_11.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "3",
        likes: "343",
        image_url: "img/nfts/img20.png",
        name: "XBae #32",
        bid_price: "95 XRP",
        owner: {
            name: "xrp army",
            picture_url: "img/avatar/avatar_15.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "4",
        likes: "1.3K",
        image_url: "img/nfts/img15.png",
        name: "PunkWorlds #532",
        bid_price: "260 XRP",
        owner: {
            name: "joelkatz",
            picture_url: "img/avatar/avatar_18.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "5",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "6",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "7",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "8",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "9",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    },
    {
        id: "10",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
        schedule_end_date: "8 January 2023"
    }
]


class FeaturedRaffles extends React.Component {
    state = {
        nfts: NFTS,
    }

    componentDidMount() {
        SlickLoader('.cs-raffle_nft_slider');
    }

    render() {
        let { nfts } = this.state;
        return (
            <section>
                <div className="container">
                    <div className="cs-section_heading cs-style2">
                        <div className="cs-section_left">
                            <h2 className="cs-section_title">Featured Raffles</h2>
                        </div>
                        <div className="cs-section_right">
                            <a href="/explorer-nfts" className="cs-btn cs-style1"><span>Explore More</span></a>
                        </div>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <div className="cs-general_box_2">
                        <div className="cs-raffle_nft_slider cs-style1 cs-gap-20">
                            <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="3" data-md-slides="4" data-lg-slides="5" data-add-slides="5">
                                <div className="cs-slider_wrapper">
                                    {nfts.map(n => (
                                        <div className="cs-slide" key={n.id}>
                                            <RaffleCard data={n} />
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                            <div className="cs-pagination cs-style1"></div>
                        </div>
                    </div>
                    <div className="cs-height_0 cs-height_lg_40"></div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(FeaturedRaffles);