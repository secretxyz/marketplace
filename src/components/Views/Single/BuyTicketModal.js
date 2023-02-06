import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRaffleTicket } from '../../../hooks/useRaffleTicket';
import WaitingModal from '../../Common/WaitingModal';
import xummStore from '../../../store/xumm.store';

const Steps = {
    Waiting: 0,
    Completed: 1,
}

const BuyTicketModal = ({ ticket, refreshDetails, closeModal }) => {
    const { loading, result, createRaffleTicket } = useRaffleTicket();
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

        <WaitingModal
            id="buy_ticket_modal"
            step={step}
            subscription={subscription}
            qrshow={qrshow}
            setQrshow={setQrshow}
            result={result}
            close={close}
        />
    );
}

export default observer(BuyTicketModal);