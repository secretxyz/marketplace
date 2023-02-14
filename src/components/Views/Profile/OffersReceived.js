import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { submit } from "xrpl/dist/npm/sugar";
import { useOffers } from "../../../hooks/useOffer";
import { APP_COLORS } from "../../Common/constants";
import ContentWrapper from '../../Layout/ContentWrapper';
import OfferCard from "../Card/OfferCard";
// import SignTxModal from "../Single/SignTxModal";

const OffersReceived = ({ accountId }) => {
    const { loading, items, meta, fetchNext } = useOffers();
    const [filter, setFilter] = useState({ from: accountId });
    const [signing, setSigning] = useState(false);
    const [activity, setActivity] = useState();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(0, filter);
        }
    }

    useEffect(() => {
        fetchNext(1, filter);
    }, [])

    const submit = (activity, offerId) => {
        setActivity({ activity, offerId })
    }

    useEffect(() => {
        if (activity) {
            setSigning(true);
        }
    }, [activity])

    useEffect(() => {
        if (signing) {
            $("#sign_tx_modal").toggleClass("active");
        }
    }, [signing])

    return (
        <ContentWrapper>
            {/* <div className="cs-height_15 cs-height_lg_10"></div>
            <ul className="cs-activity_list cs-mp0 cs-cards_area" onScroll={handleScroll}>
                {items?.map(d => (
                    <li key={d.id} >
                        <OfferCard data={{ ...d.attributes, id: d.id }} key={d.id} submit={(activity, offerId) => submit(activity, offerId)} />
                    </li>
                ))}
            </ul>
            <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
            {!loading && items.length == 0 && <div className="cs-center">There are no records to display</div>}
            {signing && <SignTxModal activity={activity}
                refreshItems={() => fetchNext(1, filter)}
                closeModal={() => { setSigning(false); setActivity(); }} />} */}
        </ContentWrapper>
    );
}

export default OffersReceived;
