import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from "../Layout/ContentWrapper";
import RaffleCard from './Card/RaffleCard';
import { APP_COLORS } from "../Common/constants"
import { useRaffles } from "../../hooks/useRaffle";

const Filters = [
    { id: 0, label: "Featured", isChecked: true },
    { id: 1, label: "All Raffles", isChecked: false },
    { id: 2, label: "Past Raffles", isChecked: false },
];

const ExplorerRaffles = () => {
    const { loading, raffles, fetchNext } = useRaffles();
    const [filters, setFilters] = useState(Filters);
    const [category, setCategory] = useState(0);

    const handleScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom < 1) {
            fetchNext(0, category);
        }
    }

    useEffect(() => {
        fetchNext(1, category);
    }, [])

    useEffect(() => {
        fetchNext(1, category);
    }, [category])

    // Filter change handler
    const onFilter = id => {
        let options = filters.map(f => {
            if (f.id === id) {
                setCategory(f.id);
                return { ...f, isChecked: true };
            }

            return { ...f, isChecked: false };
        })
        setFilters(options);
    };

    return (
        <ContentWrapper>
            <div className="cs-height_90 cs-height_lg_80"></div>
            <section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                <div className="container">
                    <div className="text-center">
                        <h1 className="cs-page_title">Explore Raffles</h1>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <div className="cs-isotop_filter cs-style1 cs-center">
                        <ul className="cs-mp0 cs-center">
                            {
                                filters.map(f => (
                                    <li className={f.isChecked ? 'active' : ''} key={`${f.id}`}>
                                        <button onClick={() => { onFilter(f.id); }}><span>{f.label}</span></button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <div className="cs-height_20 cs-height_lg_20"></div>
            <div className="container cs-cards_area" onScroll={handleScroll}>
                <div className="cs-grid_5 cs-gap_30" >
                    {raffles.map(n => (
                        <RaffleCard data={{ id: n.id, ...n.attributes }} key={n.id} hiddenStatus={true} />
                    ))}
                </div>
                <div className="cs-height_20 cs-height_lg_20"></div>
                <BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
                {!loading && raffles.length == 0 && <div className="cs-center">There are no records to display</div>}
            </div>
            <div className="cs-height_70 cs-height_lg_40"></div>
        </ContentWrapper>
    );
}

export default ExplorerRaffles;
