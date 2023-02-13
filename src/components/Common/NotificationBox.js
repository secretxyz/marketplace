import React, { useEffect, useState } from 'react';
import { useNotifications } from '../../hooks/useProfile';
import { useOuterClick } from "../../hooks/useOuterClick";
import NotificationRow from '../Views/Card/NotificationRow';

const NotificationBox = () => {
	const { loading, items, meta, fetchNext, confirm } = useNotifications();
	const [badge, setBadge] = useState();
	const [active, setActive] = useState();

	useEffect(() => {
		fetchNext(1);
	}, [])

	useEffect(() => {
		if (meta) {
			setBadge(meta.pagination.total);
		}
	}, [meta])

	const onClickToggle = () => {
		if (badge > 0) {
			setActive(!active);
		}
	}

	const onClickNotification = (id) => {
		confirm(id);
	}

	const innerRef = useOuterClick(ev => {
		setActive(false);
	});

	return (
		<div ref={innerRef} className="cs-toggle_box cs-notification_box">
			<div className="cs-toggle_btn cs-header_icon_btn cs-center" onClick={onClickToggle}>
				<i className="far fa-bell"></i>
				{badge ? <span className="cs-btn_badge">{badge}</span> : <></>}
			</div>
			<div className={`cs-toggle_body ${active && "active"}`}>
				<h3 className="cs-notification_title">Notifications</h3>
				<ul className="cs-notification_list">
					{items.map(d => (
						<li key={d.id} onClick={() => { onClickNotification(d.id) }}>
							<NotificationRow data={{ ...d.attributes, id: d.id }} />
						</li>
					))}
				</ul>
				{/* <div className="text-center">
                    <a href="#" className="cs-btn cs-style1">
                        <span>View More</span>
                    </a>
                </div> */}
			</div>
		</div>
	);
}

export default NotificationBox;