import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from "../Layout/ContentWrapper";
import CollectionCard from './Card/CollectionCard'
import { APP_COLORS } from "../Common/constants"
import { useCollections } from "../../hooks/useCollections";

const Filters = [
	{ id: 0, label: "Trending", isChecked: true },
	{ id: 1, label: "Top", isChecked: false },
	{ id: 2, label: "Art", isChecked: false },
	{ id: 3, label: "Music", isChecked: false },
	{ id: 4, label: "Video", isChecked: false },
	{ id: 5, label: "Fashion", isChecked: false },
	{ id: 6, label: "Sports", isChecked: false },
	{ id: 7, label: "Collectibles", isChecked: false }
];

const ExplorerCollections = () => {
	const { loading, collections, fetchNext } = useCollections();
	const [filters, setFilters] = useState(Filters);
	const [category, setCategory] = useState("trending");

	useEffect(() => {
		fetchNext(1, 25, category);
	}, [])

	useEffect(() => {
		fetchNext(1, 25, category);
	}, [category])

	const handleScroll = (e) => {
		console.log(e.target.scrollHeight - e.target.scrollTop, e.target.clientHeight);
		const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		if (bottom) {
			// console.log("scrolling...");
			fetchNext(0, 25, category);
		}
	}

	// Filter change handler
	const onFilter = id => {
		let options = filters.map(f => {
			if (f.id === id) {
				setCategory(f.label.toLowerCase());
				return { ...f, isChecked: true };
			}
			return { ...f, isChecked: false };
		})
		setFilters(options);
	};

	return (
		<ContentWrapper>
			<div className="cs-height_90 cs-height_lg_80"></div>
			<section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.svg")` }}>
				<div className="container">
					<div className="text-center">
						<h1 className="cs-page_title">Explore collections</h1>
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
			<div className="container cs-cards_area cs-center" onScroll={handleScroll}>
				<div className="cs-grid_5 cs-gap_30" >
					{collections.map(c => (<CollectionCard data={c} key={c.id} />))}
				</div>
				<div className="cs-height_20 cs-height_lg_20"></div>
				<BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
				{!loading && collections.length == 0 && <div className="cs-center">There are no records to display</div>}
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>
		</ContentWrapper>
	);
}

export default ExplorerCollections;
