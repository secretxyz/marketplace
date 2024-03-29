import React, { useEffect, useState } from 'react';
import { A_Z, Z_A, LIKES_HIGH_TO_LOW, LIKES_LOW_TO_HIGH, RAFFLES_HIGH_TO_LOW, RAFFLES_LOW_TO_HIGH } from "../../Common/constants"

const ActivityFilterBar = ({ result, callback }) => {
    const [filter, setFilter] = useState({ search: "", order: "0" });

    useEffect(() => {
        callback(filter);
    }, [filter])

    const onChangeFilter = (event) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="cs-filter_head">
            <div className="cs-filter_head_left">
                <span className="cs-search_result cs-medium cs-ternary_color">{result} Results</span>
                <div className="cs-form_field_wrap">
                    <input name="search" type="text" className="cs-form_field cs-field_sm" placeholder="Search by name" value={filter.search} onChange={onChangeFilter} />
                </div>
            </div>
            <div className="cs-filter_head_right">
                <div className="cs-form_field_wrap cs-select_arrow">
                    <select name="order" className="cs-form_field cs-field_sm" value={filter.order} onChange={onChangeFilter}>
                        {/* <option value={RAFFLES_HIGH_TO_LOW}>Raffles High to Low</option>
                            <option value={RAFFLES_LOW_TO_HIGH} >Raffles Low to High</option>
                            <option value={LIKES_HIGH_TO_LOW}>Likes High to Low</option>
                            <option value={LIKES_LOW_TO_HIGH}>Likes Low to High</option> */}
                        <option value={A_Z}>Reserved</option>
                        <option value={Z_A}>Winner</option>
                        <option value={Z_A}>Completed</option>
                        <option value={Z_A}>Cancelled</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ActivityFilterBar;