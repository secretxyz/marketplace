import Avatar from "../Profile/Avatar";
import { getNumberFormat1, getSummaryAddress } from '../../Helpers/Utils';

const AccountCard = ({ rank, data, buyer }) => {
    return (
        <div className="cs-activity cs-white_bg cs-box_shadow cs-type1 cs-leader_card">
            <div className="cs-activity_icon cs-center cs-gray_bg cs-accent_color cs-activity_number">
                {rank + 1}
            </div>
            <a className="cs-activity_avatar cs-activity_tx_avatar" href={`/profile/${data.wallet}`}>
                <Avatar className="cs-card_avatar" {...{ name: data.wallet, image: data.picture_url }} />
            </a>
            <div className="cs-activity_right w-100">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="cs-activity_text ">
                            <a className="cs-activity_row_text" href={`/profile/${data.wallet}`}>
                                {data?.username ? `@${data?.username.trimStart()}` : getSummaryAddress(data?.wallet)}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="cs-activity_text cs-grid_3 cs-gap_20">
                            <div className="cs-leader_card_info">
                                <i className="fas fa-list-ul fa-fw"></i> {getNumberFormat1(data.raffles)}
                            </div>
                            <div className="cs-leader_card_info"><i className="fas fa-ticket-alt fa-fw"></i> {getNumberFormat1(data.tickets)}</div>
                            {buyer && <div className="cs-leader_card_info"><i className="fas fa-medal fa-fw"></i> {getNumberFormat1(data.won)}</div>}
                            <div className="cs-leader_card_volume"><i className="fas fa-coins fa-fw"></i> {getNumberFormat1(data.volume)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountCard;