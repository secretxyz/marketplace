import React, { useEffect, useState } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import Avatar from "./Profile/Avatar";
import CollectedItems from './Profile/CollectedItems';
import CreatedItems from './Profile/CreatedItems';
import Collections from './Profile/Collections';
import Raffles from './Profile/Raffles';
import RaffleTickets from './Profile/RaffleTickets';
import OffersMade from './Profile/OffersMade';
import OffersReceived from './Profile/OffersReceived';
import Transfer from './Profile/Transfer';
import Activity from './Profile/Activity';
import ProfileInfo from './Profile/ProfileInfo';
import Hidden from './Profile/Hidden';
import { useProfile, useProfileOther } from '../../hooks/useProfile';
import { getAccount, getSummaryAddress } from '../Helpers/Utils';
import PageLoader from '../Common/PageLoader';

const NavComponents = {
    "raffles": Raffles,
    "raffle-tickets": RaffleTickets,
    "collected": CollectedItems,
    "created": CreatedItems,
    "collections": Collections,
    "offers-made": OffersMade,
    "offers-received": OffersReceived,
    "transfer": Transfer,
    "activity": Activity,
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
        key: "raffle-tickets",
        isChecked: false
    },
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
        label: "Offers Made",
        icon: "fa-shopping-cart",
        key: "offers-made"
    },
    {
        label: "Offers Received",
        icon: "fa-receipt",
        key: "offers-received"
    },
    {
        label: "Transfers",
        icon: "fa-exchange-alt",
        key: "transfer"
    },
    {
        label: "Activity",
        icon: "fa-running",
        key: "activity"
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
    const { loading: submitting, result, refresh, like, report } = useProfileOther();
    const [navMenus, setNavMenus] = useState(NavMenus);
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
            window.history.replaceState(null, null, "/my-profile")
        }
    };

    const { loading, accountId, profile, fetchProfile } = useProfile();

    useEffect(() => {
        if (accountId === 0) {
            window.location.replace("/");
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
        refresh(accountId);
    }

    const onClickLike = () => {
        console.log("liking...");
    }

    const onClickShare = () => {
        console.log("sharing...");
    }

    const onClickReport = () => {
        console.log("sharing...");
    }

    useEffect(() => {
        fetchProfile(wallet || getAccount().wallet);
    }, [result])


    const refreshProfile = () => {
        fetchProfile(wallet || getAccount().wallet);
    }

    return (
        loading || submitting ? <PageLoader /> : <ContentWrapper>
            <div className="cs-height_100 cs-height_lg_70"></div>
            <div className="container">
                <div className="cs-cover_photo cs-bg" style={{ background: `url(${profile?.banner_picture_url || "img/cover-photo.jpeg"})` }}>
                    <div className="cs-profile_info_other">
                        <div className="cs-profile_info_head">
                            <a className="cs-style1 cs-btn" onClick={onClickRefresh}>
                                <span><i className="fas fa-redo fa-fw"></i></span>
                            </a>
                            <a className="cs-style1 cs-btn" onClick={onClickLike}>
                                <span><i className="fas fa-star fa-fw"></i></span>
                            </a>
                            <a className="cs-style1 cs-btn" onClick={onClickShare}>
                                <span><i className="fas fa-share fa-fw"></i></span>
                            </a>
                            <a className="cs-style1 cs-btn" onClick={onClickReport}>
                                <span><i className="fas fa-flag fa-fw"></i></span>
                            </a>
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
                                <div className="cs-name">{profile?.slug ?? getSummaryAddress(profile?.wallet)}</div>
                                <ul className="cs-profile_meta cs-mp0">
                                    <li>Followers (560)</li>
                                    <li>Following (56)</li>
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
                        <div className="cs-height_15 cs-height_lg_10"></div>
                        <ContentComponent accountId={accountId} profile={profile} refresh={refreshProfile} />
                    </div>
                </div>
            </div>
            <div className="cs-height_70 cs-height_lg_40"></div>
        </ContentWrapper>
    );
}

export default Profile;