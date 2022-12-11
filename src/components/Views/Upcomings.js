import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';

class Upcomings extends Component {

    componentDidMount() {
       console.log("Hello World!");
    }

    render() {
        return (
            <ContentWrapper>
                <section className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="breadcrumb-content text-center">
                                    <h3 className="title">Top collections</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </ContentWrapper>
        );
    }

}

export default Upcomings;
