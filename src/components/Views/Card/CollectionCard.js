import React from 'react';
import { getImageLink } from "../../Helpers/Utils";

const CollectionCard = ({ data }) => {
    const collection = data.attributes;
    const nfts_count = collection.nfts?.data?.attributes?.count;

    return (
        <div className="cs-card cs-style3 cs-box_shadow cs-white_bg cs-collection_card">
            <a href={`/collection/${collection?.slug}`} className="cs-card_thumb cs-zoom_effect">
                <img src={getImageLink(collection?.banner_picture_url)} alt="Image" className="cs-zoom_item cs-height_100 cs-height_lg_100" />
            </a>
            <a href={`/collection/${collection?.slug}`} className="cs-avatar">
                <img src={getImageLink(collection?.picture_url)} alt="Avatar" />
                {
                    collection.verified && <span className="cs-avatar_status">
                        <i className="fa fa-check cs-check-icon"></i>
                    </span>
                }
            </a>
            <div className="cs-card_info">
                <h3 className="cs-card_small_title"><a href={`/collection/${collection?.slug}`}>{collection?.name}</a></h3>
                <div className="cs-card_meta_info">
                    <div className="cs-card_meta_info_item">
                        <i className="fas fa-list-ul fa-fw"></i>
                        <span>{nfts_count || 0} Items</span>
                    </div>
                    <div className="cs-card_meta_info_item">
                        <i className="far fa-user fa-fw"></i>
                        <span>{collection.owners || 0}</span>
                    </div>
                </div>
                <div className="cs-card_footer">
                    <div className="cs-left">
                        <h4>Volume</h4>
                        <p>{collection.total_volume || 0} XRP</p>
                    </div>
                    <div className="cs-left">
                        <h4>Floor Price</h4>
                        <p>{collection.floor_price || 0} XRP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;