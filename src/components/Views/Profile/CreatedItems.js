import React, { useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { APP_COLORS } from "../../Common/constants"
import ContentWrapper from '../../Layout/ContentWrapper';
import NftCard from '../Card/NftCard';
import { useCreatedItems } from '../../../hooks/useProfile';

const CreatedItems = ({ accountId }) => {
    const { loading, items, fetchNext } = useCreatedItems();

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
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
            <div className="row cs-cards_area" onScroll={handleScroll}>
                {items.map(n => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                        <NftCard data={{ ...n.attributes, owner_id: accountId }} />
                        <div className="cs-height_20 cs-height_lg_20"></div>
                    </div>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center">There are no records to display</div>}
            </div>
        </ContentWrapper>
    );
}

export default CreatedItems;
