import React, { useEffect, useState } from 'react';
import { useRaffleTicket } from '../../../hooks/useRaffleTicket';

const BuyTicketModal = ({ ticket, refreshDetails, closeModal }) => {
    const { creating, result, createRaffleTicket } = useRaffleTicket();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (result) {
            setStep(1);
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

    return (
        <div className="cs-modal_wrap" id="buy_ticket_modal">
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
                            <h2 className="cs-modal_title">Connecting to XUMM wallet...</h2>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            Please wait a few moments until you receive the sign request in your XUMM.
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

export default BuyTicketModal;