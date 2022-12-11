import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';

class TopSellers extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <section>
                <div className="container">
                    <h2 className="cs-section_heading cs-style1 text-center">Top Sellers in 1 Week</h2>
                    <div className="cs-height_45 cs-height_lg_45"></div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_30.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Gallant J.</h3>
                                            <p>11.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 340 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 4.1K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_31.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Debit alex</h3>
                                            <p>12.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 760 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 4.1K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_32.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Johnny E.</h3>
                                            <p>1.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 760 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 8.1K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_33.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Mark J.</h3>
                                            <p>12.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 123 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 19.1K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_34.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Hostetter R.</h3>
                                            <p>5.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 360 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 1.1K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_35.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>John Powell</h3>
                                            <p>13.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 820 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 2K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_36.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Austin R.</h3>
                                            <p>13.3k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 456 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 1.2K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
                                <div className="cs-card_left">
                                    <div className="cs-card_media">
                                        <div className="cs-card_img"><img src="img/avatar/avatar_37.png" alt="Avatar" /></div>
                                        <div className="cs-card_media_right">
                                            <h3>Michael L.</h3>
                                            <p>18.4k</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cs-card_right">
                                    <ul className="cs-mp0">
                                        <li><i className="fas fa-list-ul fa-fw"></i> 234 Items</li>
                                        <li><i className="far fa-eye fa-fw"></i> 7K Views</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(TopSellers);