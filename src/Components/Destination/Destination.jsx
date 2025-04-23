import React from 'react';
import './Destination.css';
import letang from '../../assests/places/letang.jpg';
import taplejung from '../../assests/places/taplejung.jpg';
import dodhara from '../../assests/places/dodhara-chandani.jpg';
import jefale from '../../assests/places/jefale.jpg';
import { FaArrowRight } from "react-icons/fa";

const Destination = () => {
  return (
    <div className='destination-grid'>
      <div className='card letang'>
        <img src={letang} alt='लेटाङ' />
        <div className="overlay">
          <h2>लेटाङ <FaArrowRight /></h2>
          <p>३३ पाहुनाघर</p>
        </div>
      </div>

      <div className='card taplejung'>
        <img src={taplejung} alt='ताल्पेगुड' />
        <div className="overlay">
          <h2>ताल्पेगुड <FaArrowRight /></h2>
          <p>१३५ पाहुनाघर</p>
        </div>
      </div>

      <div className='card dodhara'>
        <img src={dodhara} alt='दोधारा चाँदनी' />
        <div className="overlay">
          <h2>दोधारा चाँदनी <FaArrowRight /></h2>
          <p>१० पाहुनाघर</p>
        </div>
      </div>

      <div className='card jefale'>
        <img src={jefale} alt='जिफाले डाडा' />
        <div className="overlay">
          <h2>जिफाले डाडा <FaArrowRight /></h2>
          <p>१५० पाहुनाघर</p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
