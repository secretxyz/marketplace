import React, { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { useRaffleTicketItems } from '../../../hooks/useProfile';
import { APP_COLORS } from "../../Common/constants"
import ContentWrapper from '../../Layout/ContentWrapper';
import RaffleTicketCard from '../Card/RaffleTicketCard';

const RaffleTickets = ({ accountId }) => {
    const { loading, items, fetchNext } = useRaffleTicketItems();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(accountId);
        }
    }

    useEffect(() => {
        if (accountId) {
            fetchNext(accountId, 0);
        }
    }, [accountId])

    return (
        <ContentWrapper>
            <div className="cs-height_15 cs-height_lg_10"></div>
            <ul className="cs-activity_list cs-mp0 cs-cards_area" onScroll={handleScroll}>
                {items.map(n => (
                    <RaffleTicketCard data={n.attributes} key={n.id} />
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center_line">There are no records to display</div>}
            </ul>
        </ContentWrapper>
    );
}

export default RaffleTickets;
