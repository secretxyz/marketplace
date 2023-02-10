import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { htmlDecode } from '../../Helpers/Utils';

const AboutTab = ({ description }) => {
    return (
        <div id="About" className="cs-tab active">
            <MarkdownPreview className="cs-white_bg cs-box_shadow cs-general_box_5" source={htmlDecode(description)} />
        </div>
    );
}

export default AboutTab;
