import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import useConnectWallet from '../../hooks/useConnectWallet';
import xummStore from '../../store/xumm.store';
import accountStore from '../../store/account.store';

const ConnectModal = ({ closeModal }) => {
  const { auth_token } = accountStore;
  const { subscription } = xummStore;
  const { result, startRequest, cancelRequest } = useConnectWallet();

  useEffect(() => {
    startRequest();
  }, [])

  useEffect(() => {
    if (auth_token) {
      close();
    }
  }, [auth_token]);

  useEffect(() => {
    if (result?.status) {
      console.log("Received result...", toJS(result));
      close();
    }
  }, [result])

  const close = () => {
    cancelRequest();

    $("#connect_modal").removeClass("active");
    xummStore.setSubscription(null);

    closeModal();
  }

  return (
    <div className="cs-modal_wrap" id="connect_modal">
      <div className="cs-modal_overlay"></div>
      <div className="cs-modal_container">
        <div className="cs-modal_container_in">
          <div className="cs-modal_close cs-center" onClick={close}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9649 2.54988C12.3554 2.15936 12.3554 1.52619 11.9649 1.13567C11.5744 0.745142 10.9412 0.745142 10.5507 1.13567L11.9649 2.54988ZM0.550706 11.1357C0.160181 11.5262 0.160181 12.1594 0.550706 12.5499C0.94123 12.9404 1.5744 12.9404 1.96492 12.5499L0.550706 11.1357ZM1.96492 1.13567C1.5744 0.745142 0.94123 0.745142 0.550706 1.13567C0.160181 1.52619 0.160181 2.15936 0.550706 2.54988L1.96492 1.13567ZM10.5507 12.5499C10.9412 12.9404 11.5744 12.9404 11.9649 12.5499C12.3554 12.1594 12.3554 11.5262 11.9649 11.1357L10.5507 12.5499ZM10.5507 1.13567L0.550706 11.1357L1.96492 12.5499L11.9649 2.54988L10.5507 1.13567ZM0.550706 2.54988L10.5507 12.5499L11.9649 11.1357L1.96492 1.13567L0.550706 2.54988Z" fill="currentColor" />
            </svg>
          </div>
          <div className="cs-modal">
            <h2 className="cs-modal_title">Connect to wallet</h2>
            <div className="cs-modal_sign_area">
              <img className="cs-qr_img" src={subscription ? subscription.data.xumm_qr_code : "img/xumm-qr.png"} />
              {subscription ? <a href={subscription.data.xumm_app_url} target="_blank">XUMM</a> : <div className="cs-modal_text">Please wait till generate QR code...</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(ConnectModal);
