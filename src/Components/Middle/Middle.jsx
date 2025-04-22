import React from 'react';
import './Middle.css';
import Achamaghar from '../../assests/icons/achammako-ghar.png';
import bhansaghar from '../../assests/icons/bhansa-ghar.png';
import chalchitra from '../../assests/icons/chalchitra-ghar.png';
import charaghar from '../../assests/icons/chara-ghar.png';
import chitra from '../../assests/icons/chitra-ghar.png';
import farm from '../../assests/icons/farm-house.png';
import goth from '../../assests/icons/goth-ghar.png';
import kaala from '../../assests/icons/kaala-ghar.png';
import baskota from '../../assests/supported-by/baskota-consulting.png';
import sriyog from '../../assests/supported-by/sriyog-logo.png';
import letang from '../../assests/places/letang.jpg';
import taplejung from '../../assests/places/taplejung.jpg';

const Middle = () => {
  return (
    <div className='houses'>
      <div className='houses-icon'>
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
            <img src={goth} alt='goth' />
            <p className="icon-title">गोठ घर</p>
          </a>
        </div>

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
      <div className='container'>
        <a>
          <img src={letang} alt='place-img' />
        </a>
        <a>
          <img src={taplejung} alt='place-img' />
        </a>
      </div>

    </div>
  )
};

export default Middle;
