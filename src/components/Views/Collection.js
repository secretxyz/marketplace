import React, { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { useCollection } from '../../hooks/useCollection';
import { useCollectionNfts } from '../../hooks/useNft';
import PageLoader from '../Common/PageLoader';
import ContentWrapper from '../Layout/ContentWrapper';
import NftCard from './Card/NftCard';
import { APP_COLORS } from "../Common/constants"
import { getImageLink, getNumberFormat1, getSummaryAddress } from '../Helpers/Utils';

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

const Collection = (props) => {
    const { slug } = props.match.params;
    const { loading, collection } = useCollection(slug);
    const { loading: nftsLoading, nfts, meta, fetchNext } = useCollectionNfts();
    const [attributes, setAttributes] = useState(ATTRIBUTES);

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(collection.id);
        }
    }

    useEffect(() => {
        if (collection) {
            fetchNext(collection.id, 0)
        }
    }, [collection])

    return (
        loading ? <PageLoader /> : <ContentWrapper>
            <div className="cs-height_35 cs-height_lg_30"></div>
            <div className="cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                <div className="cs-height_100 cs-height_lg_70"></div>
                <div className="container">
                    <div className="cs-collection_card">
                        <div className="cs-collection_img">
                            <div className="cs-collection_info_other cs-box_shadow">
                                <div className="cs-collection_info_head">
                                    <a className="cs-style1 cs-btn">
                                        <span><i className="fas fa-redo fa-fw"></i></span>
                                    </a>
                                    <a className="cs-style1 cs-btn">
                                        <span><i className="fas fa-star fa-fw"></i></span>
                                    </a>
                                    <a className="cs-style1 cs-btn">
                                        <span><i className="fas fa-share fa-fw"></i></span>
                                    </a>
                                    <a className="cs-style1 cs-btn">
                                        <span><i className="fas fa-flag fa-fw"></i></span>
                                    </a>
                                </div>
                            </div>
                            <img src={collection?.banner_picture_url || "img/cover-photo.jpeg"} alt="Collection Details" />
                        </div>
                        <div className="cs-collection_bottom">
                            <div className="cs-collection_avatar">
                                <img src={getImageLink(collection?.picture_url)} alt="Collection" />
                            </div>
                            <div className="cs-collection_info cs-box_shadow">
                                <div className="cs-collection_info_in cs-white_bg">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="cs-collection_info_left">
                                                <h2 className="cs-collection_avatar_name">{collection?.name}</h2>
                                                <div className="cs-collection_user">
                                                    <span>created by</span> <a href={`/profile/${collection?.issuer}`}>
                                                        {collection?.creator ? `@${collection?.creator.name}` : getSummaryAddress(collection?.issuer)}
                                                    </a>
                                                </div>
                                                {collection?.website_url && <a className="cs-btn cs-style1" href={collection?.website_url} target="_blank">
                                                    <span><i className="fa fa-globe fa-fw"></i></span>
                                                </a>}
                                                {collection?.discord_url && <a className="cs-btn cs-style1" href={collection?.discord_url} target="_blank">
                                                    <span><i className="fab fa-discord fa-fw"></i></span>
                                                </a>}
                                                {collection?.twitter_url && <a className="cs-btn cs-style1" href={collection?.twitter_url} target="_blank">
                                                    <span><i className="fab fa-twitter fa-fw"></i></span>
                                                </a>}
                                                {collection?.youtube_url && <a className="cs-btn cs-style1" href={collection?.youtube_url} target="_blank">
                                                    <span><i className="fab fa-youtube fa-fw"></i></span>
                                                </a>}
                                                {collection?.instagram_url && <a className="cs-btn cs-style1" href={collection?.instagram_url} target="_blank">
                                                    <span><i className="fab fa-instagram fa-fw"></i></span>
                                                </a>}
                                                {collection?.reddit_url && <a className="cs-btn cs-style1" href={collection?.reddit_url} target="_blank">
                                                    <span><i className="fab fa-reddit fa-fw"></i></span>
                                                </a>}
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="cs-collection_right">
                                                <div className="cs-collection_list_wrap">
                                                    <ul className="cs-collection_list cs-white_bg cs-box_shadow cs-mp0">
                                                        <li>
                                                            <div className="cs-collection_list_title">Collection of</div>
                                                            <div className="cs-collection_list_number">{collection?.nfts.count}</div>
                                                        </li>
                                                        <li>
                                                            <div className="cs-collection_list_title">Owned by</div>
                                                            <div className="cs-collection_list_number">{collection.owners || 0}</div>
                                                        </li>
                                                        <li>
                                                            <div className="cs-collection_list_title">Floor Price</div>
                                                            <div className="cs-collection_list_number">{getNumberFormat1(collection.floor_price)} XRP</div>
                                                        </li>
                                                        <li>
                                                            <div className="cs-collection_list_title">Total Sales</div>
                                                            <div className="cs-collection_list_number">{getNumberFormat1(collection.total_volume)} XRP</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cs-collection_description">
                                            {collection?.bio}
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
                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">Buy Now</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">In Auction</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault1">Looking to Sell</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault2">Has Offers</label>
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
                                                                        <label className="form-check-label" htmlFor={v.value}>{v.value}</label>
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
                                <span className="cs-search_result cs-medium cs-ternary_color">{meta?.pagination?.total} Results</span>
                                <div className="cs-form_field_wrap">
                                    <input type="text" className="cs-form_field cs-field_sm cs-field_tag" placeholder="In Auction" />
                                </div>
                                <a className="cs-clear_btn">Clear All</a>
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
                        <div className="row cs-cards_area" onScroll={handleScroll}>
                            {nfts.map(n => (
                                <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                                    <NftCard data={{ ...n.attributes }} />
                                    <div className="cs-height_20 cs-height_lg_20"></div>
                                </div>
                            ))}
                        </div>
                        <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={nftsLoading} size={15} />
                        {!nftsLoading && nfts.length == 0 && <div className="cs-center">There are no records to display</div>}
                        <div className="cs-height_30 cs-height_lg_30"></div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default Collection;
