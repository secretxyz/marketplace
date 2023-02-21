import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from "../Layout/ContentWrapper";
import RaffleCard from './Card/RaffleCard';
import { APP_COLORS } from "../Common/constants"
import { useRaffles } from "../../hooks/useRaffle";
import RaffleFilterBar from "./FilterBar/RaffleFilterBar";

const Categories = [
    { id: 0, label: "Featured", isChecked: true, key: "featured" },
    { id: 1, label: "All Raffles", isChecked: false, key: "all" },
    { id: 2, label: "Past Raffles", isChecked: false, key: "past" },
];

const ExplorerRaffles = () => {
    const { loading, raffles, meta, fetchNext } = useRaffles();
    const [categories, setCategories] = useState(Categories);
    const [category, setCategory] = useState("featured");
    const [filter, setFilter] = useState();

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1 && !loading) {
            fetchNext(category, filter);
        }
    }

    useEffect(() => {
        fetchNext(category, filter, 1);
    }, [category])

    useEffect(() => {
        if (filter) {
            fetchNext(category, filter, 1);
        }
    }, [filter])

    // Filter change handler
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

    return (
        <ContentWrapper>
            <div className="cs-height_90 cs-height_lg_80"></div>
            <section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                <div className="container">
                    <div className="text-center">
                        <h1 className="cs-page_title">Explore P2P Raffles</h1>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
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
            <div className="container">
                <div className="cs-height_15 cs-height_lg_10"></div>
                <RaffleFilterBar result={meta?.pagination?.total} callback={(filter) => { setFilter(filter) }} />
                <div className="cs-height_15 cs-height_lg_10"></div>
                <div className="container cs-cards_area" onScroll={handleScroll}>
                    <div className="cs-grid_5 cs-gap_30">
                        {raffles.map(n => (
                            <RaffleCard data={{ id: n.id, ...n.attributes }} key={n.id} hiddenStatus={true} />
                        ))}
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                    {!loading && raffles.length == 0 && <div className="cs-center_line">There are no records to display</div>}
                </div>
            </div>
            <div className="cs-height_70 cs-height_lg_40"></div>
        </ContentWrapper>
    );
}

export default ExplorerRaffles;
