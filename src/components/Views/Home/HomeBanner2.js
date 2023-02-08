import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import SlickLoader from '../../Common/SlickLoader'
import RaffleCard from '../Card/RaffleCard';
import { useFeaturedRaffle } from '../../../hooks/useFeaturedRaffle';
import { isLoggedIn } from '../../Helpers/Utils';
import accountStore from '../../../store/account.store';

const HomeBanner2 = () => {
    const { auth_token } = accountStore;
    const { loading, items } = useFeaturedRaffle(0);

    useEffect(() => {
        if (items?.length > 0) {
            SlickLoader('.cs-raffle_banner_slider');
        }
    }, [items])

    return (
        <section className="cs-hero cs-style4 cs-bg cs-center" style={{ backgroundImage: `url("img/hero_bg3.jpeg")` }}>
            <div className="container-fluid">
                <div className="cs-hero_in">
                    <div className="cs-hero_in_left">
                        <div className="cs-hero_text">
                            <h1 className="cs-hero_title cs-white_color">Welcome to the XRP Ledger's biggest secret.</h1>
                            <div className="cs-hero_subtitle cs-medium cs-white_color">
                                Quickly trade NFTs on multiple marketplaces and enter or create raffles for unique digital assets.
                                Join the exciting world of NFT trading and raffles on SecretMarket now!
                            </div>
                            <div className="cs-hero_btns">
                                <a href="/explorer-raffles" className="cs-hero_btn cs-style1 cs-color2"><span>Explore</span></a>
                                {auth_token && <a href="/my-profile/collected" className="cs-hero_btn cs-style1 cs-color1"><span>Let's Start</span></a>}
                            </div>
                        </div>
                    </div>
                    <div className="cs-hero_in_right">
                        <div className="cs-raffle_banner_slider cs-style1 cs-gap-20">
                            <div className="cs-slider_container" data-autoplay="1" data-loop="1" data-speed="600" data-center="1" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="3" data-lg-slides="3" data-add-slides="3">
                                <div className="cs-slider_wrapper" >
                                    {items?.map(n => (
                                        <div className="cs-slide" key={n.id}>
                                            <RaffleCard data={{ id: n.id, ...n.attributes }} hiddenStatus={true} />
                                        </div>
                                    ))}
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
                            <div className="cs-pagination cs-style1" hidden></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default observer(HomeBanner2);