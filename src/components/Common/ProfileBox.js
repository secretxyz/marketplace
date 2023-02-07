import React, { useEffect, useState } from 'react';
import accountStore from '../../store/account.store';
import { setAccount, setAuthToken, getSummaryAddress } from '../Helpers/Utils';

const ProfileBox = ({ account }) => {
    const [active, setActive] = useState();

    const onLogout = () => {
        setAuthToken(null);
        setAccount(null);
        accountStore.setAuthToken(null);
        accountStore.setAccount(null);
        window.location.replace("/");
    }

    const onClickCopyWallet = () => {
        navigator.clipboard.writeText(account?.wallet);
    }

    const onClickToggle = () => {
        setActive(!active);
    }

    return (<div className="cs-toggle_box cs-profile_box">
        <div className="cs-toggle_btn cs-header_icon_btn cs-center" onClick={onClickToggle}>
            <i className="far fa-user"></i>
        </div>
        <div className={`cs-toggle_body ${active && "active"}`}>
            <div className="cs-user_info">
                {account?.username && <h3 className="cs-user_name">{account?.username}</h3>}
                {/* <h4 className="cs-user_balance">0 XRP</h4> */}
                <div className="cs-user_profile_link">
                    <div className="cs-user_profile_link_in">
                        {account?.wallet && <span>{getSummaryAddress(account?.wallet)}</span>}
                        <button onClick={onClickCopyWallet}>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.35381 4.15531L4.35156 5.74756V13.6256C4.35156 14.272 4.60837 14.892 5.06549 15.3491C5.52261 15.8063 6.1426 16.0631 6.78906 16.0631H13.2511C13.1346 16.3921 12.9191 16.6769 12.634 16.8784C12.349 17.0799 12.0086 17.1881 11.6596 17.1881H6.78906C5.84423 17.1881 4.93809 16.8127 4.26999 16.1446C3.6019 15.4765 3.22656 14.5704 3.22656 13.6256V5.74756C3.22656 5.01256 3.69681 4.38631 4.35381 4.15531ZM13.5391 2.18506C13.7607 2.18506 13.9801 2.22871 14.1848 2.31351C14.3896 2.39832 14.5756 2.52262 14.7323 2.67932C14.889 2.83601 15.0133 3.02204 15.0981 3.22678C15.1829 3.43152 15.2266 3.65095 15.2266 3.87256V13.6226C15.2266 13.8442 15.1829 14.0636 15.0981 14.2683C15.0133 14.4731 14.889 14.6591 14.7323 14.8158C14.5756 14.9725 14.3896 15.0968 14.1848 15.1816C13.9801 15.2664 13.7607 15.3101 13.5391 15.3101H6.78906C6.34151 15.3101 5.91229 15.1323 5.59582 14.8158C5.27935 14.4993 5.10156 14.0701 5.10156 13.6226V3.87256C5.10156 3.42501 5.27935 2.99578 5.59582 2.67932C5.91229 2.36285 6.34151 2.18506 6.78906 2.18506H13.5391ZM13.5391 3.31006H6.78906C6.63988 3.31006 6.4968 3.36932 6.39132 3.47481C6.28583 3.5803 6.22656 3.72337 6.22656 3.87256V13.6226C6.22656 13.9331 6.47856 14.1851 6.78906 14.1851H13.5391C13.6882 14.1851 13.8313 14.1258 13.9368 14.0203C14.0423 13.9148 14.1016 13.7717 14.1016 13.6226V3.87256C14.1016 3.72337 14.0423 3.5803 13.9368 3.47481C13.8313 3.36932 13.6882 3.31006 13.5391 3.31006Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ul>
                <li><a href="/my-profile/raffles">My Raffles</a></li>
                <li><a href="/my-profile/raffle-tickets">My Tickets</a></li>
                <li><a href="/my-profile/collected">My NFTs</a></li>
                <li><a href="/my-profile/collections">My Collections</a></li>
                <li><a href="/my-profile/profile-info">My Profile</a></li>
            </ul>
            <div className="text-center">
                <a className="cs-btn cs-style1" onClick={() => onLogout()}>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </div>)
}

export default ProfileBox;