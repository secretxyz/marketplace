import React, { useEffect } from 'react';
import SlickLoader from '../../Common/SlickLoader'
import NftCard from '../Card/NftCard';
import AuctionCard from '../Card/AuctionCard';
import RaffleCard from '../Card/RaffleCard';
import { useSimilarNfts } from '../../../hooks/useNft';

const SimilarItems = ({ tokenId, collection }) => {
    const { loading, nfts } = useSimilarNfts(tokenId, collection.id);

    useEffect(() => {
        if (nfts.length > 0) {
            SlickLoader('.cs-trend_nft_slider');
        }
    }, [nfts])

    return (
        <section>
            <div className="cs-section_heading cs-style2">
                <div className="cs-section_left">
                    <h2 className="cs-section_title">Similar Items</h2>
                </div>
                <div className="cs-section_right">
                    <a href={`/collection/${collection.slug}`} className="cs-btn cs-style1"><span>Explore More</span></a>
                </div>
            </div>
            <div className="cs-height_20 cs-height_lg_20"></div>
            <div className="cs-general_box_2">
                <div className="cs-trend_nft_slider cs-style1 cs-gap-30">
                    <div className="cs-slider_container" data-autoplay="0" data-loop="0" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="4" data-lg-slides="4" data-add-slides="4">
                        <div className="cs-slider_wrapper">
                            {nfts.map(n => {
                                return <div className="cs-slide" key={n.id}>
                                    <NftCard data={{ ...n.attributes, id: n.id }} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="cs-slider_arrows cs-style1 cs-center cs-hidden_mobile">
                        <div className="cs-left_arrow cs-center cs-box_shadow">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0269 7.55957H0.817552" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="cs-right_arrow cs-center cs-box_shadow">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.816895 7.55957H13.0262" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.92188 1.45508L13.0265 7.55973L6.92188 13.6644" stroke="currentColor" strokeWidth="1.16474" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="cs-pagination cs-style1"></div>
                </div>
            </div>
            <div className="cs-height_0 cs-height_lg_40"></div>
        </section>
    );
}

export default SimilarItems;