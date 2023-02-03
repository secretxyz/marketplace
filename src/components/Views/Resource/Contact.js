import React from 'react';
import ContentWrapper from "../../Layout/ContentWrapper";

const Contact = () => {
	return (
		<ContentWrapper>
			<div className="cs-height_90 cs-height_lg_80"></div>
			<section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
				<div className="container">
					<div className="text-center">
						<h1 className="cs-page_title">Contact Us</h1>
					</div>
				</div>
			</section>
			<div className="cs-height_40 cs-height_lg_30"></div>
			<div className="container">
				<div className="cs-contact_box">
					<div className="cs-section_heading cs-style4">
						<h2 className="cs-section_title">Drop Us Your Message</h2>
						<p className="cs-section_subtitle">Freely contact with us anytime. We're available here for you.</p>
					</div>
					<div className="cs-height_45 cs-height_lg_45"></div>
					<form className="cs-contact_form">
						<div className="row">
							<div className="col-lg-4">
								<div className="cs-form_field_wrap">
									<input type="text" className="cs-form_field" placeholder="Full Name*" required />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-4">
								<div className="cs-form_field_wrap">
									<input type="text" className="cs-form_field" placeholder="Your Email" required />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-4">
								<div className="cs-form_field_wrap">
									<input type="text" className="cs-form_field" placeholder="Your Discord*" required />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-12">
								<div className="cs-form_field_wrap">
									<input type="text" className="cs-form_field" placeholder="Write Subject" />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-12">
								<div className="cs-form_field_wrap">
									<textarea cols="30" rows="5" placeholder="Message..." className="cs-form_field"></textarea>
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-12">
								<button className="cs-btn cs-style1 cs-btn_lg"><span>Send Message</span></button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>
		</ContentWrapper>
	);
}

export default Contact;
