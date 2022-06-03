import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
 import Navbar from './Navbar';

import reportWebVitals from './reportWebVitals';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

reportWebVitals();
