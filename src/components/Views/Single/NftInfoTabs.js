import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Avatar from "../Profile/Avatar";
import { useRaffleHistory } from "../../../hooks/useRaffle";
import { APP_COLORS } from "../../Common/constants"
import { getDateTimeWithFormat, getSummaryUsername, getTicketStatus } from "../../Helpers/Utils";

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
                        <p className="cs-activity_text">Raffled by <a href="#">{getSummaryUsername(raffler)}</a></p>
                        <p className="cs-activity_posted_by">
                            {getDateTimeWithFormat(raffle.raffle_start_datetime)}
                            <span className="cs-activity_status">{getTicketStatus(raffle.status)}</span>
                        </p>
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

const NftInfoTabs = ({ tokenid }) => {
    const { loading, history, fetchNext } = useRaffleHistory();
    // const { offers, fetchOffers } = useNftOffers();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1) {
            fetchNext(tokenid);
        }
    }

    useEffect(() => {
        if (tokenid) {
            fetchNext(tokenid, 0);
        }
    }, [tokenid])

    return (
        <div className="cs-tabs cs-fade_tabs cs-style1">
            <div className="cs-medium">
                <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active"><a href="#history">History</a></li>
                    <li><a href="#offers">Offers</a></li>
                    {/* <li><a href="#activities">Activities</a></li> */}
                </ul>
            </div>
            <div className="cs-height_10 cs-height_lg_10"></div>
            <div className="cs-tab_content cs-tab_nft_info_content" onScroll={handleScroll}>
                <div id="history" className="cs-tab active">
                    <ul className="cs-activity_list cs-mp0">
                        {history.map(h => (
                            <RaffleHistoryRow data={h} key={h.id} />
                        ))}
                    </ul>
                    <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                    {!loading && history.length == 0 && <div className="cs-center">There are no records to display</div>}
                </div>
                <div id="offers" className="cs-tab">
                    <ul className="cs-activity_list cs-mp0">
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NftInfoTabs;