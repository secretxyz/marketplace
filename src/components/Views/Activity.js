import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useActivity } from "../../hooks/useActivity";
import { APP_COLORS } from "../Common/constants";
import ContentWrapper from '../Layout/ContentWrapper';
import ActivityCard from "./Card/ActivityCard";

const Activity = () => {
	const { loading, items, meta, fetchNext } = useActivity();
	const [filter, setFilter] = useState({});

	const handleScroll = (e) => {
		const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
		if (bottom <= 1 && !loading) {
			fetchNext(0, filter);
		}
	}

	useEffect(() => {
		// Filter Toggle
		$('.cs-filter_toggle_btn').on('click', function () {
			$(this).toggleClass('active').siblings('.cs-filter_toggle_body').slideToggle();
		})
	}, [])

	useEffect(() => {
		fetchNext(1, filter);
	}, [filter])

	const onChangeStatus = (event) => {
		let name = event.target.name;
		let value = event.target.checked;

		setFilter({
			...filter,
			[name]: value
		})
	}

	const onChangeKeyword = (event) => {
		setFilter({
			...filter,
			[event.target.name]: event.target.value
		})
	}

	return (
		<ContentWrapper>
			<div className="cs-height_90 cs-height_lg_80"></div>
			<section className="cs-page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
				<div className="container">
					<div className="text-center">
						<h1 className="cs-page_title">Activity</h1>
					</div>
				</div>
			</section>
			<div className="cs-height_40 cs-height_lg_30"></div>
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
												<input name="create" className="form-check-input" type="checkbox" id="raffle-create" checked={filter.create || false} onChange={onChangeStatus} />
												<label className="form-check-label" htmlFor="raffle-create">Create Raffle</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input name="ticket" className="form-check-input" type="checkbox" id="raffle-ticket" checked={filter.ticket || false} onChange={onChangeStatus} />
												<label className="form-check-label" htmlFor="raffle-ticket">Reserve Ticket</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input name="winner" className="form-check-input" type="checkbox" id="raffle-winner" checked={filter.winner || false} onChange={onChangeStatus} />
												<label className="form-check-label" htmlFor="raffle-winner">Pick Winner</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input name="end" className="form-check-input" type="checkbox" id="raffle-end" checked={filter.end || false} onChange={onChangeStatus} />
												<label className="form-check-label" htmlFor="raffle-end">Complete Raffle</label>
											</div>
										</li>
										<li>
											<div className="form-check">
												<input name="cancel" className="form-check-input" type="checkbox" id="raffle-cancel" checked={filter.cancel || false} onChange={onChangeStatus} />
												<label className="form-check-label" htmlFor="raffle-cancel">Cancel Raffle</label>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="cs-filter_widget">
								<h2 className="cs-filter_toggle_btn">
									NFT
									<span className="cs-arrow_icon">
										<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
								</h2>
								<div className="cs-filter_toggle_body">
									<div className="cs-search_collection_widget">
										<form action="#" className="cs-search">
											<input name="keyword" type="text" className="cs-search_input" placeholder="Search by name" value={filter.keyword || ""} onChange={onChangeKeyword} />
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
						<ul className="cs-activity_list cs-mp0 cs-cards_area" onScroll={handleScroll}>
							{items?.map(d => (
								<li key={d.id} >
									<ActivityCard data={d.attributes} key={d.id} />
								</li>
							))}
						</ul>
						<BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
						{!loading && items?.length == 0 && <div className="cs-center">There are no records to display</div>}
					</div>
				</div>
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>
		</ContentWrapper >
	);
}

export default Activity;
