import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';

class Profile extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <ContentWrapper>
                {/* <!-- breadcrumb-area --> */}
                <section className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">NFT Viewer</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- breadcrumb-area-end --> */}

                {/* <!-- author-profile-area --> */}
                <div className="author-profile-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 order-2 order-lg-0">
                                <aside className="author-profile-wrap">
                                    <div className="author-profile-thumb">
                                        <img src="./img/others/bearableguy.png" alt="" />
                                    </div>
                                    <div className="author-info">
                                        <h5 className="title">bearableguy.club <img src="./img/icons/star.svg" alt="" /></h5>
                                        <span>rE9paw......mnG7o</span>
                                        <p>NO AFFILIATION to the original bearableguy123 riddler we all love. Bearable Guy Club is an NFT community that enjoys XRP researchers and riddlers</p>
                                    </div>
                                    <ul className="author-collection">
                                        <li>
                                            <p>Collection</p>
                                            <span>201</span>
                                        </li>
                                        <li>
                                            <p>Creation</p>
                                            <span>235</span>
                                        </li>
                                    </ul>
                                    <div className="author-social">
                                        <h6 className="title">Follow Social Media :</h6>
                                        <ul>
                                            <li><a href="#"><div className="icon"><i className="fab fa-facebook-f"></i></div> Facebook / @BearableguyClub</a></li>
                                            <li><a href="#"><div className="icon"><i className="fab fa-facebook-messenger"></i></div> Messenger / @BearableguyClub</a></li>
                                            <li><a href="#"><div className="icon"><i className="fab fa-whatsapp"></i></div> Whatsapp / @BearableguyClub</a></li>
                                            <li><a href="#"><div className="icon"><i className="fab fa-youtube"></i></div> Youtube / @BearableguyClub</a></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>                                            
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="collection-item">
                                                <div className="collection-item-thumb">
                                                    <img src="./img/others/top_collection02.jpg" alt=""/>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title">
                                                        <a href="market-single.html">#1</a> 
                                                        <span className="price">Rank 1</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gamfi-navigation">
                                        <ul>
                                            <li><a href="profile"><span className="fas fa-angle-left"></span></a></li>
                                            <li><a href="profile">1</a></li>
                                            <li><a className="active" href="profile">2</a></li>
                                            <li><a href="profile">3</a></li>
                                            <li><a href="profile">4</a></li>
                                            <li><a href="profile"><span className="fas fa-angle-right"></span></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- author-profile-area-end --> */}
            </ContentWrapper>
        );
    }

}

export default Profile;