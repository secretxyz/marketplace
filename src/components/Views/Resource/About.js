import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import ContentWrapper from "../../Layout/ContentWrapper";

class About extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <ContentWrapper>
                <div className="cs-height_90 cs-height_lg_80"></div>
                <section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.svg")` }}>
                    <div className="container">
                        <div className="text-center">
                            <h1 className="cs-page_title">About Us</h1>
                        </div>
                    </div>
                </section>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <div className="container">
                    <div className="cs-cta cs-style1 cs-type1 cs-bg">
                        <div className="cs-cta_right">
                            <h2 className="cs-cta_title">On a mission to environmental sustainability with NFTs</h2>
                            <div className="cs-cta_subtitle">What’s Different Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorsum is simply dummy <br />text of the printing poing. </div>
                            <a href="#" className="cs-btn cs-style1 cs-btn_lg"><span>Let’s Start</span></a>
                        </div>
                        <div className="cs-cta_img text-center"><img src="img/general/cta2.svg" alt="Image" /></div>
                    </div>
                </div>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <div className="container">
                    <h2 className="cs-section_heading cs-style1 text-center">NFT Gen marketplace with everything for everyone</h2>
                    <div className="cs-height_45 cs-height_lg_45"></div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <a href="https://www.youtube.com/embed/jRcfE2xxSAw?autoplay=1" className="cs-video_block cs-style1 cs-zoom_effect cs-video_open">
                                <div className="cs-video_block_in">
                                    <div className="cs-video_block_bg cs-bg cs-zoom_item" style={{ background: `url("img/video_bg.jpeg")` }}></div>
                                </div>
                                <div className="cs-play_btn cs-center">
                                    <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.98474 0.457254C2.24375 -0.616351 0 0.63608 0 2.68148V30.3185C0 32.3639 2.24375 33.6164 3.98474 32.5427L26.3932 18.7242C28.0485 17.7034 28.0485 15.2966 26.3932 14.2758L3.98474 0.457254Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <div className="container">
                    <h2 className="cs-section_heading cs-style1 text-center">NFT Gen marketplace with everything for everyone</h2>
                    <div className="cs-height_45 cs-height_lg_45"></div>
                    <div className="row">
                        <div className="col-lg-2 offset-lg-1">
                            <div className="cs-iconbox cs-style2 cs-box_shadow">
                                <div className="cs-iconbox_icon">
                                    <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.5934 0.307049C18.277 0.495601 17.3822 0.743716 16.6016 1.13668C15.8408 1.51961 5.01121 7.66212 4.46388 8.02106C2.62445 9.22763 1.29934 11.2172 0.853549 13.4416C0.759807 13.9091 0.738282 15.3765 0.738282 21.2876C0.738282 29.0766 0.735653 29.0209 1.16 30.2728C1.40729 31.0025 1.98593 32.0867 2.44962 32.6893C2.93591 33.3214 3.79035 34.1123 4.46388 34.5542C5.25095 35.0704 16.1505 41.2242 16.8725 41.5599C17.206 41.715 17.8345 41.9372 18.2691 42.0538C18.9578 42.2384 19.2232 42.2656 20.3328 42.2656C21.4425 42.2656 21.7079 42.2384 22.3966 42.0538C22.8312 41.9372 23.4597 41.7154 23.7932 41.5607C24.5283 41.2198 35.6253 34.9506 36.2929 34.4991C38.0605 33.3035 39.3288 31.3738 39.8195 29.1337C39.9042 28.7469 39.9274 27.0566 39.9274 21.2876C39.9274 15.5186 39.9042 13.8283 39.8195 13.4416C39.4222 11.6279 38.5358 10.0397 37.2494 8.83623C36.7504 8.36941 36.1301 7.93891 35.1623 7.38746C30.3151 4.62566 24.2749 1.23863 23.819 1.02691C22.6194 0.469557 20.7191 0.145856 19.5934 0.307049ZM22.2489 1.93714C22.6476 2.0529 23.1283 2.22551 23.317 2.32073C23.8495 2.58922 34.9459 8.87279 35.4087 9.1679C36.7941 10.0513 37.889 11.5987 38.3454 13.3183L38.5307 14.0167V21.2876V28.5585L38.3454 29.2569C37.889 30.9765 36.7941 32.524 35.4087 33.4073C34.6489 33.8918 23.6097 40.1149 23.1475 40.3193C21.5203 41.0389 19.3784 41.0611 17.6841 40.3758C16.8599 40.0424 5.27444 33.4523 4.70501 32.9929C3.58003 32.0853 2.70045 30.7083 2.31866 29.2569C2.13512 28.5593 2.13496 28.5512 2.13496 21.2876V14.0167L2.32031 13.3183C2.7771 11.5971 3.81565 10.1244 5.22868 9.19411C5.47014 9.03513 8.32963 7.40127 11.5831 5.56324C17.6516 2.13497 18.0742 1.92424 19.2648 1.73306C20.0497 1.60703 21.4393 1.70208 22.2489 1.93714ZM19.2576 3.86965C19.0955 3.91072 18.7765 4.01769 18.5487 4.10749C17.9688 4.33605 6.59537 10.7848 6.06233 11.1872C5.25489 11.7969 4.63748 12.7603 4.35642 13.8491C4.16811 14.5783 4.16639 27.9863 4.35444 28.7262C4.64462 29.8677 5.31519 30.8613 6.22961 31.5048C7.06794 32.0948 18.1966 38.3469 18.7719 38.5511C19.22 38.7103 19.471 38.7409 20.3328 38.7418C21.231 38.7427 21.4319 38.7165 21.9349 38.533C22.3901 38.3668 32.9018 32.4999 34.2585 31.6548C35.1659 31.0896 36.0203 29.8705 36.3112 28.7262C36.4977 27.9926 36.4977 14.5826 36.3112 13.8491C36.0239 12.7189 35.2431 11.5766 34.3617 10.9971C33.4341 10.3872 22.498 4.2534 21.9856 4.05557C21.539 3.8832 21.2733 3.84122 20.4972 3.82035C19.9775 3.80638 19.4197 3.82857 19.2576 3.86965ZM21.373 5.33616C21.8275 5.4796 32.5866 11.5016 33.5549 12.1546C34.1297 12.5421 34.663 13.2685 34.8738 13.951C35.0337 14.4685 35.039 14.7059 35.039 21.2876C35.039 27.8693 35.0337 28.1067 34.8738 28.6242C34.663 29.3068 34.1297 30.0331 33.5549 30.4206C32.5866 31.0736 21.8275 37.0956 21.373 37.2391C20.3741 37.5544 19.3171 37.3866 18.1991 36.7354C17.9041 36.5636 15.3045 35.0888 12.4222 33.458C9.5399 31.8273 7.05118 30.3935 6.89171 30.2719C6.45965 29.9424 5.97344 29.2121 5.78949 28.6166C5.63273 28.1089 5.62665 27.837 5.62665 21.2863C5.62665 14.8401 5.63479 14.457 5.78234 13.9831C5.97935 13.35 6.3733 12.7334 6.808 12.3776C6.99425 12.2252 9.5127 10.7622 12.4046 9.12633C15.2966 7.49049 17.9209 6.00171 18.2364 5.81793C18.552 5.63414 19.0141 5.41848 19.2634 5.33862C19.8653 5.14596 20.7672 5.14489 21.373 5.33616ZM8.66015 15.2016L8.42001 15.4418V21.2876V27.1334L8.66015 27.3736C8.80492 27.5184 8.98689 27.6137 9.11835 27.6137C9.2498 27.6137 9.43178 27.5184 9.57654 27.3736L9.81669 27.1334L9.82096 22.9165L9.82523 18.6996L12.0187 23.054C13.8665 26.7222 14.2487 27.4257 14.4441 27.5184C14.7252 27.6519 15.0131 27.591 15.2368 27.3508C15.4009 27.1746 15.4034 27.0852 15.4034 21.2876C15.4034 15.49 15.4009 15.4006 15.2368 15.2245C15.0132 14.9845 14.7249 14.9233 14.4465 15.0568C14.008 15.267 14.0096 15.251 14.0034 19.7266L13.9978 23.8756L11.8284 19.5487C10.4865 16.8724 9.58812 15.1723 9.4731 15.0917C9.19541 14.8972 8.92848 14.9333 8.66015 15.2016ZM17.7796 15.2016L17.5395 15.4418V21.2876V27.1334L17.7892 27.3832C17.9981 27.592 18.0822 27.6247 18.3027 27.5824C18.4478 27.5545 18.6496 27.4373 18.7513 27.3217C18.9345 27.1135 18.9362 27.0888 18.9362 24.5693V22.027L20.2712 22.0265C21.8879 22.026 22.1903 21.9597 22.3533 21.5695C22.4556 21.3247 22.4556 21.2505 22.3533 21.0057C22.1903 20.6156 21.8879 20.5492 20.2712 20.5487L18.9362 20.5482V18.4532V16.3582H21.5278H24.1196L24.3212 16.1565C24.6181 15.8595 24.5967 15.4491 24.2701 15.1742L24.0174 14.9615H21.0185H18.0198L17.7796 15.2016ZM25.632 15.0607C25.2107 15.3023 25.1308 15.8234 25.464 16.1565C25.6596 16.3522 25.7014 16.3582 26.8607 16.3582H28.0557V21.7458V27.1334L28.3054 27.3832C28.5143 27.592 28.5984 27.6247 28.8189 27.5824C28.964 27.5545 29.1658 27.4373 29.2675 27.3217L29.4523 27.1116V21.7349V16.3582H30.6473C31.8066 16.3582 31.8484 16.3522 32.044 16.1565C32.3267 15.8738 32.312 15.5081 32.0055 15.2016L31.7654 14.9615L28.7809 14.9639C26.6907 14.9658 25.7471 14.9948 25.632 15.0607Z" fill="#3772FF" />
                                    </svg>
                                </div>
                                <h2 className="cs-iconbox_title">99k+</h2>
                                <p className="cs-iconbox_subtitle">NFTs</p>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-lg-2">
                            <div className="cs-iconbox cs-style2 cs-box_shadow">
                                <div className="cs-iconbox_icon">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.76997 0.627283C3.2684 0.977649 1.28659 2.6814 0.537542 5.12561C0.335132 5.78591 0.324473 6.61085 0.324473 21.578C0.324473 38.6676 0.291452 37.779 0.978396 39.1877C1.65364 40.5728 2.85443 41.6379 4.43583 42.2546L5.19067 42.549L20.9774 42.5804C34.7061 42.6076 36.8622 42.5889 37.5167 42.4371C39.7492 41.9194 41.6241 40.0599 42.1459 37.8458C42.403 36.7551 42.4093 23.9336 42.1531 23.071C41.7963 21.8691 40.8466 20.8918 39.723 20.5699C39.465 20.4959 39.2339 20.4204 39.2092 20.4019C39.1845 20.3834 39.5869 19.922 40.1033 19.3764C42.5334 16.8092 42.9969 13.4197 41.3155 10.5132C40.6615 9.38261 33.6716 2.39232 32.534 1.73121C31.4043 1.07474 30.4099 0.769677 29.174 0.700391C27.0261 0.580011 25.1356 1.30635 23.4932 2.88311L22.5403 3.79807L22.342 3.19188C21.9815 2.08957 21.2719 1.32489 20.1368 0.815094C19.7092 0.623111 19.1497 0.605964 12.8955 0.592872C9.16762 0.584993 5.96115 0.600519 5.76997 0.627283ZM19.4171 3.22374C19.926 3.4557 20.0789 3.89748 20.0789 5.13627V6.26975L18.2428 8.13072C16.605 9.7909 16.3543 10.0982 15.9212 10.9766C15.0429 12.7578 14.9098 14.5718 15.5218 16.421C15.8973 17.5555 16.4003 18.3635 17.4156 19.4635L18.2445 20.3614H10.5299H2.8155L2.81492 13.207C2.81423 4.89876 2.75873 5.35351 3.91514 4.19837C5.05464 3.06003 4.6168 3.11646 12.3976 3.10661C17.0169 3.1007 19.228 3.13766 19.4171 3.22374ZM29.7187 3.22652C31.0085 3.49637 31.3984 3.81093 35.3445 7.76564C38.4689 10.897 39.1163 11.6026 39.3649 12.1475C39.8052 13.1127 39.936 13.9848 39.7771 14.8968C39.5112 16.4236 39.3644 16.6137 35.3212 20.6646C31.985 24.0074 31.5262 24.4251 30.8108 24.7717C29.3286 25.4901 27.3824 25.3453 26.0554 24.4182C25.7952 24.2364 23.9556 22.4541 21.9676 20.4576C17.8108 16.2834 17.7533 16.203 17.6674 14.4363C17.6122 13.3022 17.7991 12.5442 18.3489 11.6718C18.8352 10.9002 25.8243 3.98913 26.4224 3.68847C27.5011 3.14612 28.599 2.99225 29.7187 3.22652ZM20.0789 31.4883V40.1821L12.8665 40.149L5.65411 40.1159L4.99138 39.8052C4.12335 39.3983 3.35796 38.6025 3.05429 37.7909C2.82257 37.1716 2.8155 36.9399 2.8155 29.9736V22.7945H11.4472H20.0789V31.4883ZM39.1407 22.9772C39.918 23.3461 39.904 23.1995 39.8668 30.5843L39.8333 37.2193L39.532 37.8619C39.1019 38.7788 38.5931 39.3029 37.7115 39.7369L36.942 40.1159H29.7559H22.5699L22.5401 32.3736L22.5104 24.6314L23.437 25.4799C25.0964 26.999 26.4346 27.6197 28.3051 27.7375C29.5965 27.8189 30.7396 27.5754 32.0127 26.9479C32.8917 26.5146 33.1966 26.2659 34.8513 24.6314L36.7051 22.8002L37.7303 22.7974C38.4291 22.7955 38.8782 22.8527 39.1407 22.9772Z" fill="#3772FF" />
                                    </svg>
                                </div>
                                <h2 className="cs-iconbox_title">12k+</h2>
                                <p className="cs-iconbox_subtitle">Collections</p>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-lg-2">
                            <div className="cs-iconbox cs-style2 cs-box_shadow">
                                <div className="cs-iconbox_icon">
                                    <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M32.7423 1.26633C30.2931 1.9098 28.195 2.45999 28.0798 2.4889C27.7902 2.56155 27.5629 3.05618 27.6789 3.36132C27.736 3.51135 28.2051 3.89596 28.9991 4.4436C30.0742 5.18536 30.2192 5.31466 30.1404 5.46186C29.8993 5.91249 28.6116 7.51031 27.7494 8.42892C26.7928 9.448 26.6878 9.63467 26.8437 10.0406C26.9346 10.2776 27.407 10.4425 27.7012 10.34C28.304 10.1298 31.2982 6.47213 31.7473 5.39713C31.9387 4.93914 31.7852 4.70992 30.8656 4.07999C30.4257 3.77876 30.0475 3.50253 30.0251 3.46634C29.981 3.39469 36.8656 1.58547 36.9315 1.65139C36.9536 1.67349 37.1134 3.11937 37.2866 4.86458C37.4598 6.6097 37.626 8.21679 37.6559 8.43592L37.7103 8.83426L36.8619 8.24389C35.9069 7.57932 35.6897 7.48539 35.4292 7.62478C35.3292 7.67824 34.8641 8.20224 34.3956 8.78907C31.2362 12.7467 27.6013 15.6887 23.0958 17.9348C18.5883 20.1819 13.7785 21.4774 7.84952 22.0415C7.29406 22.0944 7.23587 22.0842 7.23642 21.9336C7.23696 21.7999 7.50119 21.6803 8.57756 21.3262C13.4739 19.7153 17.9781 17.6104 21.6928 15.1972C22.6629 14.5671 25.0819 12.7854 25.761 12.201C26.174 11.8454 26.2403 11.4403 25.9351 11.135C25.5718 10.7718 25.2746 10.8268 24.5974 11.3826C20.3592 14.8612 14.8399 17.781 8.3948 19.9539C7.40699 20.287 6.49575 20.6405 6.36991 20.7395C5.6717 21.2887 5.67488 22.521 6.37591 23.0724C6.82717 23.4274 7.15168 23.4736 8.39816 23.3606C17.0155 22.5787 24.6016 19.6277 30.4817 14.7701C31.7908 13.6885 33.9192 11.5501 34.92 10.3107C35.3641 9.7606 35.7509 9.28279 35.7796 9.24879C35.8082 9.21487 36.3826 9.57284 37.056 10.0444C37.7294 10.5159 38.3705 10.9017 38.4806 10.9017C38.7996 10.9017 38.9665 10.8061 39.0951 10.5497C39.1983 10.3442 39.1473 9.64185 38.7314 5.53715C38.4652 2.9117 38.2461 0.699685 38.2443 0.621671C38.238 0.342714 37.8888 0.0813058 37.5329 0.0890344C37.3473 0.093126 35.1916 0.622853 32.7423 1.26633ZM35.5588 16.8901C35.4088 16.9827 35.2106 17.1435 35.1183 17.2474C34.6936 17.7255 34.7032 17.4441 34.699 29.4276L34.695 40.725H33.6039H32.5128V31.8431C32.5128 22.978 32.5125 22.9604 32.32 22.5628C32.2038 22.3228 31.9805 22.0673 31.7583 21.9203L31.3896 21.6763H28.4733C25.5883 21.6763 25.5535 21.6786 25.2207 21.8854C25.0357 22.0005 24.7902 22.246 24.6751 22.431L24.466 22.7674L24.4415 31.7462L24.4171 40.725H23.3277H22.2384L22.2344 34.383C22.2302 27.6887 22.2259 27.6158 21.8151 27.1615C21.7228 27.0595 21.4923 26.8969 21.3029 26.8002C20.9803 26.6356 20.7755 26.6261 18.0678 26.6508L15.1772 26.6771L14.8336 26.9394C14.1665 27.4485 14.1503 27.5467 14.1481 31.1054C14.1467 33.2609 14.1786 34.3323 14.2488 34.4862C14.4429 34.9124 15.1444 34.9923 15.3875 34.616C15.4298 34.5503 15.4849 33.0441 15.5099 31.2688L15.5554 28.041L18.1405 28.0168C20.148 27.9981 20.7419 28.0184 20.7987 28.1077C20.8388 28.171 20.8723 31.0359 20.8731 34.4739L20.8745 40.725H18.1922H15.5099V38.695C15.5099 36.6908 15.5073 36.6626 15.2995 36.4674C15.0017 36.1877 14.5729 36.2062 14.3345 36.5093C14.1569 36.735 14.1461 36.8633 14.1461 38.7369V40.725H13.055H11.9639L11.9633 36.9289C11.963 34.5982 11.9266 33.0022 11.8689 32.7946C11.8173 32.6087 11.6695 32.331 11.5403 32.1776C11.0846 31.636 11.0616 31.6325 7.9119 31.6325C5.17643 31.6325 5.01631 31.6418 4.70071 31.8192C4.51804 31.9219 4.26691 32.1542 4.1428 32.3353L3.91703 32.6646L3.89157 36.6949L3.86611 40.725H2.32903C1.48361 40.725 0.680113 40.7676 0.543453 40.8195C0.0467315 41.0083 -0.10093 41.526 0.238128 41.8898L0.423523 42.0889H23.3294H46.2354L46.4208 41.8898C46.7598 41.526 46.6122 41.0083 46.1154 40.8195C45.9788 40.7676 45.174 40.725 44.3271 40.725H42.7873V34.2768C42.7873 30.7303 42.7619 27.7623 42.7309 27.6814C42.6457 27.4594 42.187 27.2556 41.9222 27.3221C41.4053 27.4518 41.4235 27.1997 41.4235 34.2442V40.725H38.7412H36.0589L36.0603 29.5185C36.0611 23.3549 36.0945 18.2602 36.1347 18.197C36.1915 18.1076 36.7854 18.0873 38.7929 18.106L41.378 18.1302L41.4018 21.8079C41.4253 25.4367 41.4282 25.4884 41.6222 25.695C41.9006 25.9913 42.353 25.9773 42.5988 25.6647C42.7826 25.4312 42.7873 25.331 42.7873 21.6927C42.7873 18.0891 42.7808 17.9467 42.5967 17.5667C42.4696 17.3042 42.2776 17.0976 42.0205 16.9469L41.6348 16.7209L38.7332 16.7212C36.0674 16.7215 35.8094 16.7353 35.5588 16.8901ZM31.0399 23.1038C31.1232 23.1872 31.149 25.2799 31.149 31.969V40.725H28.4667H25.7844V31.969C25.7844 25.2799 25.8101 23.1872 25.8935 23.1038C26.0491 22.9482 30.8843 22.9482 31.0399 23.1038ZM10.5448 33.1402C10.5752 33.2193 10.6 34.9583 10.6 37.0045V40.725H7.91772H5.23544V36.9213C5.23544 34.8293 5.26272 33.0903 5.29609 33.057C5.32936 33.0237 6.51157 32.9964 7.92317 32.9964C10.1796 32.9964 10.4962 33.0138 10.5448 33.1402Z" fill="#3772FF" />
                                    </svg>
                                </div>
                                <h2 className="cs-iconbox_title">8k+</h2>
                                <p className="cs-iconbox_subtitle">Bolume</p>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-lg-2">
                            <div className="cs-iconbox cs-style2 cs-box_shadow">
                                <div className="cs-iconbox_icon">
                                    <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.9975 44.4024V39.7357C39.9975 37.2603 39.0142 34.8864 37.2638 33.136C35.5135 31.3857 33.1395 30.4023 30.6642 30.4023H11.9974C9.52206 30.4023 7.14809 31.3857 5.39774 33.136C3.6474 34.8864 2.66406 37.2603 2.66406 39.7357V44.4024" stroke="#3772FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.3295 21.0691C26.4841 21.0691 30.6628 16.8904 30.6628 11.7357C30.6628 6.58103 26.4841 2.40234 21.3295 2.40234C16.1748 2.40234 11.9961 6.58103 11.9961 11.7357C11.9961 16.8904 16.1748 21.0691 21.3295 21.0691Z" stroke="#3772FF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h2 className="cs-iconbox_title">12k+</h2>
                                <p className="cs-iconbox_subtitle">Users</p>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                        <div className="col-lg-2">
                            <div className="cs-iconbox cs-style2 cs-box_shadow">
                                <div className="cs-iconbox_icon">
                                    <svg width="34" height="43" viewBox="0 0 34 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9426 0.513137C15.1942 0.608195 14.2486 0.813909 13.6679 1.00797C10.3509 2.11674 7.77434 4.88468 6.91709 8.26025C6.64579 9.32888 6.57018 10.3314 6.5985 12.4878C6.62436 14.4514 6.6338 14.556 6.81735 14.9094C7.20095 15.6479 7.89123 16.1503 8.68634 16.2695L9.02447 16.3202L9.20129 17.0185C9.77665 19.2906 11.3738 21.2184 13.5105 22.2197C14.7041 22.779 15.2937 22.9017 16.8045 22.9049C18.2277 22.9078 18.5779 22.8451 19.8296 22.3631C21.2531 21.8149 22.7925 20.4806 23.6287 19.0702C23.9955 18.4514 24.4514 17.2632 24.5963 16.5477C24.6327 16.368 24.7057 16.3251 25.1204 16.2393C25.9726 16.0634 26.6606 15.4556 26.9511 14.6221C27.0386 14.3713 27.0645 13.7709 27.0611 12.0774C27.0563 9.73448 27.0003 9.18334 26.6407 7.93493C25.5698 4.21788 22.4716 1.39157 18.6641 0.658269C18.0133 0.53292 16.4453 0.449354 15.9426 0.513137ZM18.2821 3.14153C21.0783 3.671 23.4089 5.83445 24.2828 8.71174C24.4973 9.41803 24.5087 9.54535 24.5425 11.6054L24.5778 13.7602H24.1389C23.5436 13.7602 22.5583 13.5633 21.6798 13.2691C20.4955 12.8722 19.582 12.3694 18.3139 11.4161C17.3259 10.6733 17.263 10.6405 16.8304 10.6421C16.4287 10.6437 16.1608 10.786 15.2696 11.471C13.5543 12.7894 11.5444 13.6165 9.7654 13.7362L9.04712 13.7845V12.3445C9.04712 11.5525 9.08579 10.5275 9.13307 10.0669C9.45913 6.89003 11.6285 4.25868 14.7119 3.30013C15.9024 2.92999 16.9248 2.8846 18.2821 3.14153ZM17.6831 14.0207C18.8509 14.801 20.3726 15.5097 21.6272 15.8574C22.1902 16.0134 22.2091 16.0912 21.8907 16.9371C21.232 18.6872 19.7171 19.9846 17.8918 20.3615C16.7011 20.6075 15.5944 20.461 14.475 19.9091C13.0733 19.2182 11.8187 17.6426 11.5651 16.2548L11.5185 15.9994L12.1503 15.8192C13.449 15.4489 15.1139 14.6475 16.2299 13.8554C16.5459 13.6311 16.8414 13.4691 16.8866 13.4955C16.9317 13.5217 17.2901 13.7581 17.6831 14.0207ZM7.77598 24.8965C4.07313 25.5661 1.15611 28.5605 0.592077 32.2712C0.536093 32.6393 0.513026 34.4444 0.527802 37.2931C0.550294 41.6172 0.555548 41.7467 0.717755 41.9639C0.80953 42.0868 1.01212 42.2556 1.16801 42.3393C1.44087 42.4856 2.01985 42.4912 16.8455 42.4912C31.6712 42.4912 32.2502 42.4856 32.5231 42.3393C32.679 42.2556 32.8816 42.0868 32.9733 41.9639C33.1355 41.7467 33.1408 41.6172 33.1633 37.2931C33.1781 34.4444 33.155 32.6393 33.099 32.2712C32.529 28.5213 29.5986 25.5436 25.8343 24.889C24.7767 24.7052 8.79758 24.7117 7.77598 24.8965ZM13.0212 28.1689C12.5353 28.6892 12.1121 29.0863 12.0805 29.0513C12.0223 28.9868 11.2635 27.3202 11.2635 27.257C11.2635 27.2382 11.8578 27.2227 12.584 27.2227H13.9045L13.0212 28.1689ZM22.4276 27.257C22.4276 27.3202 21.6687 28.9868 21.6106 29.0513C21.579 29.0863 21.1558 28.6892 20.6699 28.1689L19.7866 27.2227H21.1071C21.8333 27.2227 22.4276 27.2382 22.4276 27.257ZM9.583 29.6238C10.7167 32.1104 10.917 32.4193 11.462 32.5216C12.0989 32.6411 12.2849 32.5117 13.9513 30.7919C14.8034 29.9124 15.5264 29.1929 15.558 29.1929C15.5896 29.1929 15.6059 31.6216 15.5943 34.5902L15.5732 39.9875L9.27287 40.0085L2.97257 40.0295V36.5475C2.97257 32.7622 3.01 32.332 3.43128 31.2721C4.03832 29.7447 5.14069 28.574 6.63758 27.867C7.23526 27.5847 8.04039 27.3305 8.39649 27.3116C8.48818 27.3068 8.83296 27.9787 9.583 29.6238ZM25.8675 27.4311C27.8065 27.8882 29.5054 29.3739 30.2598 31.2721C30.6811 32.3319 30.7185 32.7622 30.7185 36.547V40.0286H24.3977H18.0769V34.5495V29.0705L19.6827 30.7306C21.4098 32.5162 21.5884 32.6418 22.2291 32.5216C22.7741 32.4193 22.9744 32.1104 24.1081 29.6238C24.6896 28.3483 25.205 27.3054 25.2536 27.306C25.3021 27.3067 25.5783 27.363 25.8675 27.4311Z" fillRule="evenodd" clipRule="evenodd" fill="#3772FF" />
                                    </svg>
                                </div>
                                <h2 className="cs-iconbox_title">52</h2>
                                <p className="cs-iconbox_subtitle">Employees</p>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_70 cs-height_lg_40"></div>
                <div className="container">
                    <div className="cs-cta cs-style1 cs-bg">
                        <div className="cs-cta_img"><img src="img/general/cta.svg" alt="Image" /></div>
                        <div className="cs-cta_right">
                            <h2 className="cs-cta_title">Create, Sell well & Collect your Best NFTs with us Very Fast</h2>
                            <div className="cs-cta_subtitle">What’s Different Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorsum is simply dummy text of the printing and </div>
                            <a href="connect-wallet.html" className="cs-btn cs-style1 cs-btn_lg"><span>Connect Wallet</span></a>
                        </div>
                    </div>
                </div>
                <div className="cs-height_40 cs-height_lg_30"></div>
                <div className="container">
                    <h2 className="cs-section_heading cs-style1 text-center">Meet Our Team</h2>
                    <div className="cs-height_45 cs-height_lg_45"></div>
                    <div className="cs-grid_5 cs-gap_30">
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/1.png" alt="" /></div>
                            <h2 className="cs-member_name">Eric K. McGhee</h2>
                            <div className="cs-member_designation">CEO & Co-founder</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/2.png" alt="" /></div>
                            <h2 className="cs-member_name">Michael E. Moses</h2>
                            <div className="cs-member_designation">Entrepreneur & Investor</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/3.png" alt="" /></div>
                            <h2 className="cs-member_name">Carolyn Henderson</h2>
                            <div className="cs-member_designation">Actor and entrepreneur</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/4.png" alt="" /></div>
                            <h2 className="cs-member_name">Michael E. Moses</h2>
                            <div className="cs-member_designation">CEO</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/5.png" alt="" /></div>
                            <h2 className="cs-member_name">Henderson</h2>
                            <div className="cs-member_designation">CTO</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/6.png" alt="" /></div>
                            <h2 className="cs-member_name">Thomas C. Kreps</h2>
                            <div className="cs-member_designation">Head of Design</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/7.png" alt="" /></div>
                            <h2 className="cs-member_name">John J. Kuhl</h2>
                            <div className="cs-member_designation">Finance</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/8.png" alt="" /></div>
                            <h2 className="cs-member_name">Clifford L. Martin</h2>
                            <div className="cs-member_designation">Developer</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/9.png" alt="" /></div>
                            <h2 className="cs-member_name">William D. Smith</h2>
                            <div className="cs-member_designation">Marketing Manager</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="cs-team cs-style1 cs-white_bg cs-box_shadow text-center">
                            <div className="cs-team_img"><img src="img/team/10.png" alt="" /></div>
                            <h2 className="cs-member_name">Scott C. Rodney</h2>
                            <div className="cs-member_designation">System Operator</div>
                            <div className="cs-member_social_links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-height_100 cs-height_lg_70"></div>

                <div className="container">
                    <div className="cs-cta cs-style2 text-center cs-accent_bg">
                        <h2 className="cs-cta_title cs-white_color_8">Join our biggest NFTs platform</h2>
                        <div className="cs-cta_subtitle cs-white_color_8">Exercitation veniam consequat sunt nostrud amet. It is a long <br />established fact that a reader</div>
                        <a href="register.html" className="cs-btn cs-style1 cs-btn_lg cs-color2"><span>Sign Up</span></a>
                    </div>
                </div>
                <div className="cs-height_70 cs-height_lg_40"></div>
            </ContentWrapper>
        );
    }
}

export default withRouter(About);
