import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../index';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import your images
import Achamaghar from '../../assests/icons/achammako-ghar.png';
import bhansaghar from '../../assests/icons/bhansa-ghar.png';
import chalchitra from '../../assests/icons/chalchitra-ghar.png';
import charaghar from '../../assests/icons/chara-ghar.png';
import chitra from '../../assests/icons/chitra-ghar.png';
import farm from '../../assests/icons/farm-house.png';
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
  speed: 500,
  slidesToShow: 11,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
};

const icons = [
  { src: charaghar, title: 'चरा घर' },
  { src: dinner, title: 'डिनर घर' },
  { src: Achamaghar, title: 'अचम्म घर' },
  { src: khaja, title: 'खाजा घर' },
  { src: bhansaghar, title: 'भान्सा घर' },
  { src: maha, title: 'हस्य घर' },
  { src: chalchitra, title: 'चलचित्र घर' },
  { src: jaato, title: 'टिकी घर' },
  { src: sambad, title: 'गोठ घर' },
  { src: farm, title: 'फार्म घर' },
];

const Middle = () => {
  const sliderRef = useRef(null);

  return (
    <div className='py-8'>
      <div className='relative w-full p-8'>
        <FaChevronLeft
          className='absolute left-0 top-1/2 -translate-y-1/2 text-gray-700 text-3xl cursor-pointer hover:text-black active:scale-90 z-10'
          onClick={() => sliderRef.current.slickPrev()}
        />
        <Slider ref={sliderRef} {...settings} className='w-full p-4'>
          {icons.map((icon, index) => (
            <div key={index} className='flex flex-col items-center gap-1 '>
              <img
                src={icon.src}
                alt={icon.title}
                className='w-10 h-10 object-contain grayscale-[100] gap-1'
              />
              <p className="text-black text-sm mt-2">{icon.title}</p>
            </div>
          ))}
        </Slider>
        <FaChevronRight
          className='absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 text-3xl cursor-pointer hover:text-black active:scale-90 z-10'
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
      <div className='flex justify-center items-center gap-12 p-4 bg-gray-100 rounded-xl w-full shadow-sm'>
        <a href="http://baskotaconsulting.com.np" target="_blank" rel="noopener noreferrer">
          <img src={baskota} alt='baskota' className='h-20 object-contain' />
        </a>
        <a href="https://sriyog.com" target="_blank" rel="noopener noreferrer">
          <img src={sriyog} alt="sriyog" className='h-20 object-contain' />
        </a>
      </div>

      <div className='text-center mb-6'>
        <h2 className='text-2xl font-bold'>लोकप्रिय गन्तव्यहरू</h2>
        <p className='text-gray-500 mt-2'>नेपालमा लुकेका कुनाहरू अवलोकन गर्नुहोस् । #Freedom of Living.</p>
      </div>

    </div>
  );
};

export default Middle;
