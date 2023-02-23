import { HttpStatusCode } from 'axios';
import React, { useEffect, useState } from 'react';
import SecretApi from '../../service/SecretApi';
import { getProfileImageLink, notify } from '../Helpers/Utils';
import { LIMIT_IMAGE_SIZE } from './constants';

const Steps = {
    Editing: 0,
    Completed: 1,
}

const CollectionModal = ({ data, refreshDetails, closeModal }) => {
    const [step, setStep] = useState(Steps.Editing);
    const [collection, setCollection] = useState(data);
    const [warning, setWarning] = useState();
    const [avatar, setAvatar] = useState();
    const [banner, setBanner] = useState();

    const close = () => {
        $("#collection_modal").removeClass("active");
        closeModal();
    }

    const onChangeInfo = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setCollection({
            ...collection,
            [name]: value,
        })
    }

    const onChangeAvatar = (e) => {
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

    const onChangeBanner = (e) => {
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

    const onClickSubmit = async () => {
        if (!collection.name?.length) {
            setWarning({ general: "Invalid collection name" })
            return;
        }

        if (!collection.slug?.length) {
            setWarning({ general: "Invalid collection slug" })
            return;
        }

        setWarning(null);


        const res = await SecretApi.updateCollection({ ...collection, avatar, banner });
        if (res.code == HttpStatusCode.BadRequest && !res.status) {
            setWarning({ general: res.message });
            return;
        }

        refreshDetails();
        close();

        notify("Collection is updated successfully!");
    }

    return (
        <div className="cs-modal_wrap" id="collection_modal">
            <div className="cs-modal_overlay"></div>
            <div className="cs-modal_container_lg">
                <div className="cs-modal_container_in">
                    <div className="cs-modal_close cs-center" onClick={close}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9649 2.54988C12.3554 2.15936 12.3554 1.52619 11.9649 1.13567C11.5744 0.745142 10.9412 0.745142 10.5507 1.13567L11.9649 2.54988ZM0.550706 11.1357C0.160181 11.5262 0.160181 12.1594 0.550706 12.5499C0.94123 12.9404 1.5744 12.9404 1.96492 12.5499L0.550706 11.1357ZM1.96492 1.13567C1.5744 0.745142 0.94123 0.745142 0.550706 1.13567C0.160181 1.52619 0.160181 2.15936 0.550706 2.54988L1.96492 1.13567ZM10.5507 12.5499C10.9412 12.9404 11.5744 12.9404 11.9649 12.5499C12.3554 12.1594 12.3554 11.5262 11.9649 11.1357L10.5507 12.5499ZM10.5507 1.13567L0.550706 11.1357L1.96492 12.5499L11.9649 2.54988L10.5507 1.13567ZM0.550706 2.54988L10.5507 12.5499L11.9649 11.1357L1.96492 1.13567L0.550706 2.54988Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="cs-modal">
                        <div className="cs-modal_header">
                            <h2 className="cs-modal_title">Edit Collection</h2>
                        </div>
                        <div className="cs-height_10 cs-height_lg_10"></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Name</span>
                                    <input name="name" type="text" className="cs-form_field cs-white_bg"
                                        placeholder="Enter name" value={collection.name || ""} onChange={onChangeInfo} />
                                </div>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Slug</span>
                                    <input name="slug" type="text" className="cs-form_field cs-white_bg"
                                        placeholder="Enter slug" value={collection.slug || ""} onChange={onChangeInfo} />
                                </div>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Category</span>
                                    <div className="cs-form_field_wrap cs-select_arrow">
                                        <select name="category" className="cs-form_field cs-field_sm" value={collection.category} onChange={onChangeInfo}>
                                            <option value="art">Art</option>
                                            <option value="photography">Photography</option>
                                            <option value="collectibles">Collectibles</option>
                                            <option value="sports">Sports</option>
                                            <option value="utility">Utility</option>
                                            <option value="trading cards">Trading Cards</option>
                                            <option value="gaming">Gaming</option>
                                            <option value="metaverse">Metaverse</option>
                                            <option value="music">Music</option>
                                            <option value="video">Video</option>
                                            <option value="fashion">Fashion</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Taxon</span>
                                    <div className="cs-form_field_wrap cs-select_arrow">
                                        <select name="category" className="cs-form_field cs-field_sm" value={collection.nft_taxon} disabled>
                                            <option value={collection.nft_taxon}>{collection.nft_taxon}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-12">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Description</span>
                                    <textarea name="bio" cols="30" rows="3" className="cs-form_field cs-white_bg"
                                        placeholder="Collection bio..." value={collection.bio || ""} onChange={onChangeInfo}></textarea>
                                </div>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <span className="cs-btn cs-style2 cs-1 w-100">
                                    <span className="text-left cs-social_input">
                                        <i className="fa fa-globe fa-fw"></i>
                                        <input name="website_url" type="text" placeholder="Website URL" value={collection.website_url || ""} onChange={onChangeInfo} />
                                    </span>
                                </span>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <span className="cs-btn cs-style2 cs-1 w-100">
                                    <span className="text-left cs-social_input">
                                        <i className="fab fa-twitter"></i>
                                        <input name="twitter_url" type="text" placeholder="Twitter URL" value={collection.twitter_url || ""} onChange={onChangeInfo} />
                                    </span>
                                </span>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <span className="cs-btn cs-style2 cs-1 w-100">
                                    <span className="text-left cs-social_input">
                                        <i className="fab fa-discord fa-fw"></i>
                                        <input name="discord_url" type="text" placeholder="Discord URL" value={collection.discord_url || ""} onChange={onChangeInfo} />
                                    </span>
                                </span>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-6">
                                <span className="cs-btn cs-style2 cs-1 w-100">
                                    <span className="text-left cs-social_input">
                                        <i className="fab fa-youtube fa-fw"></i>
                                        <input name="youtube_url" type="text" placeholder="Youtube URL" value={collection.youtube_url || ""} onChange={onChangeInfo} />
                                    </span>
                                </span>
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-5 col-8">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Picture</span>
                                    <div className="cs-edit_profile">
                                        <div className="cs-edit_profile_img">
                                            <input type="file" className="cs-file" accept="image/png,image/jpeg" onChange={onChangeAvatar} />
                                            {avatar ? <img className="cs-profile_avatar" src={avatar.blob} alt="" /> : <img src={getProfileImageLink(collection.picture_url) || "img/cover-photo.jpeg"} />}
                                        </div>
                                        <div className="cs-edit_profile_right">
                                            <p>Dimensions 400x400px. Below 2MB</p>
                                        </div>
                                    </div>
                                </div>
                                {warning?.avatar && <label className="form-check-label text-warning">{warning?.avatar}</label>}
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                            <div className="col-lg-7">
                                <div className="cs-offer_form_field">
                                    <span className="cs-offer_field_title">Banner Image</span>
                                    <div className="cs-edit_profile">
                                        <div className="cs-edit_profile_banner_img">
                                            <input type="file" className="cs-file" accept="image/png,image/jpeg" onChange={onChangeBanner} />
                                            {banner ? <img src={banner.blob} /> : <img src={getProfileImageLink(collection.banner_picture_url) || "img/cover-photo.jpeg"} />}
                                        </div>
                                        <div className="cs-edit_profile_right">
                                            <p>Dimensions 1400x400px. Below 2MB</p>
                                        </div>
                                    </div>
                                </div>
                                {warning?.banner && <label className="form-check-label text-warning">{warning?.banner}</label>}
                                <div className="cs-height_15 cs-height_lg_10"></div>
                            </div>
                        </div>
                        <div className="cs-height_15 cs-height_lg_10"></div>
                        {warning?.general && <label className="form-check-label text-warning w-100 cs-center">{warning?.general}</label>}
                        <div className="cs-modal_footer">
                            <button className="cs-btn cs-style1 cs-btn_sm cs-modal_ok text-center" onClick={onClickSubmit}>
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CollectionModal;