import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

class CollectionSimpleCard extends React.Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {

    }

    render() {
        let { data } = this.state;

        return (
            <div>
                <div className="cs-card cs-style5 cs-white_bg cs-box_shadow cs-card_simple_collection">
                    <div className="cs-card_left">
                        <div className="cs-card_media">
                            <h3 className='cs-card_number_right'>{Number(data.id) + 1}</h3>
                            <a href={`/collection/${data.slug}`}  className="cs-card_img cs-zoom_effect">
                                <img src={data.picture_url} alt="Avatar" className="cs-zoom_item"/>
                            </a>
                            <div className="cs-card_media_right">
                                <h3><a href={`/collection/${data.slug}`}>{data.name}</a></h3>
                                <div className="cs-card_media_details">
                                    <div className='cs-card_media_details_item'>
                                        <div className='cs-card_media_details_item_subtitle'>Volume:</div> {data.total_volume}
                                    </div>
                                    <div className='cs-card_media_details_item'>
                                        <div className='cs-card_media_details_item_subtitle'>Floor Price:</div> {data.floor_price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cs-card_right">
                        <ul className="cs-mp0">
                            <li><i className="fas fa-list-ul fa-fw"></i> {data.nfts_count} </li>
                            <li><i className="far fa-user fa-fw"></i> {data.owners} </li>
                        </ul>
                    </div>
                </div>
                <div className="cs-height_5 cs-height_lg_5"></div>
            </div>
        );
    }
}

export default withTranslation('translations')(CollectionSimpleCard);