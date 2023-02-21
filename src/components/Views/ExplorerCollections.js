import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from "../Layout/ContentWrapper";
import CollectionCard from './Card/CollectionCard'
import { APP_COLORS } from "../Common/constants"
import { useCollections } from "../../hooks/useCollection";

const Categories = [
	{ id: 0, label: "Trending", isChecked: true, key: "trending" },
	{ id: 1, label: "Top", isChecked: false, key: "top" },
	{ id: 2, label: "Art", isChecked: false, key: "art" },
	{ id: 3, label: "Music", isChecked: false, key: "music" },
	{ id: 4, label: "Video", isChecked: false, key: "video" },
	{ id: 5, label: "Fashion", isChecked: false, key: "fashion" },
	{ id: 6, label: "Sports", isChecked: false, key: "sports" },
	{ id: 7, label: "Collectibles", isChecked: false, key: "collectibles" }
];

const ExplorerCollections = (props) => {
	const { menu } = props.match.params;
	const { loading, collections, fetchNext } = useCollections();
	const [categories, setCategories] = useState(Categories);
	const [category, setCategory] = useState("trending");

	useEffect(() => {
		if (menu) {
			var valid = categories.filter(m => { return m.key === menu });
			if (!valid.length) {
				window.location.replace("/explorer-collections");
				return;
			}

			let menus = categories.map(m => {
				if (m.key === menu) {
					return { ...m, isChecked: true };
				}
				return { ...m, isChecked: false };
			})
			setCategories(menus);
			fetchNext(1, 25, menu);
		}
	}, [])

	useEffect(() => {
		if (!menu && category) {
			fetchNext(1, 25, category);
		}
	}, [category])

	const handleScroll = (e) => {
		const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
		if (bottom <= 1 && !loading) {
			fetchNext(0, 25, category);
		}
	}

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

		// change url
		if (menu) {
			window.history.replaceState(null, null, "/explorer-collections")
		}
	};

	return (
		<ContentWrapper>
			<div className="cs-height_90 cs-height_lg_80"></div>
			<section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
				<div className="container">
					<div className="text-center">
						<h1 className="cs-page_title">Explore Collections</h1>
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
			<div className="cs-height_20 cs-height_lg_20"></div>
			<div className="container cs-cards_area" onScroll={handleScroll}>
				<div className="cs-grid_5 cs-gap_30" >
					{collections.map(c => (
						<CollectionCard data={c} key={c.id} />
					))}
				</div>
				<div className="cs-height_20 cs-height_lg_20"></div>
				<BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
				{!loading && collections.length == 0 && <div className="cs-center_line">There are no records to display</div>}
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>
		</ContentWrapper>
	);
}

export default ExplorerCollections;
