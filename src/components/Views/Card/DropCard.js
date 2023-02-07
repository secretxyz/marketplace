import React from 'react';
import SecretApi from '../../../service/SecretApi';
import { getSummaryUsername } from '../../Helpers/Utils';

const DropCard = ({ data, category }) => {
    const picture_url = data.picture_url?.data?.attributes?.url;
    const banner_picture_url = data.banner_picture_url?.data?.attributes?.url;
    const creator = data.creator?.data?.attributes;

    return (
        <div className="cs-card cs-style3 cs-drop_card cs-box_shadow cs-white_bg">
            <div className="cs-card_thumb cs-zoom_effect">
                <img src={`${SecretApi.baseUrl}${banner_picture_url}`} alt="Image" className="cs-zoom_item" />
            </div>
            <div className="cs-drop_card_info cs-box_shadow cs-white_bg">
                <div className="cs-iconbox_img">
                    <img src={`${SecretApi.baseUrl}${picture_url}`} alt="Avatar" />

                    {category == "upcoming" ? <div className="cs-countdown_style2"
                        data-countdate={data.mint_start_datetime}>
                        <div className="cs-countdown_item">
                            <div className="cs-countdown_number">
                                <div className="cs-count_days"></div>
                            </div>
                            <h3 className="cs-countdown_text">Days</h3>
                        </div>
                        <div className="cs-countdown_item">
                            <div className="cs-countdown_number">
                                <div className="cs-count_hours"></div>
                            </div>
                            <h3 className="cs-countdown_text">Hrs</h3>
                        </div>
                        <div className="cs-countdown_item">
                            <div className="cs-countdown_number">
                                <div className="cs-count_minutes"></div>
                            </div>
                            <h3 className="cs-countdown_text">Min</h3>
                        </div>
                        <div className="cs-countdown_item">
                            <div className="cs-countdown_number">
                                <div className="cs-count_seconds"></div>
                            </div>
                            <h3 className="cs-countdown_text">Sec</h3>
                        </div>
                    </div> : <div></div>}
                </div>
                <h1 className='cs-drop_card_title'>
                    {data.name}
                </h1>
                {creator && <div className='cs-drop_card_subtitle'>
                    By {getSummaryUsername(creator)}
                </div>}
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
                    {category != "upcoming" && <div className="cs-section_right">
                        <a href={data.website_url} className="cs-btn cs-style1" target="_blank">
                            <span>View Drop</span>
                        </a>
                    </div>}
                </div>
            </div>
        </div >
    );
}

export default DropCard;