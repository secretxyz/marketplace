import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { submit } from "xrpl/dist/npm/sugar";
import { useOffers } from "../../../hooks/useOffer";
import { APP_COLORS } from "../../Common/constants";
import ContentWrapper from '../../Layout/ContentWrapper';
import OfferCard from "../Card/OfferCard";

const Follows = ({ accountId }) => {
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
            <div className="cs-height_15 cs-height_lg_10"></div>
            <div className="container">
                <div className="cs-coming_soon">
                    <h1 className="cs-page_title">
                        Coming Soon...
                    </h1>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default Follows;
