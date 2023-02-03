import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import ConnectModal from "../Common/ConnectModal"
import accountStore from '../../store/account.store';
import SwitchMode from '../Common/SwitchMode';
import { setAccount, setAuthToken, getSummaryAddress } from '../Helpers/Utils';

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
	// Sub category Toggle
	$('.cs-subcategory_toggle').on('click', function () {
		$(this).toggleClass('active').siblings('ul').slideToggle();
	});

	// Global Toggle 
	$('.cs-toggle_btn').on('click', function () {
		$(this).parents('.cs-toggle_box').siblings().find('.cs-toggle_btn').removeClass('active').siblings('.cs-toggle_body').removeClass('active')
		$(this).toggleClass('active').siblings('.cs-toggle_body').toggleClass('active');
	});
	$('.cs-mobile_search_toggle').on('click', function () {
		$('.cs-search_wrap').toggleClass('active')
	})
}

const Header = () => {
	const { auth_token, account } = accountStore;

	useEffect(() => {
		mainNav();
	}, [auth_token]);

	const onLogout = () => {
		setAuthToken(null);
		setAccount(null);
		accountStore.setAuthToken(null);
		accountStore.setAccount(null);
		window.location.replace("/");
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

	const onClickCopyWallet = () => {
		navigator.clipboard.writeText(account?.wallet);
	}

	return (
		<header className="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
			<div className="cs-main_header">
				<div className="container-fluid">
					<div className="cs-main_header_in">
						<div className="cs-main_header_left">
							<a className="cs-site_branding" href="/"><img src="img/logo.png" alt="Logo" /></a>
						</div>
						<div className="cs-main_header_right">
							<div className="cs-search_wrap cs-toggle_box cs-profile_box">
								<form action="#" className="cs-search">
									<input type="text" className="cs-search_input" placeholder="Search" />
									<button className="cs-search_btn">
										<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M17.5 18L13.875 14.375" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</form>
								{/* <div className="cs-toggle_body active">
									<ul>
										<li><a href="/">Search1</a></li>
										<li><a href="/">Search2</a></li>
										<li><a href="/">Search3</a></li>
										<li><a href="/">Search4</a></li>
									</ul>
								</div> */}
							</div>
							<div className="cs-nav_wrap">
								<div className="cs-nav_out">
									<div className="cs-nav_in">
										<div className="cs-nav">
											<ul className="cs-nav_list">
												<li className="menu-item-has-children">
													<a href="/explorer-raffles">Explorer</a>
													<ul>
														<li><a href="/explorer-raffles">Raffles</a></li>
														<li><a href="/explorer-collections">Collections</a></li>
														<li><a href="/explorer-nfts">NFTs</a></li>
													</ul>
												</li>
												<li><a href="/drop">Drops</a></li>
												<li className="menu-item-has-children">
													<a href="/activity">Stats</a>
													<ul>
														<li><a href="/activity">Activity</a></li>
														<li><a href="/leaderboard">Leaderboard</a></li>
													</ul>
												</li>
												<li className="menu-item-has-children">
													<a href="/faq">Resources</a>
													<ul>
														<li><a href="/provably-fair">Provably Fair</a></li>
														<li><a href="/contact">Contact Us</a></li>
														<li><a href="/faq">FAQ</a></li>
													</ul>
												</li>
												<li className="cs-menu_footer_widget">
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
														<a href="https://twitter.com/BearableguyClub" target="_blank"><i className="fab fa-twitter fa-fw"></i></a>
														<a href="https://discord.gg/VnNGWAAj3Q" target="_blank"><i className="fab fa-discord fa-fw"></i></a>
													</div>
												</li>
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
									{auth_token ? <div className="cs-toggle_box cs-notification_box" hidden={true}>
										<div className="cs-toggle_btn cs-header_icon_btn cs-center">
											<i className="far fa-bell"></i>
											<span className="cs-btn_badge">8</span>
										</div>
										<div className="cs-toggle_body">
											<h3 className="cs-notification_title">Notifications 10</h3>
											<ul className="cs-notification_list">
												<li>
													<a href="#" className="cs-notification_item">
														<div className="cs-notification_thumb"><img src="img/nfts/img2.png" alt="Image" /></div>
														<div className="cs-notification_right">
															<p>@mark joshef purchased</p>
															<h4>Digital NFT Art</h4>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="cs-notification_item">
														<div className="cs-notification_thumb"><img src="img/nfts/img7.png" alt="Image" /></div>
														<div className="cs-notification_right">
															<p>@ellen capaso commented</p>
															<h4>Digital NFT Art</h4>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="cs-notification_item">
														<div className="cs-notification_thumb"><img src="img/avatar/avatar_1.png" alt="Image" /></div>
														<div className="cs-notification_right">
															<p>@steve boone started following you.</p>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="cs-notification_item">
														<div className="cs-notification_thumb"><img src="img/nfts/img25.png" alt="Image" /></div>
														<div className="cs-notification_right">
															<p>@mark jos just share</p>
															<h4>Digital NFT Art</h4>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="cs-notification_item">
														<div className="cs-notification_thumb"><img src="img/nfts/img15.png" alt="Image" /></div>
														<div className="cs-notification_right">
															<p>@richard steger purchased</p>
															<h4>Digital NFT Art</h4>
														</div>
													</a>
												</li>
											</ul>
											<div className="text-center">
												<a href="#" className="cs-btn cs-style1">
													<span>
														View More
														<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M13.4366 7.01471C13.7295 6.72181 13.7295 6.24694 13.4366 5.95404L8.66361 1.18107C8.37072 0.888181 7.89584 0.888181 7.60295 1.18107C7.31006 1.47397 7.31006 1.94884 7.60295 2.24173L11.8456 6.48438L7.60295 10.727C7.31006 11.0199 7.31006 11.4948 7.60295 11.7877C7.89584 12.0806 8.37072 12.0806 8.66361 11.7877L13.4366 7.01471ZM0.90625 7.23438H12.9062V5.73438H0.90625V7.23438Z" fill="currentColor" />
														</svg>
													</span>
												</a>
											</div>
										</div>
									</div> : <></>}
									{auth_token ? <div className="cs-toggle_box cs-profile_box">
										<div className="cs-toggle_btn cs-header_icon_btn cs-center" >
											<i className="far fa-user"></i>
										</div>
										<div className="cs-toggle_body">
											<div className="cs-user_info">
												{account?.username && <h3 className="cs-user_name">{account?.username}</h3>}
												{/* <h4 className="cs-user_balance">0 XRP</h4> */}
												<div className="cs-user_profile_link">
													<div className="cs-user_profile_link_in">
														{account?.wallet && <span>{getSummaryAddress(account?.wallet)}</span>}
														<button onClick={onClickCopyWallet}>
															<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M4.35381 4.15531L4.35156 5.74756V13.6256C4.35156 14.272 4.60837 14.892 5.06549 15.3491C5.52261 15.8063 6.1426 16.0631 6.78906 16.0631H13.2511C13.1346 16.3921 12.9191 16.6769 12.634 16.8784C12.349 17.0799 12.0086 17.1881 11.6596 17.1881H6.78906C5.84423 17.1881 4.93809 16.8127 4.26999 16.1446C3.6019 15.4765 3.22656 14.5704 3.22656 13.6256V5.74756C3.22656 5.01256 3.69681 4.38631 4.35381 4.15531ZM13.5391 2.18506C13.7607 2.18506 13.9801 2.22871 14.1848 2.31351C14.3896 2.39832 14.5756 2.52262 14.7323 2.67932C14.889 2.83601 15.0133 3.02204 15.0981 3.22678C15.1829 3.43152 15.2266 3.65095 15.2266 3.87256V13.6226C15.2266 13.8442 15.1829 14.0636 15.0981 14.2683C15.0133 14.4731 14.889 14.6591 14.7323 14.8158C14.5756 14.9725 14.3896 15.0968 14.1848 15.1816C13.9801 15.2664 13.7607 15.3101 13.5391 15.3101H6.78906C6.34151 15.3101 5.91229 15.1323 5.59582 14.8158C5.27935 14.4993 5.10156 14.0701 5.10156 13.6226V3.87256C5.10156 3.42501 5.27935 2.99578 5.59582 2.67932C5.91229 2.36285 6.34151 2.18506 6.78906 2.18506H13.5391ZM13.5391 3.31006H6.78906C6.63988 3.31006 6.4968 3.36932 6.39132 3.47481C6.28583 3.5803 6.22656 3.72337 6.22656 3.87256V13.6226C6.22656 13.9331 6.47856 14.1851 6.78906 14.1851H13.5391C13.6882 14.1851 13.8313 14.1258 13.9368 14.0203C14.0423 13.9148 14.1016 13.7717 14.1016 13.6226V3.87256C14.1016 3.72337 14.0423 3.5803 13.9368 3.47481C13.8313 3.36932 13.6882 3.31006 13.5391 3.31006Z" fill="currentColor" />
															</svg>
														</button>
													</div>
												</div>
											</div>
											<ul>
												<li><a href="/my-profile/raffles">My Raffles</a></li>
												<li><a href="/my-profile/raffle-tickets">My Tickets</a></li>
												<li><a href="/my-profile/collected">My NFTs</a></li>
												<li><a href="/my-profile/profile-info">My Profile</a></li>
											</ul>
											<div className="text-center">
												<a className="cs-btn cs-style1" onClick={() => onLogout()}>
													<span>Logout</span>
												</a>
											</div>
										</div>
									</div> : <></>}
									{!auth_token ? <button className="cs-btn cs-style1" onClick={() => { onConnectWallet() }}>
										<span>Connect Wallet</span>
									</button> : <></>}
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