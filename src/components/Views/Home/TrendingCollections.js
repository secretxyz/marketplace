import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import $ from 'jquery';

import CollectionCard from '../Card/CollectionCard'

const COLLECTIONS = [
    {
        id: "0",
        name: "BearableGuyClub Genesis I",
        banner_picture_url: "img/collections/collection_bg9.png",
        picture_url: "img/collections/collection9.png",
        is_verified: true,
        owners: 256,
        nfts_count: 589,
        total_volume: "1.5K XRP",
        floor_price: "390 XRP"
    },
    {
        id: "1",
        name: "PunkWorlds",
        banner_picture_url: "img/collections/collection_bg7.png",
        picture_url: "img/collections/collection7.gif",
        is_verified: false,
        owners: 1024,
        nfts_count: "10K",
        total_volume: "19.8K XRP",
        floor_price: "97 XRP"
    },
    {
        id: "2",
        name: "X Baes",
        banner_picture_url: "img/collections/collection_bg8.png",
        picture_url: "img/collections/collection8.png",
        is_verified: false,
        owners: 832,
        nfts_count: 5000,
        total_volume: "10K XRP",
        floor_price: "40 XRP"
    },
    {
        id: "3",
        name: "Rich Ducks",
        banner_picture_url: "img/collections/collection_bg6.png",
        picture_url: "img/collections/collection6.png",
        is_verified: true,
        owners: 1070,
        nfts_count: 9950,
        total_volume: "1.9K XRP",
        floor_price: "29 XRP"
    },
    {
        id: "4",
        name: "XAliens",
        banner_picture_url: "img/collections/collection_bg5.png",
        picture_url: "img/collections/collection5.png",
        is_verified: false,
        owners: 1490,
        nfts_count: 9660,
        total_volume: "1140K XRP",
        floor_price: "648 XRP"
    }
]

class TrendingCollections extends React.Component {

    state = {
        collections: COLLECTIONS,
    }

    componentDidMount() {

    }

    render() {
        let { collections } = this.state;
        return (
            <section>
                <div className="container">
                    <div className="cs-section_heading cs-style2">
                        <div className="cs-section_left">
                            <h2 className="cs-section_title">Trending Collections</h2>
                        </div>
                        <div className="cs-section_right">
                            <a href="/explorer-collections" className="cs-btn cs-style1"><span>Explore More</span></a>
                        </div>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <div className="cs-grid_5 cs-gap_30">
                        {collections.map(c => (<CollectionCard data={c} key={c.id} />))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(TrendingCollections);