import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useActivity } from "../../../hooks/useActivity";
import { APP_COLORS } from "../../Common/constants";
import ContentWrapper from '../../Layout/ContentWrapper';
import ActivityCard from "../Card/ActivityCard";

const Activity = ({ accountId }) => {
	const { loading, items, meta, fetchNext } = useActivity();
	const [filter, setFilter] = useState({ from: accountId });

	const handleScroll = (e) => {
		const bottom = (e.target.scrollHeight - e.target.scrollTop) - e.target.clientHeight;
		if (bottom <= 1 && !loading) {
			fetchNext(0, filter);
		}
	}

	useEffect(() => {
		fetchNext(1, filter);
	}, [])

	return (
		<ContentWrapper>
			<div className="cs-height_15 cs-height_lg_10"></div>
			<ul className="cs-activity_list cs-mp0 cs-cards_area" onScroll={handleScroll}>
				{items?.map(d => (
					<li key={d.id} >
						<ActivityCard data={d.attributes} key={d.id} />
					</li>
				))}
				<BeatLoader className="cs-loading" color={APP_COLORS.accent} loading={loading} size={15} />
				{!loading && items.length == 0 && <div className="cs-center_line">There are no records to display</div>}
			</ul>
		</ContentWrapper>
	);

}

export default Activity;
