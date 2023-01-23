import React from 'react';
import CollectionCard from '../Card/CollectionCard'
import { useCollections } from '../../../hooks/useCollections';
import { useEffect } from 'react';

const TrendingCollections = () => {
    const { loading, collections, fetchNext } = useCollections();

    useEffect(() => {
        fetchNext(1, 5, "trending");
    }, [])

    return (
        <section>
            <div className="container">
                <div className="cs-section_heading cs-style2">
                    <div className="cs-section_left">
                        <h2 className="cs-section_title">Trending Collections</h2>
                    </div>
                    <div className="cs-section_right">
                        <a href="/explorer-collections" className="cs-btn cs-style1"><span>Explore More</span></a>
                    </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
                <div className="cs-grid_5 cs-gap_30">
                    {collections.map(c => (
                        <CollectionCard data={c} key={c.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrendingCollections;