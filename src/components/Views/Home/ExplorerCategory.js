import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import SlickLoader from '../../Common/SlickLoader'

class ExplorerCategory extends React.Component {
    componentDidMount() {
        SlickLoader('.cs-category_slider');
    }

    render() {
        return (
            <section>
                <div className="container">
                    <h2 className="cs-section_heading cs-style1 text-center">Explore By Catagory</h2>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <div className="cs-category_slider cs-style1 cs-gap-30">
                        <div className="cs-slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="2" data-sm-slides="3" data-md-slides="4" data-lg-slides="5" data-add-slides="6">
                            <div className="cs-slider_wrapper">
                                <div className="cs-slide">
                                    <a href="#" className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                        <span className="cs-avatar"><img src="img/avatar/avatar_38.png" alt="Avatar" /></span>
                                        <div className="cs-card_info">
                                            <h3 className="cs-card_title">Art</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="cs-slide">
                                    <a href="#" className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                        <span className="cs-avatar"><img src="img/avatar/avatar_39.png" alt="Avatar" /></span>
                                        <div className="cs-card_info">
                                            <h3 className="cs-card_title">Music</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="cs-slide">
                                    <a href="#" className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                        <span className="cs-avatar"><img src="img/avatar/avatar_40.png" alt="Avatar" /></span>
                                        <div className="cs-card_info">
                                            <h3 className="cs-card_title">Video</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="cs-slide">
                                    <a href="#" className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                        <span className="cs-avatar"><img src="img/avatar/avatar_41.png" alt="Avatar" /></span>
                                        <div className="cs-card_info">
                                            <h3 className="cs-card_title">Fashion</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="cs-slide">
                                    <a href="#" className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                        <span className="cs-avatar"><img src="img/avatar/avatar_42.png" alt="Avatar" /></span>
                                        <div className="cs-card_info">
                                            <h3 className="cs-card_title">Sports</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="cs-slide">
                                    <a href="#" className="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                        <span className="cs-avatar"><img src="img/avatar/avatar_43.png" alt="Avatar" /></span>
                                        <div className="cs-card_info">
                                            <h3 className="cs-card_title">Collectibles</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cs-height_10 cs-height_lg_10"></div>
                        <div className="cs-pagination cs-style1"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(ExplorerCategory);