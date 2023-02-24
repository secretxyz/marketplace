import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useClaims } from "../../../hooks/useActivity";
import { APP_COLORS } from "../../Common/constants";
import ContentWrapper from '../../Layout/ContentWrapper';
import ActivityCard from "../Card/ActivityCard";

const Claims = () => {
    const { loading, items, fetchClaims } = useClaims();

    useEffect(() => {
        fetchClaims();
    }, [])

    return (
        <ContentWrapper>
            <div className="cs-height_15 cs-height_lg_10"></div>
            <ul className="cs-activity_list cs-mp0 cs-cards_area">
                {items?.map(d => (
                    <li key={d.id} >
                        <ActivityCard data={d} type="self" key={d.id} />
                    </li>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items?.length == 0 && <div className="cs-center_line">There are no records to display</div>}
            </ul>
        </ContentWrapper>
    );
}

export default Claims;
