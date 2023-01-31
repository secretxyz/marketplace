import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ContentWrapper from "../Layout/ContentWrapper";
import NftCard from './Card/NftCard';
import { APP_COLORS } from "../Common/constants"
import { useNfts } from "../../hooks/useNft";

const Filters = [
	{ id: 0, label: "All NFTs", isChecked: true },
	{ id: 1, label: "Trending", isChecked: false },
	{ id: 2, label: "Auctions", isChecked: false },
];

const ExplorerNfts = () => {
	const { loading, nfts, meta, fetchNext } = useNfts();
	const [filters, setFilters] = useState(Filters);

	const handleScroll = (e) => {
		const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
        if (bottom <= 1) {
			fetchNext(0);
		}
	}

	useEffect(() => {
		fetchNext(1);
	}, [])

	// Filter change handler
	const onFilter = id => {
		let options = filters.map(f => {
			if (f.id === id) {
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
						<h1 className="cs-page_title">Explore NFTs</h1>
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
			<div className="container">
				<div className="cs-sidebar_frame cs-style1">
					<div className="cs-sidebar_frame_left">
						<div className="cs-filter_sidebar">
							<div className="cs-filter_widget">
								<h2 className="cs-filter_toggle_btn">
									Status
									<span className="cs-arrow_icon">
										<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</h2>
								<div className="cs-filter_toggle_body">
									<ul>
										<li>
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="flexCheckChecked" />
												<label className="form-check-label" htmlFor="flexCheckChecked">Buy Now</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="flexCheckDefault" />
												<label className="form-check-label" htmlFor="flexCheckDefault">In Auction</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
												<label className="form-check-label" htmlFor="flexCheckDefault1">Looking to Sell</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
												<label className="form-check-label" htmlFor="flexCheckDefault2">Has Offers</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="cs-filter_widget">
								<h2 className="cs-filter_toggle_btn">
									Price
									<span className="cs-arrow_icon">
										<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</h2>
								<div className="cs-filter_toggle_body">
									<div className="cs-price_form">
										<form className="row row-15">
											<div className="col-lg-12">
												<div className="cs-form_field_wrap cs-select_arrow">
													<select className="cs-form_field cs-field_sm">
														<option value="XRP">XRP</option>
													</select>
												</div>
												<div className="cs-height_15 cs-height_lg_15"></div>
											</div>
											<div className="col-lg-6">
												<div className="cs-form_field_wrap">
													<input type="text" className="cs-form_field cs-field_sm" placeholder="Min" />
												</div>
												<div className="cs-height_15 cs-height_lg_15"></div>
											</div>
											<div className="col-lg-6">
												<div className="cs-form_field_wrap">
													<input type="text" className="cs-form_field cs-field_sm" placeholder="Max" />
												</div>
												<div className="cs-height_10 cs-height_lg_10"></div>
											</div>
											<div className="col-lg-6">
												<input type="reset" className="cs-btn cs-style1 cs-color1 cs-btn_sm" value="Clear" />
											</div>
											<div className="col-lg-6">
												<button className="cs-btn cs-style1 cs-btn_sm"><span>Apply</span></button>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="cs-filter_widget">
								<h2 className="cs-filter_toggle_btn">
									Collection
									<span className="cs-arrow_icon">
										<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</h2>
								<div className="cs-filter_toggle_body">
									<div className="cs-search_collection_widget">
										<form action="#" className="cs-search">
											<input type="text" className="cs-search_input" placeholder="Search" />
											<button className="cs-search_btn">
												<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M17.5 18L13.875 14.375" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="cs-sidebar_frame_right">
						<div className="cs-filter_head">
							<div className="cs-filter_head_left">
								<span className="cs-search_result cs-medium cs-ternary_color">{meta?.pagination?.total} Results</span>
								<div className="cs-form_field_wrap">
									<input type="text" className="cs-form_field cs-field_sm" placeholder="In Auction" />
								</div>
								<a href="#" className="cs-clear_btn">Clear All</a>
							</div>
							<div className="cs-filter_head_right">
								<div className="cs-form_field_wrap cs-select_arrow">
									<select className="cs-form_field cs-field_sm">
										<option value="11">Sort By</option>
										<option value="22">Last 7 days</option>
										<option value="33">Last 30 days</option>
										<option value="44">All time</option>
									</select>
								</div>
								<div className="cs-form_field_wrap cs-select_arrow">
									<select className="cs-form_field cs-field_sm">
										<option value="1">Likes</option>
										<option value="2">Most popular</option>
										<option value="3">By price</option>
										<option value="4">By published</option>
									</select>
								</div>
							</div>
						</div>
						<div className="cs-height_30 cs-height_lg_30"></div>
						<div className="row cs-cards_area" onScroll={handleScroll}>
							{nfts.map(n => (
								<div className="col-xl-3 col-lg-4 col-sm-6" key={n.id}>
									<NftCard data={{ ...n.attributes }} />
									<div className="cs-height_20 cs-height_lg_20"></div>
								</div>
							))}
						</div>
						<BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
						{!loading && nfts.length == 0 && <div className="cs-center">There are no records to display</div>}
						<div className="cs-height_30 cs-height_lg_30"></div>
					</div>
				</div>
			</div>
		</ContentWrapper>
	);
}

export default ExplorerNfts;
