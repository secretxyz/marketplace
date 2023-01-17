import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRaffle } from '../../../hooks/useRaffle';

const SellOptions = [
	{ id: 1, label: "25%", isChecked: false },
	{ id: 2, label: "50%", isChecked: false },
	{ id: 3, label: "75%", isChecked: false },
	{ id: 4, label: "100%", isChecked: true },
];

const CreateRaffleModal = ({ nft, refreshDetails }) => {
	const { loading, created, createRaffle } = useRaffle();
	const [step, setStep] = useState(0);
	const [raffle, setRaffle] = useState({ sell_option: 4 });
	const [sellOptions, setSellOptions] = useState(SellOptions);
	const [descriptions, setDescriptions] = useState({});

	useEffect(() => {
		if (created) {
			setRaffle(created);
			setStep(2);

			// reload nft information
			refreshDetails();
		}
	}, [created])

	const close = () => {
		$("#create_raffle_modal").removeClass("active");

		setStep(0);
		setRaffle({ sell_option: 4 })
		setSellOptions(SellOptions);
	}

	const onChangeInfo = (event) => {
		let name = event.target.name;
		setRaffle({
			...raffle,
			[name]: event.target.value
		});

		switch (name) {
			case "total_ticket_price":
				break;
			case "ticket_count":
				break;
			case "raffle_duration":
				break;
		}
	}

	const onClickSubmit = () => {
		let data = { ...raffle, nft }
		createRaffle(data)
		setStep(1);
	};

	const onSellOption = id => {
		let options = sellOptions.map(f => {
			if (f.id === id) {
				setRaffle({ ...raffle, sell_option: f.id });
				return { ...f, isChecked: true };
			}
			return { ...f, isChecked: false };
		})
		setSellOptions(options);
	};

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
						{step == 0 ? <div>
							<h2 className="cs-modal_title">Create Raffle</h2>
							<div className="cs-height_10 cs-height_lg_10"></div>
							<div className="row">
								<div className="col-lg-6">
									<div className="cs-offer_form_field">
										<span className="cs-offer_field_title">Total Ticket Price</span>
										<input name="total_ticket_price" type="number" className="cs-form_field cs-white_bg"
											placeholder="Enter price" value={raffle?.total_ticket_price || ""} onChange={onChangeInfo} />
										<span className="cs-offer_field_description">Possible earning (USD) $58,900</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
									<div className="cs-offer_form_field">
										<span className="cs-offer_field_title">Ticket Count</span>
										<input name="ticket_count" type="number" className="cs-form_field cs-white_bg"
											placeholder="Enter count" value={raffle?.ticket_count || ""} onChange={onChangeInfo} />
										<span className="cs-offer_field_description">10 XRP per Ticket</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
								</div>
								<div className="col-lg-6">
									<div className="cs-offer_form_field">
										<span className="cs-offer_field_title">Selling Option ⓘ</span>
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
										<span className="cs-offer_field_title">Raffle Duration</span>
										<input name="raffle_duration" type="number" className="cs-form_field cs-white_bg"
											placeholder="Enter duration" value={raffle?.raffle_duration || ""} onChange={onChangeInfo} />
										<span className="cs-offer_field_description">Raffle will end 28 Aug,2022 10:50PM</span>
									</div>
									<div className="cs-height_15 cs-height_lg_10"></div>
								</div>
							</div>
							<a className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickSubmit}>
								<span>Submit</span>
							</a>
						</div> : step == 1 ? <div>
							<h2 className="cs-modal_title">Connecting to XUMM wallet...</h2>
							<div className="cs-height_10 cs-height_lg_10"></div>
							We're waiting for your wallet to approve this action.
						</div> : <div>
							<h2 className="cs-modal_title">Success</h2>
							<div className="cs-height_10 cs-height_lg_10"></div>
							The NFT listed successfully.
						</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(CreateRaffleModal);