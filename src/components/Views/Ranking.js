import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';

class Ranking extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <ContentWrapper>
                <section className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">XRPL NFT Rarity</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rarity-collection-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-title mb-40">
                                    <h2 className="title">Featured collections <img src="img/icons/title_icon01.png" alt=""/></h2>
                                </div>
                            </div>
                        </div>
                        <div  className="row top-collection-active">
                            <div className="col-xl-2">
                                <div className="rarity-collection-item">
                                    <div className="rarity-collection-item-thumb">
                                        <a href="collection/thebearableguys"><img src="img/others/top_collection02.jpg" alt=""/></a>
                                    </div>
                                    <div className="rarity-collection-item-content">
                                        <h5 className="title">
                                            <a href="collection">BearableguyClub</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rarity-collection-area area-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-title mb-40">
                                    <h2 className="title">Explore the latest collections <img src="img/icons/title_icon01.png" alt=""/></h2>
                                </div>
                            </div>
                        </div>
                        <div  className="row top-collection-active">
                            
                        </div>
                    </div>
                </section>

                <section className="rarity-collection-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-title mb-40">
                                    <h2 className="title">Top 7 day selling collections <img src="img/icons/title_icon01.png" alt=""/></h2>
                                </div>
                            </div>
                        </div>
                        <div  className="row top-collection-active">
                            
                        </div>
                    </div>
                </section>
            </ContentWrapper>
        );
    }

}

export default Ranking;
