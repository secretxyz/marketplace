import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import $ from 'jquery';
import CollectionSimpleCard from '../Card/CollectionSimpleCard';

const COLLECTIONS = [
    {
        id: "0",
        name: "XPunks",
        picture_url: "img/collections/collection3.png",
        is_verified: true,
        owners: 1869,
        nfts_count: "10K",
        total_volume: "2.11M XRP",
        floor_price: "4192 XRP"
    },
    {
        id: "1",
        name: "The Bearable Bulls",
        picture_url: "img/collections/collection2.gif",
        is_verified: true,
        owners: 4088,
        nfts_count: "10K",
        total_volume: "1.43M XRP",
        floor_price: "197 XRP"
    },
    {
        id: "2",
        name: "Bored Apes XRP Club",
        picture_url: "img/collections/collection4.png",
        owners: 1490,
        nfts_count: 9660,
        total_volume: "1.14M XRP",
        floor_price: "648 XRP"
    },
    {
        id: "3",
        name: "XAliens",
        picture_url: "img/collections/collection5.png",
        owners: 1490,
        nfts_count: 9660,
        total_volume: "1.14M XRP",
        floor_price: "648 XRP"
    },
    {
        id: "4",
        name: "BearableGuyClub Genesis I",
        picture_url: "img/collections/collection9.png",
        is_verified: true,
        owners: 256,
        nfts_count: 589,
        total_volume: "921.5K XRP",
        floor_price: "390 XRP"
    },
    {
        id: "5",
        name: "BearableGuyClub Loadstar II",
        picture_url: "img/collections/collection1.png",
        is_verified: true,
        owners: 2024,
        nfts_count: "5890",
        total_volume: "859.8K XRP",
        floor_price: "360 XRP"
    },
    {
        id: "6",
        name: "PunkWorlds",
        picture_url: "img/collections/collection7.gif",
        is_verified: true,
        owners: 1024,
        nfts_count: "10K",
        total_volume: "19.8K XRP",
        floor_price: "97 XRP"
    },
    {
        id: "7",
        name: "X Baes",
        picture_url: "img/collections/collection8.png",
        is_verified: false,
        owners: 832,
        nfts_count: 5000,
        total_volume: "10K XRP",
        floor_price: "40 XRP"
    },
    {
        id: "8",
        name: "Rich Ducks",
        picture_url: "img/collections/collection6.png",
        is_verified: true,
        is_verified: true,
        owners: 1070,
        nfts_count: 9950,
        total_volume: "1.9K XRP",
        floor_price: "29 XRP"
    },
    {
        id: "9",
        name: "Junkies",
        picture_url: "img/collections/collection10.png",
        owners: 4421,
        nfts_count: "10K",
        total_volume: "1.5K XRP",
        floor_price: "122 XRP"
    },
]

class TopCollections extends React.Component {
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
                            <h2 className="cs-section_title">Top Collections</h2>
                        </div>
                        <div className="cs-section_right">
                            <div className="cs-toggle_box cs-section_toggle cs-spacing-right-10">
                                <div className="cs-toggle_btn">
                                    Last 24 hours <i className="cs-toggle_arrow fas fa-caret-down fa-fw"></i>
                                </div>
                                <div className="cs-toggle_body cs-box_shadow">
                                    <a href="">Last 24 hours</a>
                                    <a href="">Last 7 days</a>
                                    <a href="">Last 30 days</a>
                                    <a href="">Last 90 days</a>
                                </div>
                            </div>
                            <a href="/explorer-collections" className="cs-btn cs-style1"><span>Explore More</span></a>
                        </div>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <div className="row">
                        {collections.map(c => (
                            <div className="col-xl-6 col-lg-6 col-md-6" key={c.id}  >
                                <CollectionSimpleCard data={c} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(TopCollections);