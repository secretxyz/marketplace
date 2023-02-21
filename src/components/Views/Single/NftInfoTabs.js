import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Avatar from "../Profile/Avatar";
import { useRaffleHistory } from "../../../hooks/useRaffle";
import { useNftOffers } from "../../../hooks/useNft";
import { APP_COLORS } from "../../Common/constants"
import { getDateTimeWithFormat, getSummaryUsername, getTicketStatus, getExpirationDateTime, getMarketplaceByWallet } from "../../Helpers/Utils";
import OfferRow from "../Card/OfferRow";
import { submit } from "xrpl/dist/npm/sugar";

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
                        <p className="cs-activity_text"><span>Total Price</span></p>
                        <p className="cs-activity_text">{raffle.total_ticket_price} XRP</p>
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

const NftInfoTabs = ({ tokenId, nftOwner, submit }) => {
    const { loading, history, fetchNext } = useRaffleHistory();
    const { loading: offerLoading, offers, fetchNftOffers } = useNftOffers();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(tokenId);
        }
    }

    useEffect(async () => {
        if (tokenId) {
            await fetchNext(tokenId, 0);
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
            <div className="cs-tab_content cs-tab_nft_info_content" onScroll={handleScroll}>
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
                        {history.map(d => (
                            <RaffleHistoryRow data={d} key={d.id} />
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