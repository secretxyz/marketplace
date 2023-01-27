import React, { useEffect } from 'react';

import Header from './Header'
import Footer from './Footer'

import SocketLoader from '../Helpers/SocketHelper'
import { setTheme } from '../Helpers/Utils';

const Base = (props) => {
    useEffect(() => {
        SocketLoader();
        setTheme();
    }, [])

    return (
        <div className="main-content">

            <Header />

            <main>
                {props.children}
            </main>

            <Footer />


            {/* <div className="cs-modal_overlay">
                Loading...
            </div> */}
        </div>
    )
}

export default Base;
