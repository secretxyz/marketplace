import React, { useEffect } from 'react';
import { useCreatedCollections } from '../../../hooks/useProfile';
import ContentWrapper from '../../Layout/ContentWrapper';
import CollectionCard from '../Card/CollectionCard';

const Collections = ({ profile }) => {
    const { loading, items, fetchNext } = useCreatedCollections();

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
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
            </div>
        </ContentWrapper>
    );
}

export default Collections;
