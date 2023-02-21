import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from '../../Layout/ContentWrapper';
import NftCard from '../Card/NftCard';
import CollectionCard1 from '../Card/CollectionCard1';
import { APP_COLORS } from "../../Common/constants"
import { useCollectedItems } from '../../../hooks/useProfile';
import NftFilterBar from '../FilterBar/NftFilterBar';

const CollectedItems = ({ accountId }) => {
    const { loading, items, collections, meta, fetchNext, fetchCollections } = useCollectedItems();
    const [filter, setFilter] = useState();
    const [selectedCollection, setSelectedCollection] = useState();

    const handleScroll = async (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            await fetchNext(accountId, filter);
        }
    }

    useEffect(() => {
        if (accountId) {
            fetchCollections(accountId);
        }
    }, [accountId])

    useEffect(() => {
        console.log(filter);
        if (filter) {
            fetchNext(accountId, filter, 1);
        }
    }, [filter])

    useEffect(() => {
        if (selectedCollection) {
            setFilter({
                order: 0,
                search: "",
                collectionId: selectedCollection.id
            })
        }
    }, [selectedCollection])

    const onSelectCollectionCard = (collection) => {
        setSelectedCollection(collection);
    }

    return (
        <ContentWrapper>
            {!selectedCollection ? <div className="row cs-cards_area">
                {collections.map(c => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={c.id}>
                        <CollectionCard1 data={c} key={c.id} selected={onSelectCollectionCard} />
                        <div className="cs-height_20 cs-height_lg_20"></div>
                    </div>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && collections.length == 0 && <div className="cs-center_line">There are no records to display</div>}
            </div> : <>
                <NftFilterBar result={meta?.pagination?.total}
                    callback={(f) => { setFilter({ ...filter, ...f }) }}
                    collection={selectedCollection}
                    reset={() => { setSelectedCollection(null) }} />
                <div className="cs-height_15 cs-height_lg_10"></div>
                <div className="row cs-cards_area" onScroll={handleScroll}>
                    {items.map(n => {
                        let offers = n.attributes.offers.data;
                        if (offers.length > 0) {
                            n.attributes.activity = offers[0].attributes.activity;
                            n.attributes.price = offers[0].attributes.price;
                        }
                        return <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                            <NftCard data={{ ...n.attributes, id: n.id }} />
                            <div className="cs-height_20 cs-height_lg_20"></div>
                        </div>
                    })}
                    <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                    {!loading && items.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                </div>
            </>}
        </ContentWrapper>
    );
}

export default CollectedItems;
