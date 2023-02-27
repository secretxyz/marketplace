import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

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
            {/* <Helmet>
                <title>SecretRaffles</title>
                <meta name="description" content="Quickly enter or create raffles for unique digital assets. Join the exciting world of NFT raffles on SecretRaffle now!" />
                <meta property="og:url" content="https://secretraffles.xyz" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SecretRaffles" />
                <meta property="og:description" content="Quickly enter or create raffles for unique digital assets. Join the exciting world of NFT raffles on SecretRaffle now!" />
                <meta property="og:image" content="https://secretraffles.xyz/img/secret_logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="secretraffles.xyz" />
                <meta property="twitter:url" content="https://secretraffles.xyz" />
                <meta name="twitter:title" content="SecretRaffles" />
                <meta name="twitter:description" content="Quickly enter or create raffles for unique digital assets. Join the exciting world of NFT raffles on SecretRaffle now!" />
                <meta name="twitter:image" content="https://secretraffles.xyz/img/secret_logo.png" />
            </Helmet> */}

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
