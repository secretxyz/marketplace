import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { observer } from 'mobx-react';
import { useRaffle } from '../../../hooks/useRaffle';
import { getDateTimeWithFormat } from '../../Helpers/Utils';

const SellOptions = [
	{ id: 1, label: "25%", isChecked: false },
	{ id: 2, label: "50%", isChecked: false },
	{ id: 3, label: "75%", isChecked: false },
	{ id: 4, label: "100%", isChecked: true },
];

const Steps = {
	Creating: 0,
	Waiting: 1,
	Completed: 2,
}

const CreateRaffleModal = ({ nft, refreshDetails, closeModal }) => {
	const { creating, result, createRaffle } = useRaffle();
	const [step, setStep] = useState(Steps.Creating);
	const [raffle, setRaffle] = useState({ total_ticket_price: "", ticket_count: "", raffle_duration: "", sell_option: 4 });
	const [sellOptions, setSellOptions] = useState(SellOptions);
	const [descriptions, setDescriptions] = useState({
		total_ticket_price: "Possible earning 0 XRP",
		ticket_count: "0 XRP per Ticket",
		raffle_duration: `Raffle will end ${getDateTimeWithFormat(new Date())}`
	});
	const [featured, setFeatured] = useState(false);
	const [agreed, setAgreed] = useState(false);

	useEffect(() => {
		if (result) {
			setStep(Steps.Completed);
		}
	}, [result])

	const close = () => {
		$("#create_raffle_modal").removeClass("active");
		closeModal();
		if (step == Steps.Completed) {
			refreshDetails();
		}
	}

	const onChangeInfo = (event) => {
		let name = event.target.name;
		let value = Number(event.target.value);
		if (value < 0) {
			value = 0
		}
		setRaffle({
			...raffle,
			[name]: value
		});

		switch (name) {
			case "total_ticket_price":
				setDescriptions({
					...descriptions,
					total_ticket_price: `Possible earning ${(value * (raffle.sell_option / 4) * 0.9411).toFixed(2)} XRP`,
					ticket_count: `${(value / Number(raffle.ticket_count)).toFixed(2)} XRP per Ticket`
				})
				break;
			case "ticket_count":
				setDescriptions({
					...descriptions,
					ticket_count: `${(Number(raffle.total_ticket_price) / value).toFixed(2)} XRP per Ticket`
				})
				break;
			case "raffle_duration":
				let dt = new Date();
				dt.setDate(new Date().getDate() + value);
				setDescriptions({
					...descriptions,
					raffle_duration: `Raffle will end ${getDateTimeWithFormat(dt)}`
				})
				break;
		}
	}

	const onClickSubmit = () => {
		if (Number(raffle.total_ticket_price) < 1 ||
			Number(raffle.ticket_count) < 1 ||
			Number(raffle.raffle_duration) < 1) {
			return;
		}

		let data = { ...raffle, nft, featured }
		createRaffle(data)
		setStep(Steps.Waiting);
	};

	const onSellOption = id => {
		let options = sellOptions.map(f => {
			if (f.id === id) {
				setRaffle({ ...raffle, sell_option: f.id });
				setDescriptions({
					...descriptions,
					total_ticket_price: `Possible earning ${(raffle.total_ticket_price * (f.id / 4) * 0.9411).toFixed(2)} XRP`,
				})
				return { ...f, isChecked: true };
			}
			return { ...f, isChecked: false };
		})
		setSellOptions(options);
	};

	const onChangeFeatured = () => {
		setFeatured(!featured);
	}

	const onChangeSettingAgree = () => {
		setAgreed(!agreed);
	}

	return (
		<div className="cs-modal_wrap" id="create_raffle_modal">
			<div className="cs-modal_overlay"></div>
			<div className="cs-modal_container">
				<div className="cs-modal_container_in">
					<div className="cs-modal_close cs-center" onClick={close}>
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.9649 2.54988C12.3554 2.15936 12.3554 1.52619 11.9649 1.13567C11.5744 0.745142 10.9412 0.745142 10.5507 1.13567L11.9649 2.54988ZM0.550706 11.1357C0.160181 11.5262 0.160181 12.1594 0.550706 12.5499C0.94123 12.9404 1.5744 12.9404 1.96492 12.5499L0.550706 11.1357ZM1.96492 1.13567C1.5744 0.745142 0.94123 0.745142 0.550706 1.13567C0.160181 1.52619 0.160181 2.15936 0.550706 2.54988L1.96492 1.13567ZM10.5507 12.5499C10.9412 12.9404 11.5744 12.9404 11.9649 12.5499C12.3554 12.1594 12.3554 11.5262 11.9649 11.1357L10.5507 12.5499ZM10.5507 1.13567L0.550706 11.1357L1.96492 12.5499L11.9649 2.54988L10.5507 1.13567ZM0.550706 2.54988L10.5507 12.5499L11.9649 11.1357L1.96492 1.13567L0.550706 2.54988Z" fill="currentColor" />
						</svg>
					</div>
					<div className="cs-modal">
						{step == Steps.Creating ? <div>
							<div className="cs-modal_header">
								<h2 className="cs-modal_title">Create Raffle</h2>
								<div className="form-check form-switch cs-offer_form_switch">
									<input className="form-check-input" type="checkbox" checked={featured} onChange={onChangeFeatured} />
									<label id="feature_option" className="form-check-label cs-cursor_pointer" htmlFor="mode_switch">Feature Option ⓘ</label>
								</div>
								<ReactTooltip
									anchorId="feature_option"
									place="bottom"
									className="cs-modal_tooltip"
									content={<div>You have chosen the Featured Raffle option.<br />
										This carries a NON-REFUNDABLE 20 XRP fee, regardless of the raffle outcome. <br />
										To confirm first sign the 20 XRP payment followed by the Raffle Confirmation Accept Offer.</div>}
								/>
							</div>
							<div className="cs-height_10 cs-height_lg_10"></div>
							<div className="row">
								<div className="col-lg-6">
									<div className="cs-offer_form_field">
										<span className="cs-offer_field_title">Total Raffle Price</span>
										<input name="total_ticket_price" type="number" className="cs-form_field cs-white_bg"
											placeholder="Enter price" value={raffle?.total_ticket_price || ""} onChange={onChangeInfo} min={1} />
										<span className="cs-offer_field_description">{descriptions["total_ticket_price"]}</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
									<div className="cs-offer_form_field">
										<span className="cs-offer_field_title">Ticket Count</span>
										<input name="ticket_count" type="number" className="cs-form_field cs-white_bg"
											placeholder="Enter count" value={raffle?.ticket_count || ""} onChange={onChangeInfo} min={1} />
										<span className="cs-offer_field_description">{descriptions["ticket_count"]}</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
								</div>
								<div className="col-lg-6">
									<div className="cs-offer_form_field">
										<span id="minimum_sales" className="cs-offer_field_title cs-cursor_pointer">Minimum Sales ⓘ</span>
										<ReactTooltip
											anchorId="minimum_sales"
											place="bottom"
											className="cs-modal_tooltip"
											content={<div>
												This is the % of raffle entries to confirm your raffle. <br />
												Once a raffle is confirmed it CANNOT be canceled and the NFT will be transferred to a winner regardless of any future entries. <br />
												If raffle is not confirmed, and does not reach the minimum entries, your raffle will be canceled and NFT transferred back to your account.
											</div>}
										/>
										<div className="cs-isotop_filter cs-style1 cs-center cs-isotop_filter_sell_option">
											<ul className="cs-mp0 cs-center">
												{
													sellOptions.map(f => (
														<li className={f.isChecked ? 'active' : ''} key={`${f.id}`}>
															<button onClick={() => { onSellOption(f.id); }}><span>{f.label}</span></button>
														</li>
													))
												}
											</ul>
										</div>
										<span className="cs-offer_field_description">Minimum ticket sales to activate</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
									<div className="cs-offer_form_field">
										<span id="raffle_duration" className="cs-offer_field_title">Raffle Duration</span>
										{/* <ReactTooltip
											anchorId="raffle_duration"
											place="bottom"
											content="Duration to enter raffle"
										/> */}
										<input name="raffle_duration" type="number" className="cs-form_field cs-white_bg"
											placeholder="Enter duration" value={raffle?.raffle_duration || ""} onChange={onChangeInfo} min={1} />
										<span className="cs-offer_field_description">{descriptions["raffle_duration"]}</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
								</div>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="flexCheckAgree" onChange={onChangeSettingAgree} checked={agreed} />
								<label className="form-check-label" htmlFor="flexCheckAgree">Please review your raffle settings. Raffles cannot be cancelled unless timer ends and reserve is not met. No exceptions!</label>
							</div>
							<div className="cs-height_15 cs-height_lg_15"></div>
							<button className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickSubmit} disabled={!agreed}>
								<span>Submit</span>
							</button>
						</div> : step == Steps.Waiting ? <div>
							<h2 className="cs-modal_title">Connecting to XUMM wallet...</h2>
							<div className="cs-height_10 cs-height_lg_10"></div>
							We're waiting for your wallet to approve this action.
							<div className="cs-height_5 cs-height_lg_5"></div>
						</div> : <div>
							<h2 className="cs-modal_title">Result</h2>
							<div className="cs-height_10 cs-height_lg_10"></div>
							<div>{result.message}</div>
							<div className="cs-height_5 cs-height_lg_5"></div>
						</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CreateRaffleModal);