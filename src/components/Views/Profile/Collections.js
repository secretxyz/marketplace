import React, { Component } from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';
import CollectionCard from '../Card/CollectionCard';

const COLLECTIONS = [
    {
        id: "1",
        name: "BearableGuyClub Genesis I",
        banner_picture_url: "img/collections/collection_bg9.png",
        picture_url: "img/collections/collection9.png",
        is_verified: true,
        owners: 256,
        nfts_count: 589,
        total_volume: "921.5K XRP",
        floor_price: "390 XRP"
    },
    {
        id: "2",
        name: "BearableGuyClub Loadstar II",
        banner_picture_url: "img/collections/collection_bg1.png",
        picture_url: "img/collections/collection1.png",
        is_verified: true,
        owners: 2024,
        nfts_count: "5890",
        total_volume: "859.8K XRP",
        floor_price: "360 XRP"
    }
]

class Collections extends Component {
    state = {
        collections: COLLECTIONS,
    };

    componentDidMount() {

    }

    render() {
        let { collections } = this.state;
        return (
            <ContentWrapper>
                <div className="row">
                    {collections.map(c => (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={c.id}>
                            <CollectionCard data={c} key={c.id} />
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        );
    }

}

export default Collections;
