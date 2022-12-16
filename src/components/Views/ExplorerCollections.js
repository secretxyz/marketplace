import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ContentWrapper from "../Layout/ContentWrapper";
import CollectionCard from './Card/CollectionCard'

const FILTERS = [
	{ id: 0, label: "Trending", isChecked: true },
	{ id: 1, label: "Top", isChecked: false },
	{ id: 2, label: "Art", isChecked: false },
	{ id: 3, label: "Music", isChecked: false },
	{ id: 4, label: "Video", isChecked: false },
	{ id: 5, label: "Fashion", isChecked: false },
	{ id: 6, label: "Sports", isChecked: false },
	{ id: 7, label: "Collectibles", isChecked: false }
];

const COLLECTIONS = [
	{
		id: "0",
		name: "XPunks",
		banner_picture_url: "img/collections/collection_bg3.png",
		picture_url: "img/collections/collection3.png",
		is_verified: true,
		owners: 1869,
		nfts_count: "10K",
		total_volume: "2.11M XRP",
		floor_price: "4192 XRP"
	},
	{
		id: "1",
		name: "The Bearable Bulls",
		banner_picture_url: "img/collections/collection_bg2.png",
		picture_url: "img/collections/collection2.gif",
		is_verified: true,
		owners: 4088,
		nfts_count: "10K",
		total_volume: "1.43M XRP",
		floor_price: "197 XRP"
	},
	{
		id: "2",
		name: "Bored Apes XRP Club",
		banner_picture_url: "img/collections/collection_bg4.png",
		picture_url: "img/collections/collection4.png",
		owners: 1490,
		nfts_count: 9660,
		total_volume: "1.14M XRP",
		floor_price: "648 XRP"
	},
	{
		id: "3",
		name: "XAliens",
		banner_picture_url: "img/collections/collection_bg5.png",
		picture_url: "img/collections/collection5.png",
		owners: 1490,
		nfts_count: 9660,
		total_volume: "1.14M XRP",
		floor_price: "648 XRP"
	},
	{
		id: "4",
		name: "BearableGuyClub Genesis I",
		banner_picture_url: "img/collections/collection_bg9.png",
		picture_url: "img/collections/collection9.png",
		is_verified: true,
		owners: 256,
		nfts_count: 589,
		total_volume: "921.5K XRP",
		floor_price: "390 XRP"
	},
	{
		id: "5",
		name: "BearableGuyClub Loadstar II",
		banner_picture_url: "img/collections/collection_bg1.png",
		picture_url: "img/collections/collection1.png",
		is_verified: true,
		owners: 2024,
		nfts_count: "5890",
		total_volume: "859.8K XRP",
		floor_price: "360 XRP"
	},
	{
		id: "6",
		name: "PunkWorlds",
		banner_picture_url: "img/collections/collection_bg7.png",
		picture_url: "img/collections/collection7.gif",
		is_verified: true,
		owners: 1024,
		nfts_count: "10K",
		total_volume: "19.8K XRP",
		floor_price: "97 XRP"
	},
	{
		id: "7",
		name: "X Baes",
		banner_picture_url: "img/collections/collection_bg8.png",
		picture_url: "img/collections/collection8.png",
		is_verified: false,
		owners: 832,
		nfts_count: 5000,
		total_volume: "10K XRP",
		floor_price: "40 XRP"
	},
	{
		id: "8",
		name: "Rich Ducks",
		banner_picture_url: "img/collections/collection_bg6.png",
		picture_url: "img/collections/collection6.png",
		is_verified: true,
		is_verified: true,
		owners: 1070,
		nfts_count: 9950,
		total_volume: "1.9K XRP",
		floor_price: "29 XRP"
	},
	{
		id: "9",
		name: "Junkies",
		banner_picture_url: "img/collections/collection_bg10.png",
		picture_url: "img/collections/collection10.png",
		owners: 4421,
		nfts_count: "10K",
		total_volume: "1.5K XRP",
		floor_price: "122 XRP"
	},
]


class ExplorerCollections extends Component {
	state = {
		filters: FILTERS,
		collections: COLLECTIONS,
	};

	componentDidMount() { }

	// Filter change handler
	onFilter = id => {
		let filters = this.state.filters.map(f => {
			if (f.id === id) {
				return {
					...f,
					isChecked: true
				};
			}

			return {
				...f,
				isChecked: false
			};
		})
		this.setState({ filters });
	};

	render() {
		let { filters, collections } = this.state;
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
											<button onClick={() => { this.onFilter(f.id); }}><span>{f.label}</span></button>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</section>
				<div className="cs-height_20 cs-height_lg_20"></div>
				<div className="container">
					<div className="cs-grid_5 cs-gap_30">
						{collections.map(c => (<CollectionCard data={c} key={c.id} />))}
					</div>
				</div>
				<div className="cs-height_70 cs-height_lg_40"></div>
			</ContentWrapper>
		);
	}
}

export default withRouter(ExplorerCollections);
