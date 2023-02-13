import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import WaitingModal from '../../Common/WaitingModal';
import xummStore from '../../../store/xumm.store';
import { useOffer } from '../../../hooks/useOffer';

const Steps = {
    Waiting: 0,
    Completed: 1,
}

const SignTxModal = ({ activity, refreshDetails, closeModal }) => {
    const { loading, result, createOffer } = useOffer();
    const [step, setStep] = useState(Steps.Waiting);
    const { subscription } = xummStore;
    const [qrshow, setQrshow] = useState(false);

    useEffect(() => {
        console.log(activity);
        createOffer(activity);
    }, [activity])

    useEffect(() => {
        if (result) {
            setStep(Steps.Completed);
        }
    }, [result])

    const close = () => {
        $("#sign_tx_modal").removeClass("active");
        closeModal();
        refreshDetails();
    }

    useEffect(() => {
        setQrshow(false);
    }, [subscription])

    return (
        <WaitingModal
            id="sign_tx_modal"
            step={step}
            subscription={subscription}
            qrshow={qrshow}
            setQrshow={setQrshow}
            result={result}
            close={close}
        />
    );
}

export default observer(SignTxModal);