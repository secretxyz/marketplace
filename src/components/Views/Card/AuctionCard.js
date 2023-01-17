import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import CountLoader from '../../Common/CountLoader'

class AuctionCard extends React.Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {
        CountLoader('.cs-countdown');
    }

    render() {
        let { data } = this.state;

        return (
            <div className="cs-card cs-style4 cs-type1 cs-box_shadow cs-white_bg">
                <span className="cs-card_like cs-primary_color">
                    <i className="fas fa-heart fa-fw"></i>
                    {data.likes}
                </span>
                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                    <img style={{ background: `url(${data.image_url})` }} alt="Image" className="cs-zoom_item" />
                </a>
                <div className="cs-countdown" data-countdate={data.schedule_end_date}>
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
                </div>
                <div className="cs-card_info">
                    <a href="#" className="cs-avatar cs-white_bg">
                        <div className="cs-avatar_images">
                            {data.bidders.map((b, k) => (
                                <img src={b.picture_url} alt="Avatar" key={k} />
                            ))}
                        </div>
                        <span>{data.bidders_count - data.bidders.length}+ <span>Place Bid</span></span>
                    </a>
                    <h3 className="cs-card_title">
                        <a href="explore-details.html">{data.name}</a>
                    </h3>
                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">{data.bid_price}</b></div>
                    <hr />
                    <div className="cs-card_footer">
                        {/* <span className="cs-card_btn_1" data-modal="#history_1">
                            <i className="fas fa-redo fa-fw"></i>
                            View History
                        </span> */}
                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(AuctionCard);