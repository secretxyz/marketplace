import React from "react";
import { BITHOMP_URL } from "../../Common/constants";
import { getSummaryAddress, getSummaryTxID } from "../../Helpers/Utils";

const DetailsTab = (props) => {
    return (
        <div id="Details" className="cs-tab">
            <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                <ul className="cs-single_details_list">
                    <li>Issuer <a href={`${BITHOMP_URL}${props.issuer}`} target="_blank"><span>{getSummaryAddress(props.issuer)}</span></a></li>
                    <li>Owner  <a href={`${BITHOMP_URL}${props.owner}`} target="_blank"><span>{getSummaryAddress(props.owner)}</span></a></li>
                    <li>Token ID <a href={`${BITHOMP_URL}${props.nft_tokenid}`} target="_blank"><span>{getSummaryTxID(props.nft_tokenid)}</span></a></li>
                    <li>Token Standard <span>{props.standard}</span></li>
                    <li>Creator Fee <span>{`${Number(props.creator_fee) / 1000} %`}</span></li>
                    <a className="cs-btn cs-style1 cs-card_btn_3" href={`${props.ipfs_url}`} target="_blank">
                        <span>View Metadata<i className="fas fa-arrow-right"></i></span>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default DetailsTab;
