import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import ConnectModal from "../Common/ConnectModal"
import accountStore from '../../store/account.store';
import SwitchMode from '../Common/SwitchMode';
import NotificationBox from '../Common/NotificationBox';
import ProfileBox from '../Common/ProfileBox';
import SearchBox from '../Common/SearchBox';

const mainNav = () => {
	$('.cs-nav').append('<span class="cs-menu_toggle"><span></span></span>');
	$('.menu-item-has-children').append(
		'<span class="cs-menu_dropdown_toggle"></span>'
	);
	$('.cs-menu_toggle').on('click', function () {
		$(this)
			.toggleClass('cs-toggle_active')
			.siblings('.cs-nav_list')
			.slideToggle();
	});
	$('.cs-menu_dropdown_toggle').on('click', function () {
		$(this).toggleClass('active').siblings('ul').slideToggle();
		$(this).parent().toggleClass('active');
	});
	// Search Toggle
	$('.cs-search_toggle').on('click', function () {
		$(this).toggleClass('active');
		$('.cs-search_wrap').toggleClass('active');
	});
	$('.cs-search_close, .cs-nav_overlay').on('click', function () {
		$('.cs-search_toggle').removeClass('active');
		$('.cs-search_wrap').removeClass('active');
	});
	$('.cs-mobile_search_toggle').on('click', function () {
		$('.cs-search_wrap').toggleClass('active')
	})
}

const Header = () => {
	const { auth_token, account, theme_mode } = accountStore;
	const [keyword, setKeyword] = useState();

	useEffect(() => {
		mainNav();
	}, [auth_token]);

	const onChangeKeyword = (event) => {
		setKeyword(event.target.value);
	}

	const [connecting, setConnecting] = useState(false);
	useEffect(() => {
		if (connecting) {
			$("#connect_modal").toggleClass("active");
		}
	}, [connecting])

	const onConnectWallet = () => {
		setConnecting(true);
	}

	return (
		<header className="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
			<div className="cs-main_header">
				<div className="container-fluid">
					<div className="cs-main_header_in">
						<div className="cs-main_header_left">
							<a className="cs-site_branding" href="/">
								<img src="img/logo.png" alt="Logo" />
							</a>
						</div>
						<div className="cs-main_header_right">
							<div className="cs-search_wrap cs-toggle_box cs-profile_box">
								<div className="cs-search">
									<input type="text" className="cs-search_input" placeholder="Search" value={keyword || ""} onChange={onChangeKeyword} />
									<button className="cs-search_btn">
										<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M17.5 18L13.875 14.375" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</div>
								<SearchBox keyword={keyword} clear={() => {
									setKeyword("");
								}} />
							</div>
							<div className="cs-nav_wrap">
								<div className="cs-nav_out">
									<div className="cs-nav_in">
										<div className="cs-nav">
											<ul className="cs-nav_list">
												<li className="menu-item-has-children">
													<a href="/explorer-collections">Explorer</a>
													<ul>
														<li><a href="/explorer-collections">Collections</a></li>
														<li><a href="/explorer-nfts">NFTs</a></li>
													</ul>
												</li>
												<li className="menu-item"><a href="/drop">Drops</a></li>
												<li className="menu-item">
													<a href="/activity">Activity</a>
												</li>
												<li className="menu-item">
													<a href="/contact">Contact Us</a>
												</li>
												{/* <li className="cs-menu_footer_widget">
													<form className="cs-footer_newsletter">
														<input type="text" placeholder="Subscribe to our newsletter" className="cs-newsletter_input" />
														<button className="cs-newsletter_btn">
															<svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M24.7014 9.03523C25.0919 8.64471 25.0919 8.01154 24.7014 7.62102L18.3374 1.25706C17.9469 0.866533 17.3137 0.866533 16.9232 1.25706C16.5327 1.64758 16.5327 2.28075 16.9232 2.67127L22.5801 8.32812L16.9232 13.985C16.5327 14.3755 16.5327 15.0087 16.9232 15.3992C17.3137 15.7897 17.9469 15.7897 18.3374 15.3992L24.7014 9.03523ZM0.806641 9.32812H23.9943V7.32812H0.806641V9.32812Z" fill="white" />
															</svg>
														</button>
													</form>
													<div className="cs-footer_social_btns">
														<a href="https://bearableguy.club" target="_blank"><i className="fas fa-mask fa-fw"></i></a>
														<a href="https://twitter.com/SecretLabsXRPL" target="_blank"><i className="fab fa-twitter fa-fw"></i></a>
														<a href="https://discord.gg/VnNGWAAj3Q" target="_blank"><i className="fab fa-discord fa-fw"></i></a>
													</div>
												</li> */}
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="cs-header_btns_wrap">
								<div className="cs-header_btns">
									<SwitchMode />
									<div className="cs-header_icon_btn cs-center cs-mobile_search_toggle">
										<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M17.5 18L13.875 14.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									{auth_token && <NotificationBox accountId={account?.id} />}
									{auth_token && <ProfileBox account={account} />}
									{!auth_token && <button className="cs-btn cs-style1" onClick={() => { onConnectWallet() }}>
										<span>Connect Wallet</span>
									</button>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{connecting && <ConnectModal closeModal={() => { setConnecting(false) }} />}
		</header>
	);
}

export default observer(Header);