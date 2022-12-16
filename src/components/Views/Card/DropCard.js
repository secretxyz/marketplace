import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

class DropCard extends React.Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {

    }

    render() {
        let { data } = this.state;

        return (
            <div className="cs-card cs-style3 cs-drop_card cs-box_shadow cs-white_bg">
                <div className="cs-card_thumb cs-zoom_effect">
                    <img src={data.banner_picture_url} alt="Image" className="cs-zoom_item" />
                </div>
                <div className="cs-drop_card_info cs-box_shadow cs-white_bg">
                    <div className="cs-iconbox_img">
                        <img src={data.picture_url} alt="Avatar" />
                    </div>
                    <h1 className='cs-drop_card_title'>
                        {data.name}
                    </h1>
                    <div className='cs-drop_card_subtitle'>
                        By @bearableguyclub
                    </div>
                    <div className="cs-card_meta_info">
                        <div className="cs-card_meta_info_items">
                            <div className="cs-card_meta_info_item">
                                <i className="fas fa-list-ul fa-fw"></i>
                                <span>{data.nfts_count} Items</span>
                            </div>
                            <div className="cs-card_meta_info_item">
                                <i className="fas fa-coins fa-fw"></i>
                                <span>{data.floor_price}</span>
                            </div>
                        </div>
                        <div className="cs-section_right">
                            <a href="collection.html" className="cs-btn cs-style1"><span>View Drop</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(DropCard);