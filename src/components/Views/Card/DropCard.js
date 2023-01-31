import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import SecretApi from '../../../service/SecretApi';

const DropCard = ({ data }) => {

    return (
        <div className="cs-card cs-style3 cs-drop_card cs-box_shadow cs-white_bg">
            <div className="cs-card_thumb cs-zoom_effect">
                <img src={`${SecretApi.baseUrl}${data.banner_picture_url?.data?.attributes?.url}`} alt="Image" className="cs-zoom_item" />
            </div>
            <div className="cs-drop_card_info cs-box_shadow cs-white_bg">
                <div className="cs-iconbox_img">
                    <img src={`${SecretApi.baseUrl}${data.picture_url?.data?.attributes?.url}`} alt="Avatar" />
                </div>
                <h1 className='cs-drop_card_title'>
                    {data.name}
                </h1>
                <div className='cs-drop_card_subtitle'>
                    By @bearableguyclub
                </div>
                <div className="cs-card_meta_info cs-drop_card_meta_info">
                    <div className="cs-card_meta_info_items">
                        <div className="cs-card_meta_info_item">
                            <i className="fas fa-list-ul fa-fw"></i>
                            <span>{data.total_supply} Items</span>
                        </div>
                        <div className="cs-card_meta_info_item">
                            <i className="fas fa-coins fa-fw"></i>
                            <span>{data.mint_price} {data.mint_currency_unit}</span>
                        </div>
                    </div>
                    <div className="cs-section_right">
                        <a href={data.website_url} className="cs-btn cs-style1" target="_blank">
                            <span>View Drop</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropCard;