import React, { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { useCreatedCollections } from '../../../hooks/useProfile';
import { APP_COLORS } from '../../Common/constants';
import ContentWrapper from '../../Layout/ContentWrapper';
import CollectionCard from '../Card/CollectionCard';

const Collections = ({ profile }) => {
    const { loading, items, fetchNext } = useCreatedCollections();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(profile.wallet);
        }
    }

    useEffect(() => {
        if (profile) {
            fetchNext(profile.wallet, 0);
        }
    }, [profile])

    return (
        <ContentWrapper>
            <div className="row cs-cards_area" onScroll={handleScroll}>
                {items.map(c => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={c.id}>
                        <CollectionCard data={c} key={c.id} />
                    </div>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center_line">There are no records to display</div>}
            </div>
        </ContentWrapper>
    );
}

export default Collections;
