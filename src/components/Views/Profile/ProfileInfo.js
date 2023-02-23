import React, { useEffect, useState } from 'react';
import { useProfileInfo } from '../../../hooks/useProfile';
import { LIMIT_IMAGE_SIZE } from '../../Common/constants';
import { getImageLink } from '../../Helpers/Utils';
import ContentWrapper from '../../Layout/ContentWrapper';
import Avatar from "./Avatar";

const ProfileInfo = ({ profile, refresh }) => {
    const [account, setAccount] = useState(profile);
    const { loading, result, update } = useProfileInfo();
    const [warning, setWarning] = useState();
    const [avatar, setAvatar] = useState();
    const [banner, setBanner] = useState();

    const onClickUpdateProfile = () => {
        setWarning(null);
        update({ ...account, avatar, banner });
    }

    const onChangeInfo = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        if (result) {
            refresh();
        }
    }, [result])

    const onClickAvatarDelete = () => {
        if (avatar) {
            setAvatar(null);
        }
        setAccount({
            ...account,
            picture_url: null
        })
    }

    const onChangeProfileAvatar = (e) => {
        var file = e.target.files[0];
        if (!file || Number(file.size) > LIMIT_IMAGE_SIZE) {
            setWarning({
                ...warning,
                avatar: "File size too large."
            })
            return;
        }
        setWarning(null);

        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setAvatar({
                name: file.name,
                type: file.type,
                blob: reader.result
            })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }

    const onClickBannerDelete = () => {
        if (banner) {
            setBanner(null);
        }
        setAccount({
            ...account,
            banner_picture_url: null
        })
    }

    const onChangeProfileBanner = (e) => {
        var file = e.target.files[0];
        if (!file || Number(file.size) > LIMIT_IMAGE_SIZE) {
            setWarning({
                ...warning,
                banner: "File size too large."
            })
            return;
        }
        setWarning(null);

        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setBanner({
                name: file.name,
                type: file.type,
                blob: reader.result
            })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <ContentWrapper>
            <div className="cs-height_15 cs-height_lg_10"></div>
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
                        <textarea name="bio" cols="30" rows="4" className="cs-form_field cs-white_bg"
                            placeholder="Your bio..." value={account?.bio || ""} onChange={onChangeInfo}></textarea>
                    </div>
                    <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-lg-6">
                    <span className="cs-btn cs-style2 cs-btn_lg1 w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-discord"></i>
                            <span>Discord</span>
                            <input name="discord_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.discord_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <span className="cs-btn cs-style2 cs-btn_lg1 w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-twitter"></i>
                            <span>Twitter</span>
                            <input name="twitter_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.twitter_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span>
                    <div className="cs-height_25 cs-height_lg_25"></div>
                    <span className="cs-btn cs-style2 cs-btn_lg1 w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-telegram"></i>
                            <span>Telegram</span>
                            <input name="telegram_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.telegram_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span><div className="cs-height_25 cs-height_lg_25"></div>
                    <span className="cs-btn cs-style2 cs-btn_lg1 w-100">
                        <span className="text-left cs-social_input">
                            <i className="fab fa-facebook"></i>
                            <span>Facebook</span>
                            <input name="facebook_username" type="text"
                                placeholder="Do not add full url, just handle" value={account?.facebook_username || ""} onChange={onChangeInfo} />
                        </span>
                    </span>
                    <div className="cs-height_30 cs-height_lg_30"></div>
                </div>
                <div className="col-lg-6">
                    <div className="cs-edit_profile">
                        <div className="cs-edit_profile_img">
                            <input type="file" className="cs-file" accept="image/png,image/jpeg" onChange={onChangeProfileAvatar} />
                            {avatar ? <img className="cs-profile_avatar" src={avatar.blob} alt="" /> :
                                <Avatar className="cs-profile_avatar" {...{ name: account?.wallet, image: account?.picture_url }} />}
                        </div>
                        <div className="cs-edit_profile_right">
                            <div className="cs-edit_profile_btns" onClick={onClickAvatarDelete}>
                                <span className="cs-delete_btn"><i className="far fa-trash-alt"></i> Delete</span>
                            </div>
                            <p>Images must be .png or .jpg format. Min size 200x200px. Below 2MB</p>
                        </div>
                    </div>
                    {warning?.avatar && <label className="form-check-label text-warning">{warning?.avatar}</label>}
                    <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-lg-6">
                    <div className="cs-edit_profile">
                        <div className="cs-edit_profile_banner_img">
                            <input type="file" className="cs-file" accept="image/png,image/jpeg" onChange={onChangeProfileBanner} />
                            {banner ? <img src={banner.blob} /> : <img src={getImageLink(account.banner_picture_url) || "img/cover-photo.jpeg"} />}
                        </div>
                        <div className="cs-edit_profile_right">
                            <div className="cs-edit_profile_btns" onClick={onClickBannerDelete}>
                                <span className="cs-delete_btn"><i className="far fa-trash-alt"></i> Delete</span>
                            </div>
                            <p>Images must be .png or .jpg format. Min size 1400x400px. Below 2MB</p>
                        </div>
                    </div>
                    {warning?.banner && <label className="form-check-label text-warning">{warning?.banner}</label>}
                    <div className="cs-height_20 cs-height_lg_20"></div>
                </div>
                <div className="col-lg-12">
                    <div className="cs-height_15 cs-height_lg_5"></div>
                    <button className="cs-btn cs-style1 cs-btn_lg" onClick={onClickUpdateProfile}>
                        <span>Update Profile</span>
                    </button>
                </div>
            </div>
        </ContentWrapper>
    );
}

export default ProfileInfo;
