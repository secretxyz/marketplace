/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.8.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// App Routes
import Routes from './Routes';

// Vendor dependencies
// import "./Vendor";
// Application Styles
import './assets/css/plugins/fontawesome.min.css'
import './assets/css/plugins/bootstrap.min.css'
import './assets/css/plugins/slick.css'
import './assets/sass/style.scss'
import { useEffect } from 'react';

const App = () => {

  // specify base href from env varible 'PUBLIC_URL'
  // use only if application isn't served from the root
  // for development it is forced to root only
  /* global PUBLIC_URL */
  const basename = process.env.NODE_ENV === 'development' ? '/' : (PUBLIC_URL || '/');

  return (
    <BrowserRouter basename={basename}>
      <Routes />
    </BrowserRouter>
  );

}

export default App;
