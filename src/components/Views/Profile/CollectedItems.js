import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from '../../Layout/ContentWrapper';
import NftCard from '../Card/NftCard';
import { APP_COLORS } from "../../Common/constants"
import { useCollectedItems } from '../../../hooks/useProfile';
import NftFilterBar from '../FilterBar/NftFilterBar';

const CollectedItems = ({ accountId }) => {
    const { loading, items, meta, fetchNext } = useCollectedItems();
    const [filter, setFilter] = useState();

    const handleScroll = async (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            await fetchNext(accountId, filter);
        }
    }

    useEffect(() => {
        if (filter) {
            fetchNext(accountId, filter, 1);
        }
    }, [filter])

    return (
        <ContentWrapper>
            <NftFilterBar result={meta?.pagination?.total} callback={(filter) => { setFilter(filter) }} />
            <div className="cs-height_15 cs-height_lg_10"></div>
            <div className="row cs-cards_area" onScroll={handleScroll}>
                {items.map(n => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                        <NftCard data={{ ...n.attributes, id: n.id }} />
                        <div className="cs-height_20 cs-height_lg_20"></div>
                    </div>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center">There are no records to display</div>}
            </div>
        </ContentWrapper>
    );
}

export default CollectedItems;
