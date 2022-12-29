import React from 'react';

const AboutTab = ({ description }) => {
    return (
        <div id="About" className="cs-tab active">
            <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                {description}
            </div>
        </div>
    );
}

export default AboutTab;
