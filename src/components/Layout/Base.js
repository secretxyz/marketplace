import React from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Base = props => (
    <div className="main-content">
        <Header />

        <main>
            { props.children }
        </main>

        <Footer />
    </div>
)

export default Base;
