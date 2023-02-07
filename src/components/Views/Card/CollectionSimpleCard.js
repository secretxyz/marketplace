import React from 'react';
import { getImageLink, getNumberFormat1 } from "../../Helpers/Utils";

const CollectionSimpleCard = ({ data, id }) => {
    const collection = data.attributes;
    const nfts_count = collection.nfts?.data?.attributes?.count;

    return (
        <div>
            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow cs-card_simple_collection">
                <div className="cs-card_left">
                    <div className="cs-card_media">
                        <h3 className='cs-card_number_right'>{Number(id) + 1}</h3>
                        <a href={`/collection/${collection?.slug}`} className="cs-card_img cs-zoom_effect">
                            <img src={getImageLink(collection?.picture_url)} alt="Avatar" className="cs-zoom_item" />
                        </a>
                        <div className="cs-card_media_right">
                            <h3><a href={`/collection/${collection?.slug}`}>{collection?.name}</a></h3>
                            <div className="cs-card_media_details">
                                <div className='cs-card_media_details_item'>
                                    <div className='cs-card_media_details_item_subtitle'>Volume:</div>
                                    {getNumberFormat1(collection?.daily_volume)} XRP
                                </div>
                                <div className='cs-card_media_details_item'>
                                    <div className='cs-card_media_details_item_subtitle'>Floor Price:</div>
                                    {getNumberFormat1(collection?.floor_price)} XRP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-card_right">
                    <ul className="cs-mp0">
                        <li><i className="fas fa-list-ul fa-fw"></i> {getNumberFormat1(nfts_count)} </li>
                        <li><i className="far fa-user fa-fw"></i> {getNumberFormat1(collection?.owners)} </li>
                    </ul>
                </div>
            </div>
            <div className="cs-height_5 cs-height_lg_5"></div>
        </div>
    );
}

export default CollectionSimpleCard;