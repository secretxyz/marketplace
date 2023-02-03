const MessageBox = ({ title, message, closeModal }) => {
    return (
        <div className="cs-modal_wrap active" id="connect_modal">
            <div className="cs-modal_overlay"></div>
            <div className="cs-modal_container">
                <div className="cs-modal_container_in">
                    <div className="cs-modal">
                        <h2 className="cs-modal_title">{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: message }}></div>
                        <div className="cs-height_20 cs-height_lg_20"></div>
                        <div className="cs-modal_footer">
                            <button className="cs-btn cs-style1 cs-btn_sm cs-modal_ok text-center" onClick={closeModal}>
                                <span>OK</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox;