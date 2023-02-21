import React, { Component } from 'react';

const Footer = () => {

	const onClickSubscribe = () => {

	}

	return (
		<footer className="cs-footer cs-style1">
			<div className="cs-height_20 cs-height_lg_20"></div>
			<div className="cs-footer_bottom">
				<div className="container">
					<div className="cs-footer_separetor"></div>
					<div className="cs-footer_bottom_in">
						<div className="cs-copyright">Copyright 2023. Created by SecretLabs.</div>
						<ul className="cs-footer_menu">
							<li><a href="/disclaimer">Disclaimer</a></li>
							<li><a href="/privacy-policy">Privacy Policy</a></li>
							<li><a href="/terms-condition">Terms & Conditions</a></li>
						</ul>
						<div className="cs-footer_social_btns">
							<a href="https://bearableguy.club" target="_blank"><i className="fas fa-mask fa-fw"></i></a>
							<a href="https://twitter.com/BearableguyClub" target="_blank"><i className="fab fa-twitter fa-fw"></i></a>
							<a href="https://discord.gg/VnNGWAAj3Q" target="_blank"><i className="fab fa-discord fa-fw"></i></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
