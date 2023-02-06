import React, { useEffect, useState, useRef } from "react";
import { useSearch } from "../../hooks/useHomepage";
import { useOuterClick } from "../../hooks/useOuterClick";
import { getImageLink, getSummaryUsername } from "../Helpers/Utils";
import Avatar from "../Views/Profile/Avatar";

const SearchBox = ({ keyword, clear }) => {
    const { loading, nfts, collections, profiles, search } = useSearch();
    const [active, setActive] = useState();

    useEffect(() => {
        if (keyword) {
            search(keyword);
            setActive(true);
        } else {
            setActive(false);
        }
    }, [keyword])


    const innerRef = useOuterClick(ev => {
        setActive(false);
        clear();
    });

    return (
        <div ref={innerRef} className={`cs-toggle_body ${active && (collections?.length > 0 || profiles?.length > 0) && "active"}`}>
            {
                collections?.length > 0 && <><h3>Collections</h3>
                    <hr />
                    <ul>
                        {collections?.map(d => {
                            const collection = d.attributes;
                            return <li key={d.id}>
                                <a href={`/collection/${collection.slug}`}>
                                    <div className="cs-search_thumb"><img src={getImageLink(collection?.picture_url)} alt="Image" /></div>
                                    <span className="cs-search_right">{collection?.name}</span>
                                </a>
                            </li>
                        })}
                    </ul>
                </>
            }
            {
                profiles?.length > 0 && <>
                    <h3>NFTs</h3>
                    <hr />
                    <ul>
                        {profiles?.map(d => {
                            const profile = d.attributes;
                            return <li key={d.id}>
                                <a href={`/profile/${profile.wallet}`}>
                                    <div className="cs-search_thumb">
                                        <Avatar className="cs-profile_avatar_oval" {...{ name: profile.wallet, image: profile.picture_url }} />
                                    </div>
                                    <div className="cs-search_right">{getSummaryUsername(profile)}</div>
                                </a>
                            </li>
                        })}
                    </ul>
                </>
            }
        </div>
    )
}

export default SearchBox;