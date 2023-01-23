import React from 'react';
import { getImageLink } from "../../Helpers/Utils";

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
                                    {collection?.total_volume || 0} XRP
                                </div>
                                <div className='cs-card_media_details_item'>
                                    <div className='cs-card_media_details_item_subtitle'>Floor Price:</div>
                                    {collection?.floor_price || 0} XRP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-card_right">
                    <ul className="cs-mp0">
                        <li><i className="fas fa-list-ul fa-fw"></i> {nfts_count || 0} </li>
                        <li><i className="far fa-user fa-fw"></i> {collection?.owners || 0} </li>
                    </ul>
                </div>
            </div>
            <div className="cs-height_5 cs-height_lg_5"></div>
        </div>
    );
}

export default CollectionSimpleCard;