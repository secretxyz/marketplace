import React, { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { useRaffleTicketItems } from '../../../hooks/useProfile';
import { APP_COLORS } from "../../Common/constants"
import ContentWrapper from '../../Layout/ContentWrapper';
import RaffleTicketCard from '../Card/RaffleTicketCard';

const RaffleTickets = ({ accountId }) => {
    const { loading, items, fetchNext } = useRaffleTicketItems();

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom...");
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
            <ul className={`cs-activity_list cs-mp0 cs-cards_area ${!items.length && `cs-raffle_tickets_area`}`} onScroll={handleScroll}>
                {items.map(n => (
                    <RaffleTicketCard data={n.attributes} key={n.id} />
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center">There are no records to display</div>}
            </ul>
        </ContentWrapper>
    );
}

export default RaffleTickets;
