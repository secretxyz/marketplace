import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { observer } from 'mobx-react';
import xummStore from '../../../store/xumm.store';
import { useOffer } from '../../../hooks/useOffer';
import { SECRET_BROKER, SERVICE_BROKER_FEE } from '../../Common/constants';

const xrpl = require("xrpl");

const Steps = {
	Creating: 0,
	Waiting: 1,
	Completed: 2,
}

const CreateOfferModal = ({ activity, refreshDetails, closeModal }) => {
	const { loading, result, createOffer } = useOffer();
	const [step, setStep] = useState(Steps.Creating);
	const [offer, setOffer] = useState({});
	const [featured, setFeatured] = useState(false);
	const [agreed, setAgreed] = useState(false);
	const { subscription } = xummStore;
	const [qrshow, setQrshow] = useState(false);
	const [warning, setWarning] = useState();

	const getTitle = () => {
		switch (activity.activity) {
			case "transfer":
				return "Transfer NFT";
			case "list":
				return "List NFT";
			case "bid":
				return "Place a Bid";
			case "buy":
				return "Checkout";
			case "accept":
				return "Accept an Offer";
		}
	}

	const onChangeFeatured = () => {
		setFeatured(!featured);
	}

	const onChangeSettingAgree = () => {
		setAgreed(!agreed);
	}

	const offerBody = () => {
		switch (activity.activity) {
			case "transfer":
				return <div>
					<div className="cs-modal_header">
						<h2 className="cs-modal_title">{getTitle()}</h2>
					</div>
					<div className="cs-modal_card">
						<div className="cs-height_10 cs-height_lg_10"></div>
						<div className="cs-offer_form_field">
							<span className="cs-offer_field_title">Address</span>
							<input name="to" type="text" className="cs-form_field cs-white_bg"
								placeholder="Please input destination address" value={offer.to || ""} onChange={onChangeInfo} />
						</div>
						<div className="cs-height_15 cs-height_lg_15"></div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="flexCheckAgree" onChange={onChangeSettingAgree} checked={agreed} />
							<label className="form-check-label" htmlFor="flexCheckAgree">Recipient will need to accept offer to complete transfer.</label>
						</div>
						<hr />
						{warning && <label className="form-check-label text-warning cs-center">{warning}</label>}
						<button className="cs-btn cs-style1 cs-btn_lg w-100" onClick={onClickSubmit} disabled={!agreed}>
							<span>Submit</span>
						</button>
					</div>
				</div>;
			case "list":
				return <div>
					<div className="cs-modal_header">
						<h2 className="cs-modal_title">{getTitle()}</h2>
						{/* <div className="form-check form-switch cs-offer_form_switch">
							<input className="form-check-input" type="checkbox" checked={featured} onChange={onChangeFeatured} />
							<label id="feature_option" className="form-check-label cs-cursor_pointer" htmlFor="mode_switch">Feature Option ⓘ</label>
						</div> */}
					</div>
					<div className="cs-modal_card">
						<div className="cs-height_10 cs-height_lg_10"></div>
						<div className="row">
							<div className="col-lg-6">
								<div className="cs-offer_form_field">
									<span className="cs-offer_field_title">Price (XRP)</span>
									<input name="price" type="number" className="cs-form_field cs-white_bg"
										placeholder="Enter amount" value={offer?.price || ""} onChange={onChangeInfo} min={0} />
									<span className="cs-offer_field_description">Please input valid price</span>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="cs-offer_form_field">
									<span className="cs-offer_field_title">Expiration (Days)</span>
									<input name="expiration" type="number" className="cs-form_field cs-white_bg"
										placeholder="Enter duration" value={offer?.expiration || ""} onChange={onChangeInfo} min={0} />
									<span className="cs-offer_field_description">No expiration for empty value</span>
								</div>
								<div className="cs-height_15 cs-height_lg_10"></div>
							</div>
						</div>
						<div className="cs-height_5 cs-height_lg_5"></div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="flexCheckAgree" onChange={onChangeSettingAgree} checked={agreed} />
							<label className="form-check-label" htmlFor="flexCheckAgree">Please review your list configurations.</label>
						</div>
						<hr />
						{warning && <label className="form-check-label text-warning cs-center">{warning}</label>}
						<button className="cs-btn cs-style1 cs-btn_lg w-100" onClick={onClickSubmit} disabled={!agreed}>
							<span>Submit</span>
						</button>
					</div>
				</div>
			case "bid":
				return <div>
					<div className="cs-modal_header">
						<h2 className="cs-modal_title">{getTitle()}</h2>
					</div>
					<div className="cs-modal_card">
						<div className="cs-height_10 cs-height_lg_10"></div>
						<div className="row">
							<div className="col-lg-6">
								<div className="cs-offer_form_field">
									<span className="cs-offer_field_title">Price (XRP)</span>
									<input name="price" type="number" className="cs-form_field cs-white_bg"
										placeholder="Enter amount" value={offer?.price || ""} onChange={onChangeInfo} min={0} />
									<span className="cs-offer_field_description">Please input above 1 XRP</span>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="cs-offer_form_field">
									<span className="cs-offer_field_title">Expiration (Days)</span>
									<input name="expiration" type="number" className="cs-form_field cs-white_bg"
										placeholder="Enter duration" value={offer?.expiration || ""} onChange={onChangeInfo} min={0} />
									<span className="cs-offer_field_description">No expiration for empty value</span>
								</div>
								<div className="cs-height_15 cs-height_lg_10"></div>
							</div>
						</div>
						<div className="cs-height_5 cs-height_lg_5"></div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="flexCheckAgree" onChange={onChangeSettingAgree} checked={agreed} />
							<label className="form-check-label" htmlFor="flexCheckAgree">I agree to SecretLabs's Terms and Conditions.</label>
						</div>
						<hr />
						{warning && <label className="form-check-label text-warning cs-center">{warning}</label>}
						<button className="cs-btn cs-style1 cs-btn_lg w-100" onClick={onClickSubmit} disabled={!agreed}>
							<span>Submit</span>
						</button>
					</div>
				</div>
			case "buy":
				return <div>
					<div className="cs-modal_header">
						<h2 className="cs-modal_title">{getTitle()}</h2>
					</div>
					<div className="cs-modal_card">
						<div className="cs-height_10 cs-height_lg_10"></div>
						<div className="cs-bid_card">
							<div className="cs-bid_info">
								<ul>
									<li>
										<span>Bid Price</span>
										<b>{Number(activity.price) / 1000000} XRP</b>
									</li>
									<li>
										<span>Service Fee</span>
										<b>{SERVICE_BROKER_FEE} XRP</b>
									</li>
								</ul>
							</div>
							<hr />
							<div className="cs-bid_info">
								<ul>
									<li>
										<span>Total Pay</span>
										<b>{Number(activity.price) / 1000000 + SERVICE_BROKER_FEE} XRP</b>
									</li>
								</ul>
							</div>
						</div>
						<div className="cs-height_20 cs-height_lg_20"></div>
						<button className="cs-btn cs-style1 cs-btn_lg w-100" onClick={onClickSubmit}>
							<span>Submit</span>
						</button>
					</div>
				</div>
			case "accept":
				return <div>
					<div className="cs-modal_header">
						<h2 className="cs-modal_title">{getTitle()}</h2>
					</div>
					<div className="cs-modal_card">
						<div className="cs-height_10 cs-height_lg_10"></div>
						<div className="cs-bid_card">
							<div className="cs-bid_info">
								<ul>
									<li>
										<span>Bid Price</span>
										<b>{Number(activity.price) / 1000000} XRP</b>
									</li>
									<li>
										<span>Service Fee</span>
										<b>{SERVICE_BROKER_FEE} XRP</b>
									</li>
								</ul>
							</div>
							<hr />
							<div className="cs-bid_info">
								<ul>
									<li>
										<span>Possible Earning</span>
										<b>{Number(activity.price) / 1000000 - SERVICE_BROKER_FEE} XRP</b>
									</li>
								</ul>
							</div>
						</div>
						<div className="cs-height_20 cs-height_lg_20"></div>
						<button className="cs-btn cs-style1 cs-btn_lg w-100" onClick={onClickSubmit}>
							<span>Submit</span>
						</button>
					</div>
				</div>
		}
	}

	const waitingBody = () => {
		return <div>
			<h2 className="cs-modal_title">Connecting to XUMM wallet...</h2>
			<div className="cs-height_10 cs-height_lg_10"></div>
			<div>
				{subscription?.message || "Please wait a few moments until you receive the sign request in your XUMM."}
			</div>
			{subscription && !qrshow && <a className="cs-modal_sub_link" onClick={() => { setQrshow(true); }}>
				Didn't receive a notification? Click here!
			</a>}
			{subscription && qrshow && <div className="cs-modal_sign_area">
				<img className="cs-qr_img" src={subscription.data.xumm_qr_code} />
				<a href={subscription.data.xumm_app_url} target="_blank">XUMM</a>
			</div>}
			<div className="cs-height_5 cs-height_lg_5"></div>
		</div>
	}

	const resultBody = () => {
		return <div>
			<h2 className="cs-modal_title">Result</h2>
			<div className="cs-height_10 cs-height_lg_10"></div>
			<div>{result?.message}</div>
			<div className="cs-height_30 cs-height_lg_15"></div>
			<div className="cs-modal_footer">
				<button className="cs-btn cs-style1 cs-btn_sm cs-modal_ok text-center" onClick={close}>
					<span>OK</span>
				</button>
			</div>
			<div className="cs-height_5 cs-height_lg_5"></div>
		</div>
	}

	useEffect(() => {
		if (activity) {
			if (activity.activity == "cancel" ||
				(activity.activity == "buy" && activity.destination != SECRET_BROKER) ||
				(activity.activity == "accept" && activity.destination != SECRET_BROKER)) {
				createOffer({
					...offer,
					...activity
				});
				setStep(Steps.Waiting);
			}
		}
	}, [activity])

	useEffect(() => {
		if (result) {
			setStep(Steps.Completed);
		}
	}, [result])

	const close = () => {
		$("#create_offer_modal").removeClass("active");
		closeModal();
		if (step == Steps.Completed) {
			refreshDetails();
		}
	}

	const onChangeInfo = (event) => {
		let name = event.target.name;
		let value = event.target.value;

		if (name == "price" && Number(value) < 0) {
			value = 0;
		}

		if (name == "expiration" && !Number.isInteger(Number(value))) {
			return;
		}

		setOffer({
			...offer,
			[name]: value
		});
	}

	const onClickSubmit = () => {
		if (activity.activity == "transfer") {
			if (!xrpl.isValidAddress(offer.to)) {
				setWarning("Invalid destination address. Please confirm again.")
				return;
			}

			createOffer({
				...offer,
				...activity
			});
		} else if (activity.activity == "list") {
			if (Number(offer.price) <= 1 || isNaN(Number(offer.price))) {
				setWarning("Invalid sell price. Please confirm again.");
				return;
			}
			if (Number(offer.expiration) < 0) {
				setWarning("Invalid expiration days. Please confirm again.");
				return;
			}

			createOffer({
				...offer,
				featured,
				...activity,
			});
		} else if (activity.activity == "bid") {
			if (Number(offer.price) <= 1 || isNaN(Number(offer.price))) {
				setWarning("Invalid sell price. Please confirm again.");
				return;
			}
			if (Number(offer.expiration) < 0) {
				setWarning("Invalid expiration days. Please confirm again.");
				return;
			}

			createOffer({
				...offer,
				...activity,
			});
		} else if (activity.activity == "accept" || activity.activity == "buy") {
			createOffer({
				...offer,
				...activity,
			});
		}

		setWarning(null);
		setStep(Steps.Waiting);
	}

	return (
		<div className="cs-modal_wrap" id="create_offer_modal">
			<div className="cs-modal_overlay"></div>
			<div className="cs-modal_container">
				<div className="cs-modal_container_in">
					{step == Steps.Creating && <div className="cs-modal_close cs-center" onClick={close}>
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.9649 2.54988C12.3554 2.15936 12.3554 1.52619 11.9649 1.13567C11.5744 0.745142 10.9412 0.745142 10.5507 1.13567L11.9649 2.54988ZM0.550706 11.1357C0.160181 11.5262 0.160181 12.1594 0.550706 12.5499C0.94123 12.9404 1.5744 12.9404 1.96492 12.5499L0.550706 11.1357ZM1.96492 1.13567C1.5744 0.745142 0.94123 0.745142 0.550706 1.13567C0.160181 1.52619 0.160181 2.15936 0.550706 2.54988L1.96492 1.13567ZM10.5507 12.5499C10.9412 12.9404 11.5744 12.9404 11.9649 12.5499C12.3554 12.1594 12.3554 11.5262 11.9649 11.1357L10.5507 12.5499ZM10.5507 1.13567L0.550706 11.1357L1.96492 12.5499L11.9649 2.54988L10.5507 1.13567ZM0.550706 2.54988L10.5507 12.5499L11.9649 11.1357L1.96492 1.13567L0.550706 2.54988Z" fill="currentColor" />
						</svg>
					</div>}
					<div className="cs-modal">
						{step == Steps.Creating ? offerBody() :
							step == Steps.Waiting ? waitingBody() : resultBody()}
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CreateOfferModal);