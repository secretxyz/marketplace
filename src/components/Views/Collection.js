import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';

const db = {
    // "thebearablebulls": {
    //     name: "The Bearable Bulls",
    //     description: "This is the Genesis NFT for Club XRPL NFTs and unlocks the most perks. Hand illustrated and randomly generated from over 200+ traits. From clean professional timid bulls, to extremely bullish and goofy, each randomly generated bull is unique and has its own personality. Only 10,000 Bearable Bull NFTs will be available, with 90% being held by holders already.",
    //     supply: "-",
    //     owners: "-",
    //     floor_price: "-",
    //     volume: "-",
    //     thumbnail_image: "img/others/top_collection01.jpg",
    //     cover_image: "img/bg/sample/bulls.png",
    // },
    "thebearableguys": {
        name: "Bearableguy Club",
        description: "Bearableguy Club #1 is the pre mint of our Bearableguy Club collection, containing 589 Unique Digital Art NFTs. Visit our website for more information.",
        supply: "589",
        owners: "239",
        floor_price: 79.39,
        volume: "23.5k",
        thumbnail_image: "img/others/top_collection02.jpg",
        cover_image: "img/bg/sample/bearableguys.png",
        ranking_json1: "rarity/rarity1.json",
        ranking_json2: "rarity/rarity2.json",
		website: "https://bearableguy.club/",
		twitter: "https://twitter.com/BearableguyClub",
		discord: "https://discord.gg/clubxrpl"
    },
    // "therichducks": {
    //     name: "The Rich Ducks Crypto Club",
    //     description: "A collection of 10,000 Rich Ducks who ignore the fud, and stay stuffing those bags! Over 200 traits, and various forms of bling make each duck unique! Collection curated in partnership with youtuber and musician XRPBagman. The Rich Ducks are a free mint triggered by holding a Bearable Bull NFT. Any remaining unclaimed supply will be available to the public via sale. Richest Ducks will have its own future utility, events, and future branding led by the Moon Commander XRP Bags after the public minting is complete.",
    //     supply: "-",
    //     owners: "-",
    //     floor_price: "-",
    //     volume: "-",
    //     thumbnail_image: "img/others/top_collection06.jpg",
    //     cover_image: "img/bg/sample/ducks.png",
    // },
    // "clubxbaes": {
    //     name: "Club X Baes",
    //     description: "The xBAE collection is the 3rd generative collection from Club X. Only 6900 Baes will be available. 40+ legendary characters. Core set randomly generated from over 150 unique traits. Good Baes, Bad Baes, Humans, Cyborgs, Aliens, there's a Bae for everyone.",
    //     supply: "-",
    //     owners: "-",
    //     floor_price: "-",
    //     volume: "-",
    //     thumbnail_image: "img/others/top_collection03.jpg",
    //     cover_image: "img/bg/sample/default.png",
    // },
    // "phoenixeggs": {
    //     name: "Phoenix Eggs",
    //     description: "Stunning procedurally generative 3d eggs. Created from several materials, patterns, and bases with each individual egg having its own identity. Phoenix Eggs aim to be a community and utility driven exploration on the XRPL.",
    //     supply: "-",
    //     owners: "-",
    //     floor_price: "-",
    //     volume: "-",
    //     thumbnail_image: "img/others/top_collection04.jpg",
    //     cover_image: "img/bg/sample/eggs.png",
    // },
    // "babyaperocketbrigade": {
    //     name: "Baby Ape Rocket Brigade",
    //     description: "More than a community, The Rocket Brigade aims to be a web3 universe. Baby Apes will exist in limited quantity on different blockchains featuring unique traits to each network. Each new adopted network represents a new planet in the universe.",
    //     supply: "-",
    //     owners: "-",
    //     floor_price: "-",
    //     volume: "-",
    //     thumbnail_image: "img/others/top_collection05.jpg",
    //     cover_image: "img/bg/sample/apes1.png",
    // }
}
class Collection extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        const { match } = this.props;
        const collection = match.params.collection;
        this.setState({
            data: db[collection]
        })        
    }

    clickedFilter = e => {
        e.preventDefault()
        $(e.target).toggleClass('active');
        $(e.target).parent().toggleClass('active');
    }

    render() {
        const { data } = this.state;
        if (data == null) {
            return (
                <Redirect to="/" />
            );
        }
        return (
            <ContentWrapper>
                <section className="collection-breadcrumb-area">
                    <div className="right-side">
                    <ul className="collection-social">
                        {data.twitter?<li>
                            <a href={data.website} target="_blank">
                                <i className="fab fi-sr-globe"></i>
                            </a>
                        </li>:<></>}
                        {data.twitter?<li>
                            <a href={data.twitter} target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>:<></>}
                        {data.discord?<li>
                            <a href={data.discord} target="_blank">
                                <i className="fab fa-discord"></i>
                            </a>
                        </li>:<></>}
                    </ul>
                    </div>
                    <div className="cover" style={{ backgroundImage: `url(${data.cover_image})` }} />
                    <div className="thumbnail" style={{ backgroundImage: `url(${data.thumbnail_image})` }} />
                </section>
                <div className="collection-metadata">
                    <h3 className="title">{ data.name }</h3>
                    <div className="summary row">
                        <div className="summary-item col-lg-3 col-6">
                            <h5 className="title">Items</h5>
                            <p>{ data.supply }</p>
                        </div>
                        <div className="summary-item col-lg-3 col-6">
                            <h5 className="title">Owners</h5>
                            <p>{ data.owners }</p>
                        </div>
                        <div className="summary-item col-lg-3 col-6">
                            <h5 className="title">Floor Price</h5>
                            <p>${ data.floor_price } <span>USD</span></p>
                        </div>
                        <div className="summary-item col-lg-3 col-6">
                            <h5 className="title">Trading Volume</h5>
                            <p>${ data.volume } <span>USD</span></p>
                        </div>
                    </div>
                    <div className="collection-description">
                        <p>{ data.description }</p>
                    </div>
                </div>

                {/* <!-- collections Section Start --> */}
                <div className="collections-body-section pb-140">
                    <div className="container">
                        <div className="collections-body-inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-4">
                                    <div className="collections-body-left">
                                        <form>
                                            <div className="collections-price-filter">
                                                <select name="PriceFilter" defaultValue="LowHigh">
                                                    <option value="LowHigh" >Rank: Low to High</option>
                                                    <option value="HighLow">Rank: High to Low</option>
                                                    {/* <option value="recentlyListed">Recently Listed</option>
                                                    <option value="Favorited">Most Favorited</option>
                                                    <option value="Favorited">Oldest</option> */}
                                                </select>
                                            </div>
                                            {/* <div className="collections-filter-checkbox-collaps">
                                                <div className="collapsible">
                                                    <button type="button" onClick={ this.clickedFilter }>Background</button>
                                                    <div className="content">
                                                        <div className="collections-filter-checkbox">
                                                            <label className="checkboxContainer">Blue <span>(23)</span>
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        
                                                        <div className="collections-filter-checkbox">
                                                            <label className="checkboxContainer">Green <span>(13)</span>
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        
                                                        <div className="collections-filter-checkbox">
                                                            <label className="checkboxContainer">Pink <span>(18)</span>
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        
                                                        <div className="collections-filter-checkbox">
                                                            <label className="checkboxContainer">Red <span>(24)</span>
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        
                                                        <div className="collections-filter-checkbox">
                                                            <label className="checkboxContainer">Rainbow <span>(8)</span>
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        
                                                        <div className="collections-filter-checkbox">
                                                            <label className="checkboxContainer">Yellow <span>(288)</span>
                                                                <input type="checkbox"/>
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8">
                                    <div className="collections-body-right">
                                        <div className="row">
                                            {
                                                [...Array(589)].map((e, i) =>{
                                                    return (
                                                        <div key={i} className="col-lg-3 col-sm-6">
                                                            <div className="collection-item">
                                                                <div className="collection-item-thumb">
                                                                    <img src={"rarity/nft/"+(i+1)+".png"} alt=""/>
                                                                </div>
                                                                <div className="collection-item-content">
                                                                    <h5 className="title">
                                                                        <a>#{i+1}</a> 
                                                                        <span className="price">Rank {i+1}</span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>                             
                                                    );
                                                })
                                            }                                                        
                                        </div>
                                        {/* <div className="gamfi-navigation">
                                            <ul>
                                                <li><a href="collection"><span className="fas fa-angle-left"></span></a></li>
                                                <li><a href="collection">1</a></li>
                                                <li><a className="active" href="collection">2</a></li>
                                                <li><a href="collection">3</a></li>
                                                <li><a href="collection">4</a></li>
                                                <li><a href="collection"><span className="fas fa-angle-right"></span></a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
                {/* <!-- collections Section End --> */}

            </ContentWrapper>
        );
    }

}

export default withRouter(Collection);
