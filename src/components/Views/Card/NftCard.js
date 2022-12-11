import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

class NftCard extends React.Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {

    }

    render() {
        let { data } = this.state;

        return (
            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                <span className="cs-card_like cs-primary_color">
                    <i className="fas fa-heart fa-fw"></i>
                    {data.likes}
                </span>
                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                    <img style={{ background: `url(${data.image_url})` }} alt="Image" className="cs-zoom_item" />
                </a>
                <div className="cs-card_info">
                    <a href="#" className="cs-avatar cs-white_bg">
                        <img src={data.owner.picture_url} alt="Avatar" />
                        <span>{data.owner.name}</span>
                    </a>
                    <h3 className="cs-card_title"><a href="#">{data.name}</a></h3>
                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">{data.bid_price}</b></div>
                    <hr />
                    <div className="cs-card_footer">
                        <span className="cs-card_btn_1" data-modal="#history_1">
                            <i className="fas fa-redo fa-fw"></i>
                            View History
                        </span>
                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(NftCard);