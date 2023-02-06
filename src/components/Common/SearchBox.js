import React, { useEffect, useState, useRef } from "react";
import { useSearch } from "../../hooks/useHomepage";
import { useOuterClick } from "../../hooks/useOuterClick";
import { getImageLink } from "../Helpers/Utils";

const SearchBox = ({ keyword, clear }) => {
    const { loading, nfts, collections, search } = useSearch();
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
        <div ref={innerRef} className={`cs-toggle_body ${active && (collections?.length > 0 || nfts?.length > 0) && "active"}`}>
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
                nfts?.length > 0 && <>
                    <h3>NFTs</h3>
                    <hr />
                    <ul>
                        {nfts?.map(d => {
                            const nft = d.attributes;
                            return <li key={d.id}>
                                <a href={`/nft/${nft.nft_tokenid}`}>
                                    <div className="cs-search_thumb"><img src={getImageLink(nft?.picture_url)} alt="Image" /></div>
                                    <div className="cs-search_right">{nft?.name}</div>
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