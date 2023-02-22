import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useClaims } from "../../../hooks/useActivity";
import { useOffers } from "../../../hooks/useOffer";
import { APP_COLORS, SECRET_BROKER } from "../../Common/constants";
import { getAccount } from "../../Helpers/Utils";
import ContentWrapper from '../../Layout/ContentWrapper';
import ActivityCard from "../Card/ActivityCard";
import OfferCard from "../Card/OfferCard";
import CreateOfferModal from "../Single/CreateOfferModal";

const Categories = [
    { id: 0, label: "Listed", isChecked: true, key: "listed" },
    { id: 1, label: "Received", isChecked: false, key: "received" },
    { id: 2, label: "Raffles", isChecked: false, key: "claims" },
];

const Offers = ({ accountId }) => {
    const { loading, items, meta, fetchNext } = useOffers();
    const { loading: claimsLoading, items: claims, fetchClaims } = useClaims();
    const [categories, setCategories] = useState(Categories);
    const [category, setCategory] = useState("listed");
    const [filter, setFilter] = useState({ from: accountId, status: "active" });
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
    }, [filter])

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

    useEffect(() => {
        if (category == "claims") {
            fetchClaims(accountId)
        }
    }, [category])

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

    const onChangeCategory = id => {
        let options = categories.map(f => {
            if (f.id === id) {
                setCategory(f.key);
                if (f.key == "listed") {
                    setFilter({ from: accountId, status: "active" })
                } else if (f.key == "received") {
                    setFilter({ to: accountId, status: "active" })
                }
                return { ...f, isChecked: true };
            }

            return { ...f, isChecked: false };
        })
        setCategories(options);
    };

    return (
        <ContentWrapper>
            <section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                <div className="container">
                    <div className="cs-isotop_filter cs-style1 cs-center">
                        <ul className="cs-mp0 cs-center">
                            {
                                categories.map(f => (
                                    <li className={f.isChecked ? 'active' : ''} key={`${f.id}`}>
                                        <button onClick={() => { onChangeCategory(f.id); }}><span>{f.label}</span></button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <div className="cs-height_15 cs-height_lg_10"></div>

            {(category == "listed" || category == "received") && <ul className="cs-activity_list cs-mp0 cs-cards_area" onScroll={handleScroll}>
                {items?.map(d => (
                    <li key={d.id} >
                        <OfferCard data={{ ...d.attributes, id: d.id }} key={d.id} submit={submitOffer} />
                    </li>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && !items?.length && <div className="cs-center_line">There are no records to display</div>}
            </ul>}

            {category == "claims" && <ul className="cs-activity_list cs-mp0 cs-cards_area">
                {claims?.map(d => (
                    <li key={d.id} >
                        <ActivityCard data={d} type="self" key={d.id} />
                    </li>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={claimsLoading} size={15} />
                {!claimsLoading && !claims?.length && <div className="cs-center_line">There are no records to display</div>}
            </ul>}

            {offering && <CreateOfferModal activity={activity}
                refreshDetails={() => { fetchNext(1, filter) }}
                closeModal={() => { setOffering(false); setActivity(); }} />}
        </ContentWrapper>
    );
}

export default Offers;
