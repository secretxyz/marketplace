import React, { useEffect, useState } from 'react';
import { A_Z, Z_A, TICKET_PRICE_HIGH_TO_LOW, TICKET_PRICE_LOW_TO_HIGH, CREATED_SOON } from "../../Common/constants"

const RaffleFilterBar = ({ result, callback }) => {
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
                        <option value="0">Ending Soon</option>
                        <option value={CREATED_SOON}>Recently Added</option>
                        <option value={TICKET_PRICE_HIGH_TO_LOW}>Price: High to Low</option>
                        <option value={TICKET_PRICE_LOW_TO_HIGH} >Price: Low to High</option>
                        <option value={A_Z}>A-Z</option>
                        <option value={Z_A}>Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default RaffleFilterBar;