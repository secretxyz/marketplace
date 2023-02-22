import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import ContentWrapper from '../Layout/ContentWrapper';
import Avatar from "./Profile/Avatar";
import Claims from './Profile/Claims';
import CollectedItems from './Profile/CollectedItems';
import CreatedItems from './Profile/CreatedItems';
import Collections from './Profile/Collections';
import Raffles from './Profile/Raffles';
import RaffleTickets from './Profile/RaffleTickets';
import Offers from './Profile/Offers';
import OffersMade from './Profile/OffersMade';
import OffersReceived from './Profile/OffersReceived';
import Activity from './Profile/Activity';
import Favorites from './Profile/Favorites';
import Follows from './Profile/Follows';
import ProfileInfo from './Profile/ProfileInfo';
import Hidden from './Profile/Hidden';
import { useProfile } from '../../hooks/useProfile';
import { getAccount, getSummaryAddress, notify, isLoggedIn, getProfileImageLink } from '../Helpers/Utils';
import PageLoader from '../Common/PageLoader';
import ReportModal from '../Common/ReportModal';
import { getLikedItems, likeItem } from '../Helpers/Likes';
import { getReportedItems } from '../Helpers/Reports';

const NavComponents = {
    "raffles": Raffles,
    "raffle-tickets": RaffleTickets,
    // "claims": Claims,
    "collected": CollectedItems,
    "created": CreatedItems,
    "collections": Collections,
    "offers": Offers,
    // "offers-made": OffersMade,
    // "offers-received": OffersReceived,
    "activity": Activity,
    "favorites": Favorites,
    "follows": Follows,
    "profile-info": ProfileInfo,
    "hidden": Hidden,
}

const NavMenus = [
    {
        label: "Raffles",
        icon: "fa-award",
        key: "raffles",
        isChecked: true
    },
    {
        label: "Raffle Tickets",
        icon: "fa-ticket-alt",
        key: "raffle-tickets"
    },
    // {
    //     label: "Claims",
    //     icon: "far fa-inbox",
    //     key: "claims",
    //     self: true
    // },
    {
        label: "Collected",
        icon: "fa-list-ul",
        key: "collected"
    },
    {
        label: "Created",
        icon: "fa-pencil-alt",
        key: "created"
    },
    {
        label: "Collections",
        icon: "fa-project-diagram",
        key: "collections"
    },
    {
        label: "Offers",
        icon: "fa-receipt",
        key: "offers"
    },
    // {
    //     label: "Offers Made",
    //     icon: "fa-shopping-cart",
    //     key: "offers-made"
    // },
    // {
    //     label: "Offers Received",
    //     icon: "fa-receipt",
    //     key: "offers-received"
    // },
    {
        label: "Activity",
        icon: "fa-running",
        key: "activity"
    },
    {
        label: "Favorites",
        icon: "fa-heart",
        key: "favorites"
    },
    {
        label: "Follows",
        icon: "fa-star",
        key: "follows"
    },
    {
        label: "Profile Info",
        icon: "fa-user",
        key: "profile-info",
        self: true
    },
    {
        label: "Hidden",
        icon: "fa-eye",
        key: "hidden",
        self: true
    }
]

const Profile = (props) => {
    const { wallet, menu } = props.match.params;
    const { loading, accountId, profile, fetchProfile, reload, refresh, like } = useProfile();
    const [navMenus, setNavMenus] = useState(NavMenus);
    const [liked, setLiked] = useState(false);
    const [reported, setReported] = useState(false);
    const [reporting, setReporting] = useState(false);

    const selectedMenu = navMenus.find(m => m.isChecked);

    const ContentComponent = NavComponents[selectedMenu.key];

    // Filter change handler
    const onFilter = label => {
        let menus = navMenus.map(m => {
            if (m.label === label) {
                return { ...m, isChecked: true };
            }
            return { ...m, isChecked: false };
        })
        setNavMenus(menus);

        // change url
        if (menu) {
            window.history.replaceState(null, null, "/my-profile/")
        }
    };

    useEffect(() => {
        if (accountId === 0) {
            window.location.replace("/");
            return;
        }

        if (accountId) {
            if (isLikeAccount(accountId)) {
                setLiked(true);
            }
            if (isReportAccount(accountId)) {
                setReported(true);
            }
        }
    }, [accountId]);

    useEffect(() => {
        if (menu) {
            // check menu validation
            var valid = navMenus.filter(m => { return m.key === menu });
            if (!valid.length) {
                window.location.replace("/my-profile");
                return;
            }

            let menus = navMenus.map(m => {
                if (m.key === menu) {
                    return { ...m, isChecked: true };
                }
                return { ...m, isChecked: false };
            })
            setNavMenus(menus);
        }

        fetchProfile(wallet || getAccount().wallet);
    }, [])

    const onClickRefresh = () => {
        const res = refresh(accountId);
        if (res) {
            refreshProfile();
        }
    }

    const onClickLike = async () => {
        // like
        const res = await like(accountId);
        if (res) {
            likeItem("account", accountId, res.result);
            if (res.result == 1) {
                setLiked(true);
            } else {
                setLiked(false);
            }
            refreshProfile();
        }
    }

    const onClickShare = () => {
        navigator.clipboard.writeText(`https://secretmarket.xyz/profile/${getAccount().wallet}`);
        notify("The profile link has been copied.");
    }

    useEffect(() => {
        if (reporting) {
            $("#report_modal").toggleClass("active");
        }
    }, [reporting])

    const onClickReport = () => {
        if (reported) {
            return;
        }
        setReporting(true);
    }

    const onClickCopyWallet = () => {
        let address = wallet;
        if (isOwner()) {
            address = getAccount()?.wallet;
        }
        navigator.clipboard.writeText(address);
        notify("The wallet address has been copied.");
    }

    const refreshProfile = () => {
        reload(wallet || getAccount().wallet);
    }

    const isOwner = () => {
        if (!isLoggedIn()) {
            return true;
        }

        return accountId == getAccount().id;
    }

    const isLikeAccount = (id) => {
        let accounts = getLikedItems("account");
        if (accounts.includes(id)) {
            return true;
        }
        return false;
    }

    const isReportAccount = (id) => {
        let accounts = getReportedItems("account");
        if (accounts.includes(id)) {
            return true;
        }
        return false;
    }

    return (
        loading ? <PageLoader /> : <ContentWrapper>
            <div className="cs-height_100 cs-height_lg_70"></div>
            <div className="container">
                <div className="cs-cover_photo cs-bg" style={{ background: `url(${getProfileImageLink(profile?.banner_picture_url) || "img/cover-photo.jpeg"})` }}>
                    <div className="cs-profile_info_other cs-box_shadow">
                        <div className="cs-profile_info_head">
                            <a id="account_refresh" className="cs-style1 cs-btn" onClick={onClickRefresh}>
                                <span><i className="fas fa-redo fa-fw"></i></span>
                            </a>
                            <ReactTooltip anchorId="account_refresh" className="cs-modal_tooltip" place="bottom" content="Refresh profile information" />
                            {!isOwner() && <a id="account_follow" className="cs-style1 cs-btn" onClick={onClickLike}>
                                <span><i className={`${liked ? "fas" : "far"} fa-star fa-fw`}></i></span>
                            </a>}
                            <ReactTooltip anchorId="account_follow" className="cs-modal_tooltip" place="bottom" content={liked ? "Unfollow account" : "Follow account"} />
                            <a id="account_share" className="cs-style1 cs-btn" onClick={onClickShare}>
                                <span><i className="fas fa-share-alt fa-fw"></i></span>
                            </a>
                            <ReactTooltip anchorId="account_share" className="cs-modal_tooltip" place="bottom" content="Copy profile link" />
                            {!isOwner() && <a id="account_report" className="cs-style1 cs-btn" onClick={onClickReport}>
                                <span><i className={`${reported ? "fas" : "far"} fa-flag fa-fw`}></i></span>
                            </a>}
                            <ReactTooltip anchorId="account_report" className="cs-modal_tooltip" place="bottom" content={reported ? "You have already reported this account" : "Report illegal material"} />
                        </div>
                    </div>
                </div>
                <div className="cs-profile_wrap">
                    <div className="cs-profile_left">
                        <div className="cs-profile_sidebar cs-white_bg cs-box_shadow">
                            <div className="cs-profile_info">
                                <div className="cs-profile_pic">
                                    <Avatar className="cs-profile_avatar" {...{ name: profile?.wallet, image: profile?.picture_url }} />
                                </div>
                                <h3 className="cs-profile_title">{profile?.username}</h3>
                                <div className="cs-name">
                                    {profile?.slug ?? getSummaryAddress(profile?.wallet)}
                                    <button id="account_wallet" onClick={onClickCopyWallet}>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.35381 4.15531L4.35156 5.74756V13.6256C4.35156 14.272 4.60837 14.892 5.06549 15.3491C5.52261 15.8063 6.1426 16.0631 6.78906 16.0631H13.2511C13.1346 16.3921 12.9191 16.6769 12.634 16.8784C12.349 17.0799 12.0086 17.1881 11.6596 17.1881H6.78906C5.84423 17.1881 4.93809 16.8127 4.26999 16.1446C3.6019 15.4765 3.22656 14.5704 3.22656 13.6256V5.74756C3.22656 5.01256 3.69681 4.38631 4.35381 4.15531ZM13.5391 2.18506C13.7607 2.18506 13.9801 2.22871 14.1848 2.31351C14.3896 2.39832 14.5756 2.52262 14.7323 2.67932C14.889 2.83601 15.0133 3.02204 15.0981 3.22678C15.1829 3.43152 15.2266 3.65095 15.2266 3.87256V13.6226C15.2266 13.8442 15.1829 14.0636 15.0981 14.2683C15.0133 14.4731 14.889 14.6591 14.7323 14.8158C14.5756 14.9725 14.3896 15.0968 14.1848 15.1816C13.9801 15.2664 13.7607 15.3101 13.5391 15.3101H6.78906C6.34151 15.3101 5.91229 15.1323 5.59582 14.8158C5.27935 14.4993 5.10156 14.0701 5.10156 13.6226V3.87256C5.10156 3.42501 5.27935 2.99578 5.59582 2.67932C5.91229 2.36285 6.34151 2.18506 6.78906 2.18506H13.5391ZM13.5391 3.31006H6.78906C6.63988 3.31006 6.4968 3.36932 6.39132 3.47481C6.28583 3.5803 6.22656 3.72337 6.22656 3.87256V13.6226C6.22656 13.9331 6.47856 14.1851 6.78906 14.1851H13.5391C13.6882 14.1851 13.8313 14.1258 13.9368 14.0203C14.0423 13.9148 14.1016 13.7717 14.1016 13.6226V3.87256C14.1016 3.72337 14.0423 3.5803 13.9368 3.47481C13.8313 3.36932 13.6882 3.31006 13.5391 3.31006Z" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                                <ReactTooltip anchorId="account_wallet" className="cs-modal_tooltip" place="bottom" content="Copy wallet address" />
                                <ul className="cs-profile_meta cs-mp0">
                                    <li>Following ({profile?.followings})</li>
                                    <li>Followers ({profile?.followers})</li>
                                </ul>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <ul className="cs-profile_nav cs-mp0">
                                {
                                    navMenus.map((m, k) => (
                                        (!m.self || (m.self && accountId == getAccount().id)) &&
                                        <li key={k}>
                                            <a className={m.isChecked ? 'active' : ''} onClick={() => { onFilter(m.label) }}>
                                                <span><i className={`fas ${m.icon}`}></i>{m.label}</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="cs-profile_right">
                        {/* {profile?.bio && <div className="cs-profile_bio">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                {profile.bio}
                            </div>
                        </div>} */}
                        <ContentComponent accountId={accountId} profile={profile} refresh={refreshProfile} />
                    </div>
                </div>
            </div>
            <div className="cs-height_70 cs-height_lg_40"></div>
            {reporting && <ReportModal data={{ account: accountId }}
                closeModal={(res) => { setReporting(false); setReported(res); }} />}
        </ContentWrapper>
    );
}

export default Profile;