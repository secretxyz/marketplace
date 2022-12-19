import React, { Component } from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';
import NftCard from '../Card/NftCard';

const NFTS = [
    {
        id: "0",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "1",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "2",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "3",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "4",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "5",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "6",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "7",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "8",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "9",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "10",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "11",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "12",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "13",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "14",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    },
    {
        id: "15",
        likes: "64",
        image_url: "img/nfts/img10.png",
        name: "BearableGuy #1225",
        bid_price: "390 XRP",
        owner: {
            name: "gallant j.",
            picture_url: "img/avatar/avatar_14.png"
        },
    }
];

class Created extends Component {
    state = {
        nfts: NFTS,
    };

    componentDidMount() {

    }

    render() {
        let { nfts } = this.state;
        return (
            <ContentWrapper>
                <div className="row">
                    {nfts.map(n => (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
                            <NftCard data={n} />
                            <div className="cs-height_20 cs-height_lg_20"></div>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        );
    }

}

export default Created;
