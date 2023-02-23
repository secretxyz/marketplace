import React from 'react';
import { getImageLink, getNumberFormat1 } from "../../Helpers/Utils";

const CollectionCard1 = ({ data, selected }) => {
    const collection = data;

    const onClickCard = () => {
        selected(collection);
    }

    return (
        <div className="cs-card cs-style3 cs-box_shadow cs-white_bg cs-collection_card">
            <a className="cs-card_thumb cs-zoom_effect" onClick={onClickCard}>
                <img src={getImageLink(collection?.banner_picture_url) || "img/cover-photo.jpeg"} alt="Image" className="cs-zoom_item cs-height_100 cs-height_lg_100" />
            </a>
            <a className="cs-avatar" onClick={onClickCard}>
                <img src={getImageLink(collection?.picture_url)} alt="Avatar" />
                {
                    collection.verified && <span className="cs-avatar_status">
                        <i className="fa fa-check cs-check-icon"></i>
                    </span>
                }
            </a>
            <div className="cs-card_info">
                <h3 className="cs-card_small_title1">
                    <a onClick={onClickCard}>{collection?.name}</a>
                </h3>
                <hr />
                <div className="cs-card_meta_info">
                    <div className="cs-card_meta_info_item">
                        <i className="fas fa-list-ul fa-fw"></i>
                        <span>{getNumberFormat1(data.count)} Items</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard1;