import React from 'react';

const AttributesTab = ({ attributes }) => {
    return (
        <div id="Attributes" className="cs-tab">
            <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                <div className="cs-grid_3 cs-gap_10">
                    {attributes?.map((attr, idx) => {
                        if (attr.key !== "Attribute Count") {
                            return <div className="cs-attr_field_wrap" key={idx}>
                                <div className="cs-form_field cs-field_sm">
                                    <span className="cs-attr_trait_type">{attr.key}</span>
                                    <span className="cs-attr_trait_value">{attr.value}</span>
                                    {attr.rarity_percentage && <span className="cs-attr_trait_percent">{Number(attr.rarity_percentage).toFixed(2)}% has this trait</span>}
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default AttributesTab;
