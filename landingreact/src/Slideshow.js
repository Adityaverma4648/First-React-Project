import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';
import headphones from './headphones.jpg';
import sneakers from './sneakers.jpg';
import smartwatch from './smartwatch.jpg';



function Slideshow(){
    return (
      <div className='Slidecont'>
        <Slide easing="ease">
          <div className="each-slide">
            <div className='slide-elem' style={{'backgroundImage': `url(${headphones})`}}>
              <span>Electronics</span>
            </div>
          </div>
          <div className="each-slide">
            <div className='slide-elem' style={{'backgroundImage': `url(${sneakers})`}}>
              <span>Fashion</span>
            </div>
          </div>
          <div className="each-slide">
            <div className='slide-elem' style={{'backgroundImage': `url(${smartwatch})`}}>
              <span>Accessories</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;