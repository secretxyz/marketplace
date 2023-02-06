import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useDrawNft } from '../../../hooks/useRaffle';
import WaitingModal from '../../Common/WaitingModal';
import xummStore from '../../../store/xumm.store';

const Steps = {
    Waiting: 0,
    Completed: 1,
}

const DrawNftModal = ({ raffleId, refreshDetails, closeModal }) => {
    const { loading, result } = useDrawNft(raffleId);
    const [step, setStep] = useState(Steps.Waiting);
    const { subscription } = xummStore;
    const [qrshow, setQrshow] = useState(false);

    useEffect(() => {
        if (result) {
            setStep(Steps.Completed);
        }
    }, [result])

    const close = () => {
        $("#draw_nft_modal").removeClass("active");
        closeModal();
        refreshDetails();
    }

    useEffect(() => {
        setQrshow(false);
    }, [subscription])

    return (
        <WaitingModal
            id="draw_nft_modal"
            step={step}
            subscription={subscription}
            qrshow={qrshow}
            setQrshow={setQrshow}
            result={result}
            close={close}
        />
    );
}

export default observer(DrawNftModal);