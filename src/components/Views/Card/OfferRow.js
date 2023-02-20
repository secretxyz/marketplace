import { useState } from "react";
import { SECRET_BROKER } from "../../Common/constants";
import { getAccount, getExpirationDateTime, getMarketplaceByWallet, getSummaryUsername, isLoggedIn } from "../../Helpers/Utils";
import Avatar from "../Profile/Avatar";

const OfferRow = ({ data, submit }) => {
    let nft_owner = data.nft_owner;
    let owner = data.owner;
    let destination = data.destination;

    const getPrice = () => {
        if (isNaN(data.amount)) {
            return `${data.amount.value} ${data.amount.currency}`;
        } else {
            return `${Number(data.amount) / 1000000} XRP`;
        }
    }

    const getSubmitButton = () => {
        if (isLoggedIn()) {
            if (owner.id == getAccount().id) {
                return <button className="cs-btn cs-style1 cs-card_btn_3 cs-width_75 cs-width_lg_75" onClick={() => onClickSubmit("cancel")}>
                    <span>Cancel</span>
                </button>
            } else if (data.type == "sell") {
                if (!destination || destination?.wallet == SECRET_BROKER) {
                    return <button className="cs-btn cs-style1 cs-card_btn_3 cs-width_75 cs-width_lg_75" onClick={() => onClickSubmit("buy")}>
                        <span>Buy</span>
                    </button>
                } else if (destination?.id == getAccount().id) {
                    return <button className="cs-btn cs-style1 cs-card_btn_3 cs-width_75 cs-width_lg_75" onClick={() => onClickSubmit("buy")}>
                        <span>Claim</span>
                    </button>

                }
            } else if (data.type == "buy" && (destination?.id == getAccount().id || (nft_owner?.id == getAccount().id && destination?.wallet == SECRET_BROKER))) {
                return <button className="cs-btn cs-style1 cs-card_btn_3 cs-width_75 cs-width_lg_75" onClick={() => onClickSubmit("accept")}>
                    <span>Accept</span>
                </button>
            }
        }
    }

    const onClickSubmit = (activity) => {
        submit(activity, data);
    }

    return (
        <li>
            <div className="cs-activity cs-box_shadow cs-white_bg cs-type1">
                <div className="cs-activity_avatar">
                    <Avatar className="cs-activity_avatar" {...{ name: owner.wallet, image: owner.picture_url }} />
                </div>
                <div className="row w-100">
                    <div className="col-xl-9">
                        <p className="cs-activity_text">
                            <a href={`/profile/${owner.wallet}`} target="_blank">{getSummaryUsername(owner)}</a> created <strong>{data.amount == "0" ? "transfer" : data.type}</strong> offer {getMarketplaceByWallet(destination, data.nft_tokenid)}
                        </p>
                        <p className="cs-activity_text">
                            {getExpirationDateTime(data.expiration)}
                        </p>
                    </div>
                    <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Price</span></p>
                        <p className="cs-activity_text">{getPrice()}</p>
                    </div>
                </div>
                <div className="cs-spacing_100">
                    {getSubmitButton()}
                </div>
            </div>
        </li>
    );
}

export default OfferRow;