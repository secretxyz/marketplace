import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Avatar from "../Profile/Avatar";
import { useRaffleHistory } from "../../../hooks/useRaffle";
import { useNftHistory, useNftOffers } from "../../../hooks/useNft";
import { APP_COLORS, BITHOMP_URL } from "../../Common/constants"
import { getDateTimeWithFormat, getSummaryUsername, getTicketStatus, getExpirationDateTime, getMarketplaceByWallet, getDifferenceTime } from "../../Helpers/Utils";
import OfferRow from "../Card/OfferRow";

const RaffleHistoryRow = ({ data }) => {
    const raffle = data?.attributes;
    const raffler = raffle?.raffler?.data.attributes;
    // console.log(raffler);

    return (
        <li>
            <div className="cs-activity cs-box_shadow cs-white_bg cs-type1">
                <div className="cs-activity_avatar">
                    <Avatar className="cs-activity_avatar" {...{ name: raffler.wallet, image: raffler.picture_url }} />
                </div>
                <div className="row w-100">
                    <div className="col-xl-6">
                        <div className="cs-activity_text">Raffled by <a href="#">{getSummaryUsername(raffler)}</a></div>
                        <div className="cs-activity_posted_by">
                            {getDateTimeWithFormat(raffle.raffle_start_datetime)}
                            <span className="cs-activity_status">{getTicketStatus(raffle.status)}</span>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Ticket Price</span></p>
                        <p className="cs-activity_text">{raffle.ticket_price} XRP</p>
                    </div>
                    <div className="col-xl-3">
                        <p className="cs-activity_text"><span>Tickets Sold</span></p>
                        <p className="cs-activity_text">
                            {raffle.reserved_count} / {raffle.ticket_count}
                        </p>
                    </div>
                </div>
                <a href={`/nft/${raffle.nft_tokenid}/${data.id}`} className="cs-btn cs-style1 cs-card_btn_3">
                    <span>View</span>
                </a>
            </div>
        </li>
    );
}

const HistoryRow = ({ data }) => {
    const owner = data.owner;

    const generateMessage = () => {
        switch (data.activity) {
            case "transfer":
                return <p>
                    <a href={`/profile/${owner?.wallet}`}>{`${getSummaryUsername(owner)}`}</a> received
                </p>
            case "sold":
                return <p>
                    <a href={`/profile/${owner?.wallet}`}>{`${getSummaryUsername(owner)}`}</a> sold <span>on {Number(data.amount) / 1000000} XRP</span>
                </p>
            case "mint":
                return <p>
                    <a href={`/profile/${owner?.wallet}`}>{`${getSummaryUsername(owner)}`}</a> minted
                </p>
        }
    }

    const getCategoryIcon = () => {
        switch (data.activity) {
            case "transfer":
                return "fa fa-exchange-alt";
            case "sold":
                return "fa fa-shopping-cart";
            case "mint":
                return "fa fa-hammer";
        }
    }

    return (
        <li>
            <div className={`cs-activity cs-white_bg cs-box_shadow cs-type1`}>
                <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color cs-activity_number">
                    <i className={getCategoryIcon()}></i>
                </div>

                <a className="cs-activity_avatar cs-activity_tx_avatar" href={`/profile/${owner.wallet}`}>
                    <Avatar className="cs-activity_avatar" {...{ name: owner.wallet, image: owner.picture_url }} />
                </a>
                <div className="cs-activity_right">
                    <div className="cs-activity_text cs-activity_row_text">
                        {generateMessage()}
                    </div>
                    <p className="cs-activity_text">
                        {getDateTimeWithFormat(data.changed_at * 1000)}
                    </p>
                </div>
                <a href={`${BITHOMP_URL}${data.tx_hash}`} className="cs-activity_icon cs-center cs-gray_bg cs-accent_color" target="_blank">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </li>
    );
}

const NftInfoTabs = ({ tokenId, nftOwner, submit }) => {
    const { loading, history, fetchNftHistory } = useNftHistory()
    const { loading: offerLoading, offers, fetchNftOffers } = useNftOffers();

    useEffect(async () => {
        if (tokenId) {
            await fetchNftHistory(tokenId);
            await fetchNftOffers(tokenId);
        }
    }, [tokenId])

    return (
        <div className="cs-tabs cs-fade_tabs cs-style1">
            <div className="cs-medium">
                <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active"><a href="#offers">Offers</a></li>
                    <li><a href="#history">History</a></li>
                    {/* <li><a href="#activities">Activities</a></li> */}
                </ul>
            </div>
            <div className="cs-height_10 cs-height_lg_10"></div>
            <div className="cs-tab_content cs-tab_nft_info_content">
                <div id="offers" className="cs-tab active">
                    <ul className="cs-activity_list cs-mp0">
                        {offers.map((d, id) => (
                            <OfferRow key={id} data={{ ...d, nft_owner: nftOwner }} submit={submit} />
                        ))}
                    </ul>
                    <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={offerLoading} size={15} />
                    {!offerLoading && offers.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                </div>
                <div id="history" className="cs-tab">
                    <ul className="cs-activity_list cs-mp0">
                        {history.map(h => (
                            <HistoryRow data={h} key={h.tx_hash} />
                        ))}
                    </ul>
                    <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                    {!loading && history.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                </div>
            </div>
        </div>
    );
}

export default NftInfoTabs;