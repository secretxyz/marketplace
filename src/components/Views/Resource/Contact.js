import { HttpStatusCode } from 'axios';
import React from 'react';
import { useState } from 'react';
import SecretApi from '../../../service/SecretApi';
import MessageBox from '../../Common/MessageBox';
import ContentWrapper from "../../Layout/ContentWrapper";

const Contact = () => {
	const [message, setMessage] = useState({});
	const [valid, setValid] = useState(false);
	const [modal, setModal] = useState(false);

	const onChangeInfo = (event) => {
		let msg = {
			...message,
			[event.target.name]: event.target.value,
		};

		if (msg.fullname && msg.fullname.length > 0 &&
			msg.discord_name && msg.discord_name.length > 0 &&
			msg.subject && msg.subject.length > 0 &&
			msg.message && msg.message.length > 0
		) {
			setValid(true);
		} else {
			setValid(false);
		}

		setMessage(msg);
	}

	const onClickSend = async () => {
		if (!valid) {
			return;
		}

		let res = await SecretApi.sendMessage(message);
		if (res.status == HttpStatusCode.Ok) {
			setMessage({});
			setModal(true);
		}
	}

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
			<div className="container cs-center">
				<div className="cs-contact_box">
					<div className="cs-section_heading cs-style4">
						<h2 className="cs-section_title">Drop Us Your Message</h2>
						<p className="cs-section_subtitle">If you require launch services, have found a bug, or would like to suggest a collection to add, please feel free to reach out to us. We're here to help!</p>
					</div>
					<div className="cs-height_45 cs-height_lg_45"></div>
					<div className="cs-contact_form">
						<div className="row">
							<div className="col-lg-4">
								<div className="cs-form_field_wrap">
									<input name="fullname" type="text" className="cs-form_field" placeholder="Full Name*" value={message.fullname || ""} onChange={onChangeInfo} required />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-4">
								<div className="cs-form_field_wrap">
									<input name="email" type="email" className="cs-form_field" placeholder="Your Email" value={message.email || ""} onChange={onChangeInfo} />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-4">
								<div className="cs-form_field_wrap">
									<input name="discord_name" type="text" className="cs-form_field" placeholder="Your Discord*" value={message.discord_name || ""} required onChange={onChangeInfo} />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-12">
								<div className="cs-form_field_wrap">
									<input name="subject" type="text" className="cs-form_field" placeholder="Write Subject*" value={message.subject || ""} onChange={onChangeInfo} required />
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-12">
								<div className="cs-form_field_wrap">
									<textarea name="message" cols="30" rows="5" placeholder="Message..." className="cs-form_field" value={message.message || ""} onChange={onChangeInfo} required></textarea>
								</div>
								<div className="cs-height_20 cs-height_lg_20"></div>
							</div>
							<div className="col-lg-12 cs-center">
								{valid && <button className="cs-btn cs-style1 cs-btn_lg" onClick={onClickSend}>
									<span>Send Message</span>
								</button>}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cs-height_70 cs-height_lg_40"></div>

			{modal && <MessageBox
				title={"Success"}
				message={"Thank you for reaching out to us. \
					Our team will get in touch with you shortly."}
				closeModal={() => { setModal(false) }}
			/>}
		</ContentWrapper >
	);
}

export default Contact;
