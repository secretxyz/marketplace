import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import ContentWrapper from '../Layout/ContentWrapper';
import NftCard from './Card/NftCard';

const NFTS = [
    {
        id: "0",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "1",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "2",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "3",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "4",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
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
    },
    {
        id: "11",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "12",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "13",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "14",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "15",
        likes: "64",
        image_url: "img/nfts/img9.png",
        name: "BearableGuy #590",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    }
];

const ATTRIBUTES = [
    {
        trait_type: "Background",
        values: [
            { value: "Red", count: 3 },
            { value: "Blue", count: 5 },
            { value: "Yellow", count: 6 },
            { value: "Green", count: 2 },
        ]
    },
    {
        trait_type: "Body",
        values: [
            { value: "Alberta", count: 3 },
            { value: "Brown", count: 5 },
            { value: "Grizzly", count: 6 },
            { value: "Panda", count: 2 },
        ]
    }
]

class Collection extends Component {
    state = {
        nfts: NFTS,
        attributes: ATTRIBUTES,
    }

    componentDidMount() {

    }

    render() {
        let { nfts, attributes } = this.state;
        return (
            <ContentWrapper>
                <div className="cs-height_35 cs-height_lg_30"></div>
                <div className="cs-bg" style={{ background: `url("img/page_head_bg.svg")` }}>
                    <div className="cs-height_100 cs-height_lg_70"></div>
                    <div className="container">
                        <div className="cs-collection_card">
                            <div className="cs-collection_img">
                                <div className="cs-collection_info_other">
                                    <div className="cs-collection_info_head">
                                        <a className="cs-style1 cs-btn" href="#">
                                            <span><i className="fas fa-redo fa-fw"></i></span>
                                        </a>
                                        {/* <a className="cs-style1 cs-btn" href="#">
                                            <span><i className="fas fa-star fa-fw"></i></span>
                                        </a> */}
                                        <a className="cs-style1 cs-btn" href="#">
                                            <span><i className="fas fa-share fa-fw"></i></span>
                                        </a>
                                        <a className="cs-style1 cs-btn" href="#">
                                            <span><i className="fas fa-flag fa-fw"></i></span>
                                        </a>
                                    </div>
                                </div>
                                <img src="img/collections/collection_bg1.png" alt="Collection Details" />
                            </div>
                            <div className="cs-collection_bottom">
                                <div className="cs-collection_avatar"><img src="img/collections/collection1.png" alt="Avatar" /></div>
                                <div className="cs-collection_info">
                                    <div className="cs-collection_info_in cs-white_bg">
                                        <div className="cs-collection_info_left">
                                            <h2 className="cs-collection_avatar_name">BearableGuyClub Loadstar II</h2>
                                            <div className="cs-collection_user">@bearableguyclub <span>Created</span></div>
                                            <a className="cs-btn cs-style1" href="#"><span><i className="fa fa-globe fa-fw"></i></span></a>
                                            <a className="cs-btn cs-style1" href="#"><span><i className="fab fa-discord fa-fw"></i></span></a>
                                            <a className="cs-btn cs-style1" href="#"><span><i className="fab fa-twitter fa-fw"></i></span></a>
                                            <a className="cs-btn cs-style1" href="#"><span><i className="fab fa-youtube fa-fw"></i></span></a>
                                            <a className="cs-btn cs-style1" href="#"><span><i className="fab fa-instagram fa-fw"></i></span></a>
                                            <a className="cs-btn cs-style1" href="#"><span><i className="fab fa-reddit fa-fw"></i></span></a>
                                        </div>
                                        <div className="cs-collection_right">
                                            <div className="cs-collection_list_wrap">
                                                <ul className="cs-collection_list cs-white_bg cs-mp0">
                                                    <li>
                                                        <div className="cs-collection_list_title">Collection of</div>
                                                        <div className="cs-collection_list_number">589</div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-collection_list_title">Owned by</div>
                                                        <div className="cs-collection_list_number">312</div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-collection_list_title">Floor Price</div>
                                                        <div className="cs-collection_list_number">392 XRP</div>
                                                    </li>
                                                    <li>
                                                        <div className="cs-collection_list_title">Total Sales</div>
                                                        <div className="cs-collection_list_number">59.6K XRP</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_30 cs-height_lg_20"></div>
                <div className="container">
                    <div className="cs-sidebar_frame cs-style1">
                        <div className="cs-sidebar_frame_left">
                            <div className="cs-filter_sidebar">
                                <div className="cs-filter_widget">
                                    <h2 className="cs-filter_toggle_btn">
                                        Status
                                        <span className="cs-arrow_icon">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </h2>
                                    <div className="cs-filter_toggle_body">
                                        <ul>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
                                                    <label className="form-check-label" for="flexCheckChecked">Buy Now</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">In Auction</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                                                    <label className="form-check-label" for="flexCheckDefault1">Looking to Sell</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                                                    <label className="form-check-label" for="flexCheckDefault2">Has Offers</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cs-filter_widget">
                                    <h2 className="cs-filter_toggle_btn">
                                        Price
                                        <span className="cs-arrow_icon">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </h2>
                                    <div className="cs-filter_toggle_body">
                                        <div className="cs-price_form">
                                            <form className="row row-15">
                                                <div className="col-lg-12">
                                                    <div className="cs-form_field_wrap cs-select_arrow">
                                                        <select className="cs-form_field cs-field_sm">
                                                            <option value="XRP">XRP</option>
                                                        </select>
                                                    </div>
                                                    <div className="cs-height_15 cs-height_lg_15"></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="cs-form_field_wrap">
                                                        <input type="text" className="cs-form_field cs-field_sm" placeholder="Min" />
                                                    </div>
                                                    <div className="cs-height_15 cs-height_lg_15"></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="cs-form_field_wrap">
                                                        <input type="text" className="cs-form_field cs-field_sm" placeholder="Max" />
                                                    </div>
                                                    <div className="cs-height_10 cs-height_lg_10"></div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="reset" className="cs-btn cs-style1 cs-color1 cs-btn_sm" value="Clear" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <button className="cs-btn cs-style1 cs-btn_sm"><span>Apply</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-filter_widget">
                                    <h2 className="cs-filter_toggle_btn">
                                        Attributes
                                        <span className="cs-arrow_icon">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </h2>
                                    <div className="cs-filter_toggle_body">
                                        {
                                            attributes.map(attr => (
                                                <div className="cs-filter_widget cs-filter_subwidget" key={attr.trait_type}>
                                                    <h2 className="cs-filter_toggle_btn">
                                                        <span>{attr.trait_type}<div className="cs-filter_toggle_btn_subtitle cs-ternary_color">{attr.values.length}</div></span>
                                                        <span className="cs-arrow_icon">
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </h2>
                                                    <div className="cs-filter_toggle_body">
                                                        <ul>
                                                            {attr.values.map(v => (
                                                                <li key={v.value}>
                                                                    <div className="form-check">
                                                                        <div>
                                                                            <input className="form-check-input" type="radio" name={attr.trait_type} id={v.value} />
                                                                            <label className="form-check-label" for={v.value}>{v.value}</label>
                                                                        </div>
                                                                        <label className="form-check-label cs-ternary_color">{v.count}</label>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-sidebar_frame_right">
                            <div className="cs-filter_head">
                                <div className="cs-filter_head_left">
                                    <span className="cs-search_result cs-medium cs-ternary_color">29064886 Results</span>
                                    <div className="cs-form_field_wrap">
                                        <input type="text" className="cs-form_field cs-field_sm" placeholder="In Auction" />
                                    </div>
                                    <a href="#" className="cs-clear_btn">Clear All</a>
                                </div>
                                <div className="cs-filter_head_right">
                                    <div className="cs-form_field_wrap cs-select_arrow">
                                        <select className="cs-form_field cs-field_sm">
                                            <option value="11">Sort By</option>
                                            <option value="22">Last 7 days</option>
                                            <option value="33">Last 30 days</option>
                                            <option value="44">All time</option>
                                        </select>
                                    </div>
                                    <div className="cs-form_field_wrap cs-select_arrow">
                                        <select className="cs-form_field cs-field_sm">
                                            <option value="1">Likes</option>
                                            <option value="2">Most popular</option>
                                            <option value="3">By price</option>
                                            <option value="4">By published</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <div className="row">
                                {nfts.map(n => (
                                    <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                                        <NftCard data={n} />
                                        <div className="cs-height_20 cs-height_lg_20"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div className="text-center">
                                <a href="#" className="cs-btn cs-style1 cs-btn_lg"><span>Load More</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        );
    }

}

export default withRouter(Collection);
