import React from 'react';
import Avatar from "../Profile/Avatar";
import { useTopRafflers } from '../../../hooks/useHomepage';
import { getNumberFormat1, getSummaryAddress } from '../../Helpers/Utils';

const RafflerCard = ({ data }) => {
    return (
        <div className="cs-card cs-style5 cs-white_bg cs-box_shadow">
            <div className="w-100">
                <div className="cs-card_media">
                    <div className="cs-card_img">
                        <a href={`/profile/${data.wallet}`}>
                            <Avatar className="cs-card_avatar" {...{ name: data.wallet, image: data.picture_url }} />
                        </a>
                    </div>
                    <div className="cs-card_media_right w-100">
                        <a href={`/profile/${data.wallet}`}>
                            <h3>
                                {data?.username ? `@${data?.username.trimStart()}` : getSummaryAddress(data?.wallet)}
                            </h3>
                        </a>
                        <div className="cs-card_media_info w-100">
                            <div><i className="fas fa-ticket-alt fa-fw"></i> {getNumberFormat1(data.count)} Raffles</div>
                            <div><i className="fas fa-coins fa-fw"></i> {getNumberFormat1(data.volume)} XRP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const TopRafflers = () => {
    const { loading, rafflers } = useTopRafflers();

    return (
        <section>
            <div className="container">
                <h2 className="cs-section_heading cs-style1 text-center">Top Rafflers</h2>
                <div className="cs-height_45 cs-height_lg_45"></div>
                <div className="row">
                    {rafflers.map(n => {
                        return <div className="col-xl-3 col-lg-4 col-md-6" id={n.id}>
                            <RafflerCard data={n} />
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default TopRafflers;