import React, { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import BeatLoader from "react-spinners/BeatLoader";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useAttributes, useCollection } from '../../hooks/useCollection';
import { useCollectionNfts } from '../../hooks/useNft';
import PageLoader from '../Common/PageLoader';
import ContentWrapper from '../Layout/ContentWrapper';
import RaffleCard from './Card/RaffleCard';
import NftCard from './Card/NftCard';
import { APP_COLORS, A_Z, ENDING_SOON, LIKES, PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH, Z_A } from "../Common/constants"
import { getAccount, getNumberFormat1, getImageLink, getSummaryAddress, htmlDecode, notify } from '../Helpers/Utils';
import ReportModal from '../Common/ReportModal';
import { getLikedItems, likeItem } from '../Helpers/Likes';
import { getReportedItems } from '../Helpers/Reports';
import CollectionModal from '../Common/CollectionModal';

const Collection = (props) => {
    const { slug } = props.match.params;
    const { loading, collection, fetchCollection, reload, refresh, like } = useCollection();
    const { loading: nftsLoading, nfts, meta, fetchNext } = useCollectionNfts();
    const { loading: attrsLoading, attributes, fetchAttributes } = useAttributes();
    const [liked, setLiked] = useState(false);
    const [reported, setReported] = useState(false);
    const [reporting, setReporting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [prices, setPrices] = useState();
    const [filter, setFilter] = useState();
    const [attrs, setAttrs] = useState();
    const [warning, setWarning] = useState();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(collection.id, filter, 0);
        }
    }

    const isLikeCollection = (collectionId) => {
        let collections = getLikedItems("collection");
        if (collections.includes(collectionId)) {
            return true;
        }
        return false;
    }

    const isReportCollection = (collectionId) => {
        let collections = getReportedItems("collection");
        if (collections.includes(collectionId)) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (slug) {
            fetchCollection(slug);
        }
    }, [])

    useEffect(() => {
        if (collection) {
            fetchNext(collection.id, filter, 1);
            fetchAttributes(collection.id);
            if (isLikeCollection(collection.id)) {
                setLiked(true);
            }
            if (isReportCollection(collection.id)) {
                setReported(true);
            }
        } else if (collection === null) {
            window.location.replace("/not-found");
        }
    }, [collection])

    useEffect(() => {
        if (attributes) {
            $('.cs-filter_toggle_btn').on('click', function () {
                $(this).toggleClass('active').siblings('.cs-filter_toggle_body').slideToggle();
            })
        }
    }, [attributes])

    const isCreator = () => {
        return collection?.issuer == getAccount()?.wallet;
    }

    const onClickRefresh = async () => {
        const res = refresh(collection.id);
        if (res) {
            // reload(slug);
            notify("Collection synchronization will take a little while. Please confirm in an hour.");
        }
    }

    const onClickShare = async () => {
        navigator.clipboard.writeText(`https://secretmarket.xyz/collection/${collection.slug}`);
        notify("The collection link has been copied.");
    }

    const onClickLike = async () => {
        const res = await like(collection.id);
        if (res) {
            likeItem("collection", collection.id, res.result);
            if (res.result == 1) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        }
    }

    useEffect(() => {
        if (editing) {
            $("#collection_modal").toggleClass("active");
        }
    }, [editing])

    const onClickEdit = async () => {
        setEditing(true);
    }

    useEffect(() => {
        if (reporting) {
            $("#report_modal").toggleClass("active");
        }
    }, [reporting])

    const onClickReport = async () => {
        if (reported) {
            return;
        }
        setReporting(true);
    }

    const onClickClear = () => {
        setWarning(null);
        setPrices({
            min_price: null,
            max_price: null
        })

        setFilter({
            ...filter,
            min_price: null,
            max_price: null,
        })
    }

    const onClickApply = () => {
        if (!prices?.min_price) {
            setWarning("Invalid min price!")
            return;
        }
        if (!prices?.max_price) {
            setWarning("Invalid max price!")
            return;
        }
        if (Number(prices.max_price) < Number(prices.min_price)) {
            setWarning("Max must be greater than min!")
            return;
        }
        setWarning(null);
        setFilter({
            ...filter,
            min_price: prices.min_price,
            max_price: prices.max_price,
        })
    }

    useEffect(() => {
        if (filter) {
            // console.log(filter);
            fetchNext(collection.id, filter, 1);
        }
    }, [filter])

    const onChangePrice = (event) => {
        let key = event.target.name;
        let value = event.target.value;

        if ((key == "min_price" || key == "max_price") && Number(value) < 0) {
            value = 0;
        }

        setPrices({
            ...prices,
            [key]: value
        })
    }

    const onChangeFilter = (event) => {
        let key = event.target.name;
        let value;
        switch (key) {
            case "buy_now":
            case "has_offers":
                value = event.target.checked;
                break;
            default:
                value = event.target.value;
                break;
        }

        // if (key == "order") {
        //     value = Number(value);
        //     // console.log(key, value);
        // }

        setFilter({
            ...filter,
            [key]: value
        })
    }

    const onChangeAttributes = (event, trait_type) => {
        let key = event.target.name;
        let value = event.target.checked;
        setAttrs({
            ...attrs,
            [key]: value
        })

        let traits = filter?.traits || [];
        let trait_values = filter?.trait_values || [];
        let trait_value_array;

        let trait_index = traits.indexOf(trait_type);
        if (trait_index >= 0) {
            trait_value_array = trait_values[trait_index];
            if (value) {
                trait_value_array.push(key);
            } else {
                let idx = trait_value_array.indexOf(key);
                trait_value_array.splice(idx, 1);
            }
        } else {
            traits.push(trait_type);
            if (value) {
                trait_values.push([key]);
            }
        }

        setFilter({
            ...filter,
            traits,
            trait_values,
        })
    }

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
                                    {isCreator() && <a id="collection_edit" className="cs-style1 cs-btn" onClick={onClickEdit}>
                                        <span><i className="fas fa-pen fa-fw"></i></span>
                                    </a>}
                                    <ReactTooltip anchorId="collection_edit" className="cs-modal_tooltip" place="bottom" content="Edit collection" />
                                    <a id="collection_refresh" className="cs-style1 cs-btn" onClick={onClickRefresh}>
                                        <span><i className="fas fa-redo fa-fw"></i></span>
                                    </a>
                                    <ReactTooltip anchorId="collection_refresh" className="cs-modal_tooltip" place="bottom" content="Refresh collection" />
                                    {!isCreator() && <a id="collection_like" className="cs-style1 cs-btn" onClick={onClickLike}>
                                        <span><i className={`${liked ? "fas" : "far"} fa-star fa-fw`}></i></span>
                                    </a>}
                                    <ReactTooltip anchorId="collection_like" className="cs-modal_tooltip" place="bottom" content={liked ? "Unlike collection" : "Like collection"} />
                                    <a id="collection_share" className="cs-style1 cs-btn" onClick={onClickShare}>
                                        <span><i className="fas fa-share-alt fa-fw"></i></span>
                                    </a>
                                    <ReactTooltip anchorId="collection_share" className="cs-modal_tooltip" place="bottom" content="Copy collection link" />
                                    {!isCreator() && <a id="collection_report" className="cs-style1 cs-btn" onClick={onClickReport}>
                                        <span><i className={`${reported ? "fas" : "far"} fa-flag fa-fw`}></i></span>
                                    </a>}
                                    <ReactTooltip anchorId="collection_report" className="cs-modal_tooltip" place="bottom" content={reported ? "You have already reported this collection" : "Report illegal material"} />
                                </div>
                            </div>
                            <img src={getImageLink(collection?.banner_picture_url) || "img/cover-photo.jpeg"} alt="Collection Details" />
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
                                                            <div className="cs-collection_list_number">{collection?.owners || 0}</div>
                                                        </li>
                                                        <li>
                                                            <div className="cs-collection_list_title">Floor Price</div>
                                                            <div className="cs-collection_list_number">{getNumberFormat1(collection?.floor_price)} XRP</div>
                                                        </li>
                                                        <li>
                                                            <div className="cs-collection_list_title">Total Sales</div>
                                                            <div className="cs-collection_list_number">{collection?.total_sales || 0}</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <MarkdownPreview className="cs-collection_description" source={htmlDecode(collection?.bio)} />

                                        {/* <div className="cs-collection_description">
                                            {collection?.bio}
                                        </div> */}
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
                                        {/* <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="in_raffle" name="in_raffle" checked={filter?.in_raffle || false} onChange={onChangeFilter} />
                                                <label className="form-check-label" htmlFor="in_raffle">In Raffle</label>
                                            </div>
                                        </li> */}
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="buy_now" name="buy_now" checked={filter?.buy_now || false} onChange={onChangeFilter} />
                                                <label className="form-check-label" htmlFor="buy_now">Buy Now</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="has_offers" name="has_offers" checked={filter?.has_offers || false} onChange={onChangeFilter} />
                                                <label className="form-check-label" htmlFor="has_offers">Has Offers</label>
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
                                        <div className="row row-15">
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
                                                    <input type="number" className="cs-form_field cs-field_sm" name="min_price" placeholder="Min" value={prices?.min_price || ""} min={0} onChange={onChangePrice} />
                                                </div>
                                                <div className="cs-height_15 cs-height_lg_15"></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="cs-form_field_wrap">
                                                    <input type="number" className="cs-form_field cs-field_sm" name="max_price" placeholder="Max" value={prices?.max_price || ""} min={0} onChange={onChangePrice} />
                                                </div>
                                                <div className="cs-height_10 cs-height_lg_10"></div>
                                            </div>
                                            {warning && <label className="form-check-label text-warning cs-center">{warning}</label>}
                                            <div className="col-lg-6">
                                                <button className="cs-btn cs-style1 cs-color1 cs-btn_sm" onClick={onClickClear}>Clear</button>
                                                <div className="cs-height_10 cs-height_lg_10"></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <button className="cs-btn cs-style1 cs-btn_sm" onClick={onClickApply}><span>Apply</span></button>
                                                <div className="cs-height_10 cs-height_lg_10"></div>
                                            </div>
                                        </div>
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
                                        attributes?.map(attr => (
                                            <div className="cs-filter_widget cs-filter_subwidget" key={attr.trait_type}>
                                                <h2 className="cs-filter_toggle_btn">
                                                    <span>{attr.trait_type}<div className="cs-filter_toggle_btn_subtitle cs-ternary_color">{attr.values.length}</div></span>
                                                    <span className="cs-arrow_icon">
                                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </h2>
                                                <div className="cs-filter_toggle_body" style={{ display: "none" }}>
                                                    <ul>
                                                        {attr.values.map((v, id) => (
                                                            <li key={id}>
                                                                <div className="form-check">
                                                                    <div>
                                                                        <input className="form-check-input" type="checkbox" name={v.value} id={v.value} value={attrs && attrs[v.value] || false} onChange={(e) => onChangeAttributes(e, attr.trait_type)} />
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
                                <span className="cs-search_result cs-medium cs-ternary_color">Search</span>
                                <div className="cs-form_field_wrap">
                                    <input name="search" type="text" className="cs-form_field cs-field_sm" placeholder="Search by name" value={filter?.search || ""} onChange={onChangeFilter} />
                                </div>
                                {/* <a className="cs-clear_btn">Clear All</a> */}
                            </div>
                            <div className="cs-filter_head_right">
                                {/* <div className="cs-form_field_wrap cs-select_arrow">
                                    <select className="cs-form_field cs-field_sm">
                                        <option value="11">Sort By</option>
                                        <option value="22">Last 7 days</option>
                                        <option value="33">Last 30 days</option>
                                        <option value="44">All time</option>
                                    </select>
                                </div> */}
                                <div className="cs-form_field_wrap cs-select_arrow">
                                    <select name="order" className="cs-form_field cs-field_sm" value={filter?.order} onChange={onChangeFilter}>
                                        <option value={PRICE_LOW_TO_HIGH}>Price low to high</option>
                                        <option value={PRICE_HIGH_TO_LOW}>Price hight to low</option>
                                        <option value={LIKES}>Likes</option>
                                        {/* <option value={ENDING_SOON}>Ending soon</option> */}
                                        <option value={A_Z}>A-Z</option>
                                        <option value={Z_A}>Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="cs-height_30 cs-height_lg_30"></div>
                        <div className="row cs-cards_area" onScroll={handleScroll}>
                            {nfts.map(n => (
                                <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                                    <NftCard data={{
                                        ...n,
                                        owner: { data: { id: n.owner.id, attributes: n.owner } }
                                    }} />
                                    <div className="cs-height_20 cs-height_lg_20"></div>
                                </div>
                            ))}
                            <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={nftsLoading} size={15} />
                            {!nftsLoading && nfts.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                        </div>
                        <div className="cs-height_20 cs-height_lg_20"></div>
                    </div>
                </div>
            </div>
            {reporting && <ReportModal data={{ collection: collection.id }}
                closeModal={(res) => { setReporting(false); setReported(res); }} />}
            {editing && <CollectionModal data={collection}
                refreshDetails={() => { reload(slug); }}
                closeModal={() => { setEditing(false); }} />}
        </ContentWrapper>
    );
}

export default Collection;
