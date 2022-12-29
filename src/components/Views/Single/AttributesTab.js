import React from 'react';

const AttributesTab = ({ attributes }) => {
    return (
        <div id="Attributes" className="cs-tab">
            <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                <div className="cs-grid_3 cs-gap_10">
                    {attributes.map((attr, idx) => (
                        <div className="cs-attr_field_wrap" id={idx}>
                            <div className="cs-form_field cs-field_sm">
                                <span className="cs-attr_trait_type">{attr.trait_type}</span>
                                <span className="cs-attr_trait_value">{attr.value}</span>
                                <span className="cs-attr_trait_percent">{attr.percentage}% has this trait</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AttributesTab;
