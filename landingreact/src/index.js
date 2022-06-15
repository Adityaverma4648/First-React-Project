/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import slidshow

// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


// ----------------------------------------
 import Navbar from './Navbar';
 import Menu from './Menu';
 import Slideshow from './Slideshow';
 import SlideContent from './SlideContent';

import reportWebVitals from './reportWebVitals';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

const menu = ReactDOM.createRoot(document.getElementById('menu'));
menu.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

const slideshow = ReactDOM.createRoot(document.getElementById('slideshow'));
slideshow.render(
  <React.StrictMode>
    <Slideshow />
  </React.StrictMode>
);
const slidecontent = ReactDOM.createRoot(document.getElementById('slidecontent'));
slidecontent.render(
  <React.StrictMode>
    <SlideContent />
  </React.StrictMode>
);
reportWebVitals();
