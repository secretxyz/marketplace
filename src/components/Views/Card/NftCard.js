import React, { useState, useEffect } from 'react';
import Avatar from "../Profile/Avatar";
import { getAccount, getAssetView1 } from '../../Helpers/Utils';
import { getSummaryAddress } from '../../Helpers/Utils';
import LikeNft from '../../Common/LikeNft';
import { SECRETMARKET_URL } from '../../Common/constants';
import CreateRaffleModal from '../Single/CreateRaffleModal';

const NftCard = ({ data }) => {
    const nft_link = `${SECRETMARKET_URL}/nft/${data.nft_tokenid}`;
    const owner = { id: data.owner?.data?.id, ...data.owner?.data?.attributes };
    const owner_link = `/profile/${owner.wallet}`;

    const [raffling, setRaffling] = useState(false);

    const onClickCreateRaffle = () => {
        setRaffling(true);
    }

    useEffect(() => {
        if (raffling) {
            $("#create_raffle_modal").toggleClass("active");
        }
    }, [raffling])

    const gotoRaffle = (raffleId) => {

    }

    const getFooterButton = () => {
        if (owner.id == getAccount().id) {
            return <a className="cs-btn cs-style1 cs-card_btn_3" onClick={onClickCreateRaffle}>
                <span>Create Raffle</span>
            </a>;
        } else {
            return <a href={nft_link} className="cs-btn cs-style1 cs-card_btn_3">
                <span>Place Offer</span>
            </a>;
        }
    }

    return (
        <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
            {/* {data?.rarity_rank && <span className="cs-card_rare cs-primary_color">
                #{data.rarity_rank}
            </span>} */}
            <LikeNft nft={data} />
            <a href={nft_link} className="cs-card_thumb cs-zoom_effect">
                {getAssetView1(data)}
            </a>
            <div className="cs-card_info">
                <a href={owner_link} className="cs-avatar cs-white_bg cs-box_shadow">
                    <Avatar className="cs-profile_avatar_oval" {...{ name: owner.wallet, image: owner.picture_url }} />
                    <span>{owner.username ?? getSummaryAddress(owner.wallet)}</span>
                </a>
                <h3 className="cs-card_title">
                    <a href={nft_link}>{data.name}</a>
                </h3>
                <hr />
                <div className="cs-card_footer">
                    {getFooterButton()}
                </div>
            </div>

            {raffling && <CreateRaffleModal nft={data}
                refreshDetails={(raffleId) => { gotoRaffle(raffleId) }}
                closeModal={() => { setRaffling(false) }} />}

        </div>
    );
}

export default NftCard;