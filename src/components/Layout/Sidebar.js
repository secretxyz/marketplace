import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Badge } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

/** Component to display headings on sidebar */
const SidebarItemHeader = ({item}) => (
    <li className="nav-heading">
        <span><Trans i18nKey={item.translate}>{item.heading}</Trans></span>
    </li>
)

/** Normal items for the sidebar */
const SidebarItem = ({item, isActive}) => (
    <li className={ isActive ? 'active' : '' }>
        <Link to={item.path} title={item.name}>
            {item.label && <Badge tag="div" className="float-right" color={item.label.color}>{item.label.value}</Badge>}
            {item.icon && <em className={item.icon}></em>}
            <span><Trans i18nKey={item.translate}>{item.name}</Trans></span>
        </Link>
    </li>
)

/** Build a sub menu with items inside and attach collapse behavior */
const SidebarSubItem = ({item, isActive, handler, children, isOpen}) => (
    <li className={ isActive ? 'active' : '' }>
        <div className="nav-item" onClick={ handler }>
            {item.label && <Badge tag="div" className="float-right" color={item.label.color}>{item.label.value}</Badge>}
            {item.icon && <em className={item.icon}></em>}
            <span><Trans i18nKey={item.translate}>{item.name}</Trans></span>
        </div>
        <Collapse isOpen={ isOpen }>
            <ul id={item.path} className="sidebar-nav sidebar-subnav">
                { children }
            </ul>
        </Collapse>
    </li>
)

/** Component used to display a header on menu when using collapsed/hover mode */
const SidebarSubHeader = ({item}) => (
    <li className="sidebar-subnav-header">{item.name}</li>
)

class Sidebar extends Component {

    state = {
        collapse: {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-logo mb-25">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                </div>
                <div className="sidebar-icon">
                    <ul>
                        <li className="active"><a href="index.html"><i className="fi-sr-apps-delete"></i></a></li>
                        <li><a href="nft-live-bidding.html"><i className="fi-sr-book-alt"></i></a></li>
                        <li><a href="collections.html"><i className="fi-sr-butterfly"></i></a></li>
                        <li><a href="create-item.html"><i className="fi-sr-camping"></i></a></li>
                        <li><a href="category.html"><i className="fi-sr-crown"></i></a></li>
                        <li><a href="author-profile.html"><i className="fi-sr-settings"></i></a></li>
                        <li><a href="#" id="btnFullscreen"><i className="fi-sr-tool-marquee"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    actions: PropTypes.object,
    settings: PropTypes.object
};

const mapStateToProps = state => ({ settings: state.settings })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation('translations')(withRouter(Sidebar)));
