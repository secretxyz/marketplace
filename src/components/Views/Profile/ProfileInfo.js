import React, { Component } from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';

class ProfileInfo extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <ContentWrapper>
                <form className="row">
                    <div className="col-lg-6">
                        <div className="cs-form_field_wrap">
                            <input type="text" className="cs-form_field cs-white_bg" placeholder="e. g. ‘Edward Figaro’" />
                        </div>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <div className="cs-form_field_wrap">
                            <input type="text" className="cs-form_field cs-white_bg" placeholder="e. g. ‘Edward Figaro’" />
                        </div>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <div className="cs-form_field_wrap">
                            <textarea cols="30" rows="5" placeholder="Your bio..." className="cs-form_field cs-white_bg"></textarea>
                        </div>
                        <div className="cs-height_20 cs-height_lg_20"></div>
                        <div className="cs-edit_profile">
                            <div className="cs-edit_profile_img"><img src="img/avatar/avatar_29.png" alt="" /></div>
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
                        <div className="cs-height_0 cs-height_lg_25"></div>
                        <div className="cs-form_field_wrap">
                            <input type="text" className="cs-form_field cs-white_bg" placeholder="Username" />
                        </div>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <div className="cs-form_field_wrap">
                            <input type="text" className="cs-form_field cs-white_bg" placeholder="Custom Url" />
                        </div>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <span className="cs-btn cs-style2 cs-btn_lg w-100">
                            <span className="text-left">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                                <input type="text" value="www.facebook.com/username" />
                            </span>
                        </span>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <span className="cs-btn cs-style2 cs-btn_lg w-100">
                            <span className="text-left">
                                <i className="fab fa-twitter"></i>
                                <span>Twitter</span>
                                <input type="text" value="www.facebook.com/username" />
                            </span>
                        </span>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                        <span className="cs-btn cs-style2 cs-btn_lg w-100">
                            <span className="text-left">
                                <i className="fab fa-linkedin-in"></i>
                                <span>Linkedin</span>
                                <input type="text" value="www.facebook.com/username" />
                            </span>
                        </span>
                        <div className="cs-height_25 cs-height_lg_25"></div>
                    </div>
                    <div className="col-lg-12">
                        <div className="cs-height_40 cs-height_lg_5"></div>
                        <button className="cs-btn cs-style1 cs-btn_lg"><span>Update Profile</span></button>
                    </div>
                </form>
            </ContentWrapper>
        );
    }

}

export default ProfileInfo;
