import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';
import Avatar from "./Avatar";

const ProfileInfo = ({ profile }) => {
    const [account, setAccount] = useState(profile);

    const updateProfile = () => {
        console.log(account);
    }

    const onChangeInfo = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        });
    }

    return (
        <ContentWrapper>
            <div className="row">
                <div className="col-lg-6">
                    <div className="cs-form_field_wrap">
                        <input name="username" type="text" className="cs-form_field cs-white_bg"
                            placeholder="Enter username" value={account?.username || ""} onChange={onChangeInfo} />
                    </div>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <div className="cs-form_field_wrap">
                        <input name="slug" type="text" className="cs-form_field cs-white_bg"
                            placeholder="Enter slug" value={account?.slug || ""} onChange={onChangeInfo} />
                    </div>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <div className="cs-form_field_wrap">
                        <textarea name="bio" cols="30" rows="5" className="cs-form_field cs-white_bg"
                            placeholder="Your bio..." value={account?.bio || ""} onChange={onChangeInfo}></textarea>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                    <div className="cs-edit_profile">
                        <div className="cs-edit_profile_img">
                            <Avatar className="cs-profile_avatar" {...{ name: account?.wallet, image: account?.picture_url }} />
                        </div>
                        <div className="cs-edit_profile_right">
                            <div className="cs-edit_profile_btns">
                                <a href="#" className="cs-upload_btn">Upload</a>
                                <span className="cs-delete_btn"><i className="far fa-trash-alt"></i> Delete</span>
                            </div>
                            <p>Images must be .png or .jpg format. Min size 200x200px (avatar)</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cs-form_field_wrap">
                        <input name="email" type="email" className="cs-form_field cs-white_bg"
                            placeholder="Enter email" value={account?.email || ""} onChange={onChangeInfo} />
                    </div>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <span className="cs-btn cs-style2 cs-btn_lg w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-telegram"></i>
                            <span>Telegram</span>
                            <input name="telegram_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.telegram_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <span className="cs-btn cs-style2 cs-btn_lg w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-twitter"></i>
                            <span>Twitter</span>
                            <input name="twitter_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.twitter_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <span className="cs-btn cs-style2 cs-btn_lg w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-discord"></i>
                            <span>Discord</span>
                            <input name="discord_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.discord_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                </div>
                <div className="col-lg-12">
                    <div className="cs-height_40 cs-height_lg_5"></div>
                    <button className="cs-btn cs-style1 cs-btn_lg" onClick={updateProfile}>
                        <span>Update Profile</span>
                    </button>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default ProfileInfo;
