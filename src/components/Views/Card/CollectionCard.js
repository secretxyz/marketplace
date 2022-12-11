import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

class CollectionCard extends React.Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {

    }

    render() {
        let { data } = this.state;

        return (
            <div className="cs-card cs-style3 cs-box_shadow cs-white_bg">
                <a href="collection-details.html" className="cs-card_thumb cs-zoom_effect">
                    <img src={data.banner_picture_url} alt="Image" className="cs-zoom_item" />
                </a>
                <a href="#" className="cs-avatar">
                    <img src={data.picture_url} alt="Avatar" />
                    {
                        data.is_verified ? <span className="cs-avatar_status">
                            <i className="fa fa-check cs-check-icon"></i>
                        </span> : ``
                    }
                </a>
                <div className="cs-card_info">
                    <h3 className="cs-card_small_title"><a href="collection-details.html">{data.name}</a></h3>
                    <div className="cs-catd_meta">
                        <a href="#" className="cs-catd_meta_item">
                            <i className="fas fa-list-ul fa-fw"></i>
                            <span>{data.nfts_count} Items</span>
                        </a>
                        <a href="#" className="cs-catd_meta_item">
                            <i className="far fa-user fa-fw"></i>
                            <span>{data.owners}</span>
                        </a>
                    </div>
                    <div className="cs-card_footer">
                        <div className="cs-left">
                            <h4>Volume</h4>
                            <p>{data.total_volume}</p>
                        </div>
                        <div className="cs-left">
                            <h4>Floor Price</h4>
                            <p>{data.floor_price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(CollectionCard);