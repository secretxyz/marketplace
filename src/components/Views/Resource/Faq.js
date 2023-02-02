import React, { useEffect } from 'react';
import $ from 'jquery';
import ContentWrapper from "../../Layout/ContentWrapper";
import { useFaqs } from '../../../hooks/useHomepage';

const Faq = () => {
    const { loading, faqs } = useFaqs();

    const AccordionLoader = () => {
        $('.cs-accordion').children('.cs-accordion-body').hide();
        $('.cs-accordion.active').children('.cs-accordion-body').show();
        $('.cs-accordion_head').on('click', function () {
            $(this)
                .parent('.cs-accordion')
                .siblings()
                .children('.cs-accordion-body')
                .slideUp(250);
            $(this).siblings().slideDown(250);
            /* Accordion Active Class */
            $(this).parents('.cs-accordion').addClass('active');
            $(this).parent('.cs-accordion').siblings().removeClass('active');
        });
    }

    useEffect(() => {
        if (faqs.length > 0) {
            AccordionLoader();
        }
    }, [faqs])

    return (
        <ContentWrapper>
            <div className="cs-height_90 cs-height_lg_80"></div>
            <section className="cs-page_head cs-resource_page_head cs-bg" style={{ background: `url("img/page_head_bg.png")` }}>
                <div className="container">
                    <div className="text-center">
                        <h1 className="cs-page_title">Frequently Asked Questions</h1>
                    </div>
                </div>
            </section>
            <div className="cs-height_40 cs-height_lg_30"></div>
            <div className="container">
                <div className="row cs-col_reverse_lg">
                    <div className="col-lg-6">
                        <div className="cs-faq">
                            <div className="cs-section_heading cs-style3">
                                <h2 className="cs-section_title">Getting Started!</h2>
                                <div className="cs-section_seperator"></div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <div className="cs-accordions">
                                {faqs.map(faq => {
                                    let f = faq.attributes;
                                    if (f.category == "general") {
                                        return <div className="cs-accordion" key={faq.id}>
                                            <div className="cs-accordion_head">
                                                <h2 className="cs-accordion_title">{f.question}</h2>
                                                <span className="cs-accordion_toggle">
                                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="cs-accordion-body">
                                                <p>{f.answer}</p>
                                            </div>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src="img/faq_1.svg" alt="faq" />
                        </div>
                        <div className="cs-height_0 cs-height_lg_30"></div>
                    </div>
                </div>
            </div>
            <div className="cs-height_80 cs-height_lg_70"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src="img/faq_2.svg" alt="faq" />
                        </div>
                        <div className="cs-height_0 cs-height_lg_30"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cs-faq">
                            <div className="cs-section_heading cs-style3">
                                <h2 className="cs-section_title">How to Raffle?</h2>
                                <div className="cs-section_seperator"></div>
                            </div>
                            <div className="cs-height_30 cs-height_lg_30"></div>
                            <div className="cs-accordions">
                                {faqs.map(faq => {
                                    let f = faq.attributes;
                                    if (f.category == "raffle") {
                                        return <div className="cs-accordion" key={faq.id}>
                                            <div className="cs-accordion_head">
                                                <h2 className="cs-accordion_title">{f.question}</h2>
                                                <span className="cs-accordion_toggle">
                                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="cs-accordion-body">
                                                <p>{f.answer}</p>
                                            </div>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs-height_70 cs-height_lg_40"></div>
        </ContentWrapper>
    );
}

export default Faq;
