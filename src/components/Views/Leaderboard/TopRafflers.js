import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useTopRafflers } from "../../../hooks/useLeaderboard";
import { APP_COLORS } from "../../Common/constants";
import AccountCard from "../Card/AccountCard";

const TopRafflers = () => {
    const [filter, setFilter] = useState({ order: "volume" });
    const { items, loading, fetchRafflers } = useTopRafflers();

    const onChangeFilter = () => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        fetchRafflers(25, filter)
    }, [filter])

    return (
        <div>
            <div className="cs-filter_head">
                <div className="cs-filter_head_title">
                    <h3>Top Rafflers</h3>
                </div>
                <div className="cs-filter_head_right">
                    {/* <div className="cs-form_field_wrap cs-select_arrow">
                        <select name="period" className="cs-form_field cs-field_sm" value={filter?.period || "all"} onChange={onChangeFilter}>
                            <option value={"all"}>All</option>
                            <option value={"1m"}>One Month</option>
                            <option value={"1w"}>One Week</option>
                        </select>
                    </div> */}
                    <div className="cs-form_field_wrap cs-select_arrow">
                        <select name="order" className="cs-form_field cs-field_sm" value={filter?.order || "volume"} onChange={onChangeFilter}>
                            <option value={"raffles"}>Raffles Created</option>
                            <option value={"tickets"}>Tickets Sold</option>
                            <option value={"volume"}>Volumes</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="cs-height_20 cs-height_lg_15"></div>
            <ul className="cs-activity_list cs-mp0 cs-cards_area">
                {items?.map((n, idx) => {
                    return <li key={n.id} >
                        <AccountCard rank={idx} data={n} buyer={false} />
                    </li>
                })}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items?.length == 0 && <div className="cs-center_line">There are no records to display</div>}
            </ul>
        </div>
    )
}

export default TopRafflers;