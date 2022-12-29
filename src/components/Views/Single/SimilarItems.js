import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import SlickLoader from '../../Common/SlickLoader'
import NftCard from '../Card/NftCard';

const NFTS = [
    {
        id: "0",
        likes: "1.8K",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #4623",
        bid_price: "360 XRP",
        owner: { 
            name: "nftcollector",
            picture_url: "img/avatar/avatar_12.png" 
        },
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
    },
    {
        id: "2",
        likes: "1.8K",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #4623",
        bid_price: "360 XRP",
        owner: { 
            name: "nftcollector",
            picture_url: "img/avatar/avatar_12.png" 
        },
    },
    {
        id: "3",
        likes: "1.8K",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #4623",
        bid_price: "360 XRP",
        owner: { 
            name: "nftcollector",
            picture_url: "img/avatar/avatar_12.png" 
        },
    },
    {
        id: "4",
        likes: "1.8K",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #4623",
        bid_price: "360 XRP",
        owner: { 
            name: "nftcollector",
            picture_url: "img/avatar/avatar_12.png" 
        },
    },
    {
        id: "5",
        likes: "1.8K",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #4623",
        bid_price: "360 XRP",
        owner: { 
            name: "nftcollector",
            picture_url: "img/avatar/avatar_12.png" 
        },
    },
]

class SimilarItems extends React.Component {
    state = {
        nfts: NFTS,
    }

    componentDidMount() {
        SlickLoader('.cs-trend_nft_slider');
    }

    render() {
        let { nfts } = this.state;
        return (
            <section>
                <div className="cs-section_heading cs-style2">
                    <div className="cs-section_left">
                        <h2 className="cs-section_title">Similar Items</h2>
                    </div>
                    <div className="cs-section_right">
                        <a href="/explorer-nfts" className="cs-btn cs-style1"><span>Explore More</span></a>
                    </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
                <div className="cs-general_box_2">
                    <div className="cs-trend_nft_slider cs-style1 cs-gap-30">
                        <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="4" data-lg-slides="5" data-add-slides="5">
                            <div className="cs-slider_wrapper">
                                {nfts.map(n => (
                                    <div className="cs-slide" key={n.id}>
                                        <NftCard data={n} />
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
            </section>
        );
    }
}

export default withTranslation('translations')(SimilarItems);