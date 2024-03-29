import React, { useEffect, useState } from 'react';
import { A_Z, Z_A, LIKES_HIGH_TO_LOW, LIKES_LOW_TO_HIGH, RAFFLES_HIGH_TO_LOW, RAFFLES_LOW_TO_HIGH } from "../../Common/constants"

const NftFilterBar = ({ result, callback, collection, reset }) => {
    const [filter, setFilter] = useState();

    useEffect(() => {
        callback(filter);
    }, [filter])

    const onChangeFilter = (event) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        });
    }

    const onClickBack = () => {
        reset();
    }

    return (
        <div className="cs-filter_head">
            <div className="cs-filter_head_left">
                {collection && <button className="cs-btn cs-style1 cs-btn_sm1" onClick={onClickBack}>
                    <i className="fa fa-arrow-left"></i> {collection.name}
                </button>}
                <span className="cs-search_result cs-medium cs-ternary_color">{result} Results</span>
                <div className="cs-form_field_wrap">
                    <input name="search" type="text" className="cs-form_field cs-field_sm" placeholder="Search by name" value={filter?.search || ""} onChange={onChangeFilter} />
                </div>
            </div>
            <div className="cs-filter_head_right">
                <div className="cs-form_field_wrap cs-select_arrow">
                    <select name="order" className="cs-form_field cs-field_sm" value={filter?.order || 0} onChange={onChangeFilter}>
                        {/* <option value={RAFFLES_HIGH_TO_LOW}>Raffles High to Low</option>
                            <option value={RAFFLES_LOW_TO_HIGH} >Raffles Low to High</option>
                            <option value={LIKES_HIGH_TO_LOW}>Likes High to Low</option>
                            <option value={LIKES_LOW_TO_HIGH}>Likes Low to High</option> */}
                        <option value={0}> Sort By </option>
                        <option value={A_Z}>A-Z</option>
                        <option value={Z_A}>Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NftFilterBar;