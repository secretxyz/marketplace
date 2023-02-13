import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header'
import Footer from './Footer'

import SocketLoader from '../Helpers/SocketHelper'
import { getThemeMode } from '../Helpers/Utils';

const Base = (props) => {
    useEffect(() => {
        SocketLoader();
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


            <ToastContainer position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme={getThemeMode() ? "light" : "dark"}
            />
        </div>
    )
}

export default Base;
