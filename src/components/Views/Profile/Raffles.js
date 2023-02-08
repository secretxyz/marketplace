import React, { useEffect, useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { APP_COLORS } from "../../Common/constants"
import ContentWrapper from '../../Layout/ContentWrapper';
import RaffleCard from '../Card/RaffleCard';
import { useRaffleItems } from '../../../hooks/useProfile';
import RaffleFilterBar from '../FilterBar/RaffleFilterBar';
import CountLoader from '../../Common/CountLoader';

const Raffles = ({ accountId }) => {
    const { loading, items, meta, fetchNext } = useRaffleItems();
    const [filter, setFilter] = useState();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(accountId, filter);
        }
    }

    useEffect(() => {
        if (filter) {
            fetchNext(accountId, filter, 1);
        }
    }, [filter])

    useEffect(() => {
        if (items && items.length > 0) {
            CountLoader('.cs-countdown');
        }
    }, [items])

    return (
        <ContentWrapper>
            <RaffleFilterBar result={meta?.pagination?.total} callback={(filter) => { setFilter(filter) }} />
            <div className="cs-height_15 cs-height_lg_10"></div>
            <div className="row cs-cards_area" onScroll={handleScroll}>
                {items.map(n => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                        <RaffleCard data={{ id: n.id, ...n.attributes }} />
                        <div className="cs-height_20 cs-height_lg_20"></div>
                    </div>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center">There are no records to display</div>}
            </div>
        </ContentWrapper>
    );
}

export default Raffles;
