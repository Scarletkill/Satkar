import React, { useState } from 'react';
import Nepal from '../../assests/Header1.jpg';
import './Home.css';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";

const Home = () => {
  const [typeDropdown, settypeDropdown] = useState(false);
  const [whatDowndrop, setwhatDowndrop] = useState(false);

  return (
    <div className='Home'>
      <div className='Homeimg'>
        <img src={Nepal} alt='Homepagebanner' />
      </div>

      <div className='dropdown-row'>
        <div className="green-container">
          <input
            type="text"
            placeholder="के खोज्दै हुनु हुन्छ ?"
            className="styled-input"
          />
        </div>
        <div className='whatdrop-item'>
          <button className='Btn flex' onClick={() => setwhatDowndrop(!whatDowndrop)}>
            कहाँ खोज्दै हुनु हुन्छ ?
            <IoIosArrowDropdown className={`icon ${whatDowndrop ? 'rotate' : ''}`} />
          </button>
          {whatDowndrop && (
            <div className='Btn-content'>
              <ul>
                <li>लेटांग</li>
                <li>दोधारा</li>
                <li>जेफाले</li>
                <li>ईलाम</li>
                <li>ताप्लेजुंग</li>
              </ul>
            </div>
          )}
        </div>
        <div className='typedrop-item'>
          <button className='Btn flex' onClick={() => settypeDropdown(!typeDropdown)}>
            पाहुनाघरको प्रकार
            <IoIosArrowDropdown className={`icon ${typeDropdown ? 'rotate' : ''}`} />
          </button>
          {typeDropdown && (
            <div className='Btn-content'>
              <ul>
                <li>पाहुनाघर</li>
                <li>मामाघर</li>
                <li>ढिकी घर</li>
                <li>फारमघर</li>
                <li>संबाद घर</li>
              </ul>
            </div>
          )}
        </div>

        <button className='Btn flex'>
          खोज्नुहोस् <CiSearch className='icon' />
        </button>
      </div>

      <div className='cover-bg'>
        <div className='covers'>
          <IoLocation className='icon' />अन्तुडाँडा पूर्वी नेपालको एक प्रसिद्ध पर्यटकीय क्षेत्र हो ।
        </div>
        <div className='coverscamera'>
          <FaCamera className='icon' />फोटो स्रोत |
          <a href='https://en.wikipedia.org/wiki/Shree_Antu' target='_blank' rel='noreferrer'>विकिपिडिया</a>
        </div>
      </div>
    </div>
  );

  //cover bottom bg


};

export default Home;