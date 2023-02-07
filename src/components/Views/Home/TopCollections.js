import React, { useEffect } from 'react';
import { useCollections } from '../../../hooks/useCollection';
import CollectionSimpleCard from '../Card/CollectionSimpleCard';

const TopCollections = () => {
    const { loading, collections, fetchNext } = useCollections();

    useEffect(() => {
        fetchNext(1, 10, "top");
    }, [])

    return (
        <section>
            <div className="container">
                <div className="cs-section_heading cs-style2">
                    <div className="cs-section_left">
                        <h2 className="cs-section_title">Top Collections</h2>
                    </div>
                    <div className="cs-section_right">
                        <div className="cs-toggle_box cs-section_toggle cs-spacing-right-10">
                            <div className="cs-toggle_btn">
                                Last 24 hours <i className="cs-toggle_arrow fas fa-caret-down fa-fw"></i>
                            </div>
                            <div className="cs-toggle_body cs-box_shadow">
                                <a href="">Last 24 hours</a>
                                <a href="">Last 7 days</a>
                                <a href="">Last 30 days</a>
                                <a href="">All Time</a>
                            </div>
                        </div>
                        <a href="/explorer-collections" className="cs-btn cs-style1"><span>Explore More</span></a>
                    </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
                <div className="row">
                    {collections.map((c, id) => (
                        <div className="col-xl-6 col-lg-6 col-md-6" key={id}  >
                            <CollectionSimpleCard data={c} id={id} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopCollections;