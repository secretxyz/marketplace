import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useClaims } from "../../../hooks/useActivity";
import { useLedgerOffers, useOffers } from "../../../hooks/useOffer";
import { APP_COLORS, SECRET_BROKER } from "../../Common/constants";
import { getAccount } from "../../Helpers/Utils";
import ContentWrapper from '../../Layout/ContentWrapper';
import ActivityCard from "../Card/ActivityCard";
import OfferCard from "../Card/OfferCard";
import OfferRow from "../Card/OfferRow";
import CreateOfferModal from "../Single/CreateOfferModal";

const Categories = [
    { id: 0, label: "Listed", isChecked: true, key: "listed" },
    { id: 1, label: "Received", isChecked: false, key: "received" },
    { id: 2, label: "Claims", isChecked: false, key: "claims" },
];

const Offers = ({ accountId }) => {
    const { loading, offers, fetchLedgerOffers } = useLedgerOffers();
    const [categories, setCategories] = useState(Categories);
    const [category, setCategory] = useState("listed");
    const [activity, setActivity] = useState();
    const [offering, setOffering] = useState(false);
    const [items, setItems] = useState();

    useEffect(() => {
        fetchLedgerOffers();
    }, [])

    const onChangeItems = () => {
        if (category == "listed") {
            setItems(offers.list_offers);
        } else if (category == "received") {
            setItems(offers.receive_offers);
        } else if (category == "claims") {
            setItems(offers.transfer_offers);
        }
    }

    useEffect(() => {
        if (offers) {
            onChangeItems();
        }
    }, [offers])

    useEffect(() => {
        if (offers) {
            onChangeItems();
        }
    }, [category])

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
            offer_id: offer.offer_id,
            offer_owner: { id: offer.owner.id, wallet: offer.owner.wallet },
            price: offer.price,
            nft: { id: offer.nft.id, nft_tokenid: offer.nft.nft_tokenid },
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
                return { ...f, isChecked: true };
            }

            return { ...f, isChecked: false };
        })
        setCategories(options);
    };

    const onClickCancelAll = () => {
        if (!items.length) {
            return;
        }

        const offer_ids = items.map(item => item.offer_id);
        let data = {
            activity: "cancel-all",
            offer_ids,
            offer_owner: { id: getAccount().id, wallet: getAccount().wallet },
        }
        setActivity(data);
    }

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
                        {category == "listed" && <button className="cs-activity_view cs-btn cs-style1 cs-card_btn_3 cs-cancel_all" onClick={() => onClickCancelAll()}>
                            <span>Cancel All</span>
                        </button>}
                    </div>
                </div>
            </section>
            <div className="cs-height_15 cs-height_lg_10"></div>
            <ul className="cs-activity_list cs-mp0 cs-cards_area">
                {items?.map(d => (
                    <li key={d.offer_id} >
                        <OfferCard data={d} submit={submitOffer} />
                    </li>
                ))}
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && !items?.length && <div className="cs-center_line">There are no records to display</div>}
            </ul>

            {offering && <CreateOfferModal activity={activity}
                refreshDetails={() => { fetchLedgerOffers(); }}
                closeModal={() => { setOffering(false); }} />}
        </ContentWrapper>
    );
}

export default Offers;
