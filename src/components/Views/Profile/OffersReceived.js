import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { submit } from "xrpl/dist/npm/sugar";
import { useOffers } from "../../../hooks/useOffer";
import { APP_COLORS, SECRET_BROKER } from "../../Common/constants";
import { getAccount } from "../../Helpers/Utils";
import ContentWrapper from '../../Layout/ContentWrapper';
import OfferCard from "../Card/OfferCard";
import CreateOfferModal from "../Single/CreateOfferModal";

const OffersReceived = ({ accountId }) => {
    const { loading, items, meta, fetchNext } = useOffers();
    const [filter, setFilter] = useState({ to: accountId, status: "active" });
    const [activity, setActivity] = useState();
    const [offering, setOffering] = useState(false);

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(0, filter);
        }
    }

    useEffect(() => {
        fetchNext(1, filter);
    }, [])

    useEffect(() => {
        if (offering) {
            $("#create_offer_modal").toggleClass("active");
        }
    }, [offering])

    useEffect(() => {
        if (activity) {
            setOffering(true);
        }
    }, [activity]);

    const submitOffer = (activity, offer) => {
        let data = {
            activity,
            offer_id: offer.offer_index,
            offer_owner: { id: getAccount().id, wallet: getAccount().wallet },
            price: offer.price * 1000000,
            nft: { id: offer.nft.data.id, nft_tokenid: offer.nft.data.attributes.nft_tokenid },
        }
        if (activity != "claim") {
            data.destination = SECRET_BROKER
        } else {
            data.activity = "buy";
        }
        setActivity(data);
    }

    return (
        <ContentWrapper>
            <div className="cs-height_15 cs-height_lg_10"></div>
            <ul className="cs-activity_list cs-mp0 cs-cards_area" onScroll={handleScroll}>
                {items?.map(d => (
                    <li key={d.id} >
                        <OfferCard data={{ ...d.attributes, id: d.id }} key={d.id} submit={submitOffer} />
                    </li>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && items.length == 0 && <div className="cs-center">There are no records to display</div>}
            </ul>
            {offering && <CreateOfferModal activity={activity}
                refreshDetails={() => { fetchNext(1, filter) }}
                closeModal={() => { setOffering(false); setActivity(); }} />}
        </ContentWrapper>
    );
}

export default OffersReceived;
