import React from 'react';
import Slider from "react-slick";
import { withTranslation, Trans } from 'react-i18next';
import IsoTopeGrid from "react-isotope";

const FILTERS = [
    { id: 0, label: "all", isChecked: true },
    { id: 1, label: "fashion", isChecked: false },
    { id: 2, label: "music", isChecked: false },
    { id: 3, label: "video", isChecked: false },
    { id: 4, label: "games", isChecked: false }
];

const ITEMS = [
    {
        id: "0",
        // likes: '1.2K',
        // image_url: 'img/explore/1.jpeg',
        // name: 'Art work #2134',
        // owner: {
        //     name: 'Johny E.',
        //     picture_url: 'img/avatar/avatar_12.png',
        // },
        // highest_bid_price: '2.5K XRP',
        filter: ['fashion']
    },
    {
        id: "1",
        likes: '3.3K',
        image_url: 'img/explore/2.jpeg',
        name: 'Cool octopus traveling',
        owner: {
            name: 'debit alex',
            picture_url: 'img/avatar/avatar_13.png',
        },
        highest_bid_price: '1.5K XRP',
        filter: ['music']
    },
    {
        id: "2",
        likes: '1.2K',
        image_url: 'img/explore/3.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['music']
    },
    {
        id: "3",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "4",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "5",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "6",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "7",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "8",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "9",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    },
    {
        id: "10",
        likes: '1.2K',
        image_url: 'img/explore/4.jpeg',
        name: 'Art work #2134',
        owner: {
            name: 'Johny E.',
            picture_url: 'img/avatar/avatar_14.png',
        },
        highest_bid_price: '2.5K XRP',
        filter: ['games']
    }
]


class NewItems extends React.Component {

    state = {
        filters: FILTERS,
        items: ITEMS,
    }

    // Filter change handler
    onFilter = id => {
        let filters = this.state.filters.map(f => {
            if (f.id === id) {
                return {
                    ...f,
                    isChecked: true
                };
            }

            return {
                ...f,
                isChecked: false
            };
        })
        this.setState({ filters });
    };


    componentDidMount() {
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="cs-section_heading cs-style2">
                        <div className="cs-section_left">
                            <h2 className="cs-section_title">New Items</h2>
                        </div>
                        <div className="cs-section_right">
                            <a href="explore-1.html" className="cs-btn cs-style1"><span>Explore More</span></a>
                        </div>
                    </div>
                    <div className="cs-isotop_filter cs-style1 cs-type1 cs-center">
                        <ul className="cs-mp0 cs-center">
                            {
                                this.state.filters.map(f => (
                                    <li className={f.isChecked ? 'active' : ''} key={`${f.id}`}>
                                        <button onClick={() => { this.onFilter(f.id); }}><span>{f.label}</span></button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="cs-height_45 cs-height_lg_45"></div>
                    <div className="cs-isotop cs-style1 cs-isotop_col_5 cs-has_gutter_30">
                        {/* <div className="cs-grid_sizer"></div> */}
                        <IsoTopeGrid
                            className="cs-isotope-container"
                            gridLayout={this.state.items} // gridlayout of cards
                            filters={this.state.filters} // list of selected filters
                        >
                            {this.state.items.map(item => (
                                <div key={`${item.id}`} className={`cs-isotop_item ${item.filter[0]}`}>
                                    <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                        <span className="cs-card_like cs-primary_color">
                                            <i className="fas fa-heart fa-fw"></i>
                                            2.1K
                                        </span>
                                        <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                            <img src="img/explore/4.jpeg" alt="Image" className="cs-zoom_item" />
                                        </a>
                                        <div className="cs-card_info">
                                            <a href="#" className="cs-avatar cs-white_bg">
                                                <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                                <span>johny e.</span>
                                            </a>
                                            <h3 className="cs-card_title"><a href="explore-details.html">Panda with fish</a></h3>
                                            <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.19 ETH 5/11</b></div>
                                            <hr />
                                            <div className="cs-card_footer">
                                                <span className="cs-card_btn_1" data-modal="#history_1">
                                                    <i className="fas fa-redo fa-fw"></i>
                                                    View History
                                                </span>
                                                <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </IsoTopeGrid>
                    </div>
                    {/* <div className="cs-isotop cs-style1 cs-isotop_col_5 cs-has_gutter_30">
                        <div className="cs-grid_sizer"></div>
                        <div className="cs-isotop_item fashion">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    2.1K
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/1.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                        <span>Johny E.</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Art work #2134</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.29 ETH 7/21</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item music">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    3.3K
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/2.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_13.png" alt="Avatar" />
                                        <span>debit alex</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Cool octopus traveling</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.24 ETH 4/17</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item fashion">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    3.1K
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/3.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                        <span>robert Alex</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Octopus eating icecrem</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.09 ETH 1/9</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item video">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    2.1K
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/4.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                        <span>johny e.</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Panda with fish</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.19 ETH 5/11</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item games">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    1.2K
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/5.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_13.png" alt="Avatar" />
                                        <span>austin R.</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Kawaii-bubble-tea</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.29 ETH 11/19</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item fashion">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    1.1k
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/6.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                        <span>robert</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Cute monsters hallo</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.19 ETH 7/13</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item music">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    2.2k
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/7.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_13.png" alt="Avatar" />
                                        <span>debit alex</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Cat-mascot-character</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.28 ETH 21/91</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item games">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    1.4k
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/8.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                        <span>debit alex</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Small kid with orange</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.17 ETH 14/23</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item music">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    1.9k
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/9.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_13.png" alt="Avatar" />
                                        <span>austin r.</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Digital Cat Illustration</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.09 ETH 10/91</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-isotop_item games">
                            <div className="cs-card cs-style4 cs-box_shadow cs-white_bg">
                                <span className="cs-card_like cs-primary_color">
                                    <i className="fas fa-heart fa-fw"></i>
                                    9.3k
                                </span>
                                <a href="explore-details.html" className="cs-card_thumb cs-zoom_effect">
                                    <img src="img/explore/10.jpeg" alt="Image" className="cs-zoom_item" />
                                </a>
                                <div className="cs-card_info">
                                    <a href="#" className="cs-avatar cs-white_bg">
                                        <img src="img/avatar/avatar_12.png" alt="Avatar" />
                                        <span>gallant j.</span>
                                    </a>
                                    <h3 className="cs-card_title"><a href="explore-details.html">Fictional character</a></h3>
                                    <div className="cs-card_price">Current Bid: <b className="cs-primary_color">0.06 ETH 11/109</b></div>
                                    <hr />
                                    <div className="cs-card_footer">
                                        <span className="cs-card_btn_1" data-modal="#history_1">
                                            <i className="fas fa-redo fa-fw"></i>
                                            View History
                                        </span>
                                        <span className="cs-card_btn_2" data-modal="#bid_1"><span>Place Bid</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default withTranslation('translations')(NewItems);