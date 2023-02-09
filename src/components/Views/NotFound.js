import React from "react";
import ContentWrapper from '../Layout/ContentWrapper';

const NotFound = () => {

    return (
        <ContentWrapper>
            <div className="cs-bg" style={{ background: `url("img/page_head_bg.svg")` }}>
                <div className="cs-height_lg_25"></div>
                <div className="cs-height_140 cs-height_lg_210"></div>
                <div className="container">
                    <div className="cs-error_card text-center">
                        <div className="cs-error_img"><img src="img/404.svg" alt="404" /></div>
                        <div className="cs-height_70 cs-height_lg_40"></div>
                        <a href="/" className="cs-btn cs-style1 cs-btn_lg"><span>Back To Home</span></a>
                    </div>
                </div>
                <div className="cs-height_100 cs-height_lg_210"></div>
                <div className="cs-height_lg_25"></div>
            </div>
        </ContentWrapper>
    );
}

export default NotFound;
