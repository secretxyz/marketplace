import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRaffleTicket } from '../../../hooks/useRaffleTicket';
import xummStore from '../../../store/xumm.store';

const Steps = {
    Waiting: 0,
    Completed: 1,
}

const BuyTicketModal = ({ ticket, refreshDetails, closeModal }) => {
    const { creating, result, createRaffleTicket } = useRaffleTicket();
    const [step, setStep] = useState(Steps.Waiting);
    const { subscription } = xummStore;
    const [qrshow, setQrshow] = useState(false);

    useEffect(() => {
        if (result) {
            setStep(Steps.Completed);
        }
    }, [result])

    const close = () => {
        $("#buy_ticket_modal").removeClass("active");
        closeModal();
        refreshDetails();
    }

    useEffect(() => {
        createRaffleTicket(ticket);
    }, [])

    useEffect(() => {
        setQrshow(false);
    }, [subscription])

    return (
        <div className="cs-modal_wrap" id="buy_ticket_modal">
            <div className="cs-modal_overlay"></div>
            <div className="cs-modal_container">
                <div className="cs-modal_container_in">
                    <div className="cs-modal">
                        {step == Steps.Waiting ? <div>
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
                        </div> : <div>
                            <h2 className="cs-modal_title">Result</h2>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div>{result.message}</div>
                            <div className="cs-height_30 cs-height_lg_15"></div>
                            <div className="cs-modal_footer">
                                <button className="cs-btn cs-style1 cs-btn_sm cs-modal_ok text-center" onClick={close}>
                                    <span>OK</span>
                                </button>
                            </div>
                            <div className="cs-height_5 cs-height_lg_5"></div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(BuyTicketModal);