import React, { useEffect, useState } from 'react';
import SecretApi from '../../service/SecretApi';
import { reportItem } from '../Helpers/Reports';

const Steps = {
    Reporting: 0,
    Completed: 1,
}

const ReportModal = ({ data, closeModal }) => {
    const [step, setStep] = useState(Steps.Reporting);
    const [report, setReport] = useState(data);
    const [warning, setWarning] = useState();
    const [title, setTitle] = useState();
    const [object, setObject] = useState();
    const [id, setId] = useState();

    const close = () => {
        $("#report_modal").removeClass("active");
        closeModal();
    }

    useEffect(() => {
        if (data) {
            if (data.nft) {
                setId(data.nft);
                setObject("NFT");
                setTitle("Report this NFT");
            } else if (data.collection) {
                setId(data.collection);
                setObject("collection");
                setTitle("Report this collection");
            } else if (data.account) {
                setId(data.account);
                setObject("account");
                setTitle("Report this account");
            }
        }
    }, [data])

    const onChangeMessage = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setReport({
            ...report,
            [name]: value
        });
    }

    const onClickSubmit = async () => {
        if (!report.message || report.message.length == 0) {
            setWarning("Please input report contents.");
            return;
        }

        await SecretApi.createReport(report);
        reportItem(object, id);
        // closeModal(true);
        setStep(Steps.Completed);
    }

    return (
        <div className="cs-modal_wrap" id="report_modal">
            <div className="cs-modal_overlay"></div>
            <div className="cs-modal_container">
                <div className="cs-modal_container_in">
                    {step == Steps.Reporting && <div className="cs-modal_close cs-center" onClick={close}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9649 2.54988C12.3554 2.15936 12.3554 1.52619 11.9649 1.13567C11.5744 0.745142 10.9412 0.745142 10.5507 1.13567L11.9649 2.54988ZM0.550706 11.1357C0.160181 11.5262 0.160181 12.1594 0.550706 12.5499C0.94123 12.9404 1.5744 12.9404 1.96492 12.5499L0.550706 11.1357ZM1.96492 1.13567C1.5744 0.745142 0.94123 0.745142 0.550706 1.13567C0.160181 1.52619 0.160181 2.15936 0.550706 2.54988L1.96492 1.13567ZM10.5507 12.5499C10.9412 12.9404 11.5744 12.9404 11.9649 12.5499C12.3554 12.1594 12.3554 11.5262 11.9649 11.1357L10.5507 12.5499ZM10.5507 1.13567L0.550706 11.1357L1.96492 12.5499L11.9649 2.54988L10.5507 1.13567ZM0.550706 2.54988L10.5507 12.5499L11.9649 11.1357L1.96492 1.13567L0.550706 2.54988Z" fill="currentColor" />
                        </svg>
                    </div>}
                    <div className="cs-modal">
                        {step == Steps.Reporting ? <div>
                            <div className="cs-modal_header">
                                <h2 className="cs-modal_title">{title}</h2>
                            </div>
                            <span>{`Report to admins about this ${object} that contains illegal, offensive or DMCA copyrighted material.`}</span>
                            <div className="cs-height_20 cs-height_lg_15"></div>
                            <div className="cs-form_field_wrap">
                                <textarea name="message" cols="30" rows="4" className="cs-form_field cs-white_bg"
                                    placeholder="Contents..." value={report.message || ""} onChange={onChangeMessage} maxLength={250}></textarea>
                            </div>
                            <div className="cs-height_20 cs-height_lg_15"></div>
                            {warning && <label className="form-check-label text-warning cs-center">{warning}</label>}
                            <button className="cs-btn cs-style1 cs-btn_lg w-100 text-center" onClick={onClickSubmit}>
                                <span>Submit</span>
                            </button>
                        </div> : <div>
                            <div className="cs-modal_header">
                                <h2 className="cs-modal_title">Result</h2>
                            </div>
                            <div className="cs-height_10 cs-height_lg_10"></div>
                            <div>{`Thank you for reporting this ${object} correctly. Your cooperation is appreciated!`}</div>
                            <div className="cs-height_30 cs-height_lg_15"></div>
                            <div className="cs-modal_footer">
                                <button className="cs-btn cs-style1 cs-btn_sm cs-modal_ok text-center" onClick={() => closeModal(true)}>
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

export default ReportModal;