import { getSummaryUsername } from "../../Helpers/Utils";

const NotificationRow = ({ data }) => {
    const nft = data.nft?.data?.attributes;
    const from = data.from?.data?.attributes;
    const raffle = {
        ...data.raffle?.data?.attributes,
        id: data.raffle?.data?.id,
    };
    const raffle_ticket = data.raffle_ticket?.data?.attributes;

    const generateMessage = () => {
        switch (data.activity) {
            case "raffle-winner":
                return <>
                    {`You were chosen as the winner`}
                </>
            case "raffle-ticket-cancel":
                return <>
                    {`Refunded ${raffle_ticket?.ticket_count} tickets`}
                </>
            case "raffle-cancel":
                return <>
                    {`The raffle has cancelled`}
                </>
            case "raffle-ticket-end":
            case "raffle-end":
                return <>
                    {`The raffle has ended`}
                </>
            case "raffle-ticket":
                return <>
                    {`${getSummaryUsername(from)} reserved ${raffle_ticket?.ticket_count} tickets`}
                </>
        }
    }

    return (
        <a href={`/nft/${nft?.nft_tokenid}/${raffle?.id}`} className="cs-notification_item">
            <div className="cs-notification_thumb">
                <img src={nft?.picture_url} alt="Image" />
            </div>
            <div className="cs-notification_right">
                <p>{generateMessage()}</p>
                <h4>{nft?.name}</h4>
            </div>
        </a>
    )
}

export default NotificationRow;