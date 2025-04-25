import React from 'react';
import './Middle.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Achamaghar from '../../assests/icons/achammako-ghar.png';
import bhansaghar from '../../assests/icons/bhansa-ghar.png';
import chalchitra from '../../assests/icons/chalchitra-ghar.png';
import charaghar from '../../assests/icons/chara-ghar.png';
import chitra from '../../assests/icons/chitra-ghar.png';
import farm from '../../assests/icons/farm-house.png';
import goth from '../../assests/icons/goth-ghar.png';
import kaala from '../../assests/icons/kaala-ghar.png';
import sangit from '../../assests/icons/sangit-ghar.png';
import dinner from '../../assests/icons/dinner-ghar.png';
import jaato from '../../assests/icons/jaato-ghar.png';
import sapana from '../../assests/icons/sapanaghar.png';
import sambad from '../../assests/icons/sambad-ghar.png';
import khaja from '../../assests/icons/khaja-ghar.png';
import maha from '../../assests/icons/maha-ghar.png';
import baskota from '../../assests/supported-by/baskota-consulting.png';
import sriyog from '../../assests/supported-by/sriyog-logo.png';

const settings = {
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
};

const Middle = () => {
  return (
    <div className='houses'>
      <div className='houses-icon'>
        <FaChevronLeft className='left' />
        <Slider {...settings}>
          <div className="icon-item">
            <a href="#">
              <img src={Achamaghar} alt="achammaghar" />
              <p className="icon-title">अचम्मको घर</p>
            </a>
            <a href="#">
              <img src={bhansaghar} alt='bhansaghar' />
              <p className="icon-title">भान्सा घर</p>
            </a>
            <a href="#">
              <img src={kaala} alt='kaala' />
              <p className="icon-title">कला घर</p>
            </a>
            <a href="#">
              <img src={chalchitra} alt='chalchitra' />
              <p className="icon-title">चलचित्र घर</p>
            </a>
            <a href="#">
              <img src={charaghar} alt='charaghar' />
              <p className="icon-title">चरा घर</p>
            </a>
            <a href="#">
              <img src={farm} alt='farm' />
              <p className="icon-title">फार्म घर</p>
            </a>
            <a href="#">
              <img src={chitra} alt='chitra' />
              <p className="icon-title">चित्र घर</p>
            </a>
            <a href="#">
              <img src={sangit} alt='sangit' />
              <p className="icon-title">संगीत घर</p>
            </a>
            <a href="#">
              <img src={dinner} alt='dinner' />
              <p className="icon-title">डिनर घर</p>
            </a>
            <a href="#">
              <img src={sambad} alt='sambad' />
              <p className="icon-title">गोठ घर</p>
            </a>
            <a href="#">
              <img src={jaato} alt='goth' />
              <p className="icon-title">गोठ घर</p>
            </a>
            <a href="#">
              <img src={sapana} alt='goth' />
              <p className="icon-title">गोठ घर</p>
            </a>
            <a href="#">
              <img src={khaja} alt='goth' />
              <p className="icon-title">गोठ घर</p>
            </a>
            <a href="#">
              <img src={maha} alt='goth' />
              <p className="icon-title">गोठ घर</p>
            </a>
          </div>
        </Slider>
        <FaChevronRight className='right' />
      </div>
      <div className='Sponser-ad'>
        <div className='sponsers'>
          <a href="http://baskotaconsulting.com.np" target="_blank" rel="noopener noreferrer"><img src={baskota} alt='baskota' /></a>
          <a href="https://sriyog.com" target="_blank" rel="noopener noreferrer"  > <img src={sriyog} alt="sriyog" /></a>

        </div>
      </div>
      <div className='secTitle'>
        <h>लोकप्रिय गन्तव्यहरू</h>
      </div>
      <div className='subject'>
        नेपालमा लुकेका कुनाहरू अवलोकन गर्नुहोस् । #Freedom of Living.
      </div>
    </div>
  )
};

export default Middle;
