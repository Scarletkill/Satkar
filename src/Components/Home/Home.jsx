import React, { useState } from 'react';
import Nepal from '../../assests/Header1.jpg';
import './Home.css';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const [typeDropdown, settypeDropdown] = useState(false);
  const [whatDowndrop, setwhatDowndrop] = useState(false);

  return (
    <div className='relative h-[70vh] w-screen object-cover z-0'>
      <img src={Nepal} alt='Homepagebanner' className='absolute top-0 left-0 transform  h-[70vh] w-screen object-cover object-top z-0 blur-[1px]' />
      <div className='absolute top-3/4 left-3/4 transform -translate-x-3/4 -translate-y-3/4 w-full max-w-5xl'>
        <form className="bg-white rounded-full shadow-md flex w-full overflow-hidden divide-x divide-gray-300 p-2">
          <div className='flex items-center px-6 basis-1/4'>
            <input
              type="text"
              placeholder="के खोज्दै हुनु हुन्छ ?"
              className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
            />

          </div>
          <div className='relative flex items-center px-6 basis-1/4'>
            <button className='flex items-center gap-4 text-gray-800' onClick={() => setwhatDowndrop(!whatDowndrop)}>
              कहाँ खोज्दै हुनु हुन्छ ?
              <IoIosArrowDropdown className={`transition-transform ${whatDowndrop ? 'rotate' : ''}`} />
            </button>
            {whatDowndrop && (
              <div className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-48'>
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
          <div className='relative flex items-center px-6 basis-1/4'>
            <button className='flex items-center gap-2 text-gray-800'
              onClick={(e) => { e.preventDefault(); settypeDropdown(!typeDropdown); }}>
              पाहुनाघरको प्रकार
              <IoIosArrowDropdown className={`transition-transform ${typeDropdown ? 'rotate' : ''}`} />
            </button>
            {typeDropdown && (
              <div className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-48'>
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">पाहुनाघर</li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">मामाघर</li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">ढिकी घर</li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">फारमघर</li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">संबाद घर</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center px-6 basis-1/4 ">
            <button className=" hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full flex items-center cursor-pointer gap-1">
              <CiSearch className="text-xl" />
              खोज्नुहोस्
            </button>
          </div>
        </form>

      </div>

      <div className='flex justify-between items-center px-8 py-4 text-black absolute bottom-1 transform -translate-x-2 -translate-y-2 w-full px-8 md:px-4'>
        <div className='flex items-center gap-2 '>
          <IoLocation className='flex object-cover' />अन्तुडाँडा पूर्वी नेपालको एक प्रसिद्ध पर्यटकीय क्षेत्र हो ।
        </div>
        <div className='flex items-center gap-2'>
          <FaCamera className='icon' />फोटो स्रोत |
          <Link to='https://en.wikipedia.org/wiki/Shree_Antu' className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">विकिपिडिया</Link>
        </div>
      </div>
    </div >
  );

  //cover bottom bg


};

export default Home;