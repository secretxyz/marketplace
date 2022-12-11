import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';

class Partners extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <section>
                <div className="container">
                    <h2 className="cs-section_heading cs-style1 text-center">The world's no.1 NFT platform for thousands of brands</h2>
                    <div className="cs-height_45 cs-height_lg_45"></div>
                </div>
                <Slider className="cs-moving_carousel_1" {...{
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 8000,
                    pauseOnHover: false,
                    cssEase: 'linear',
                    variableWidth: true,
                    arrows: false
                }}>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/1.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/2.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/3.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/4.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/5.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/6.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/7.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                </Slider>
                <div className="cs-height_30 cs-height_lg_30"></div>
                <Slider className="cs-moving_carousel_2" {...{
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 8000,
                    pauseOnHover: false,
                    cssEase: 'linear',
                    variableWidth: true,
                    arrows: false
                }}>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/5.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/9.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/10.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/11.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/12.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/13.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                    <div className="cs-single_moving_item">
                        <div className="cs-partner">
                            <div className="cs-partner_in cs-center cs-white_bg"><img src="img/partners/14.svg" alt="Partner logo" /></div>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default withTranslation('translations')(Partners);