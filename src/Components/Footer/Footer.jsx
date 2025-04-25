import React from 'react';
import './Footer.css';
import blog1 from '../../assests/blog/how-to-start-pahunaghar.jpg';
import blog2 from '../../assests/blog/started-at-taplejung.jpg';
import blog3 from '../../assests/blog/ginger-garlic.jpg';
import blog4 from '../../assests/blog/homestay-in-nepal.jpg';


const Footer = () => {
  return (
    <div className='Footer-grid'>
      <div className='Footer blog'>
        <img src={blog1} alt='picture' />
        <div className="absolute inset-0 flex flex-col justify-center items-center  text-center p-4 space-y-2">
          <button className="bg-green-600 px-4 py-1 rounded font-semibold">ब्लग</button>
          <h2 className="text-xl font-bold text-black z-10">पाहुनाघर कसरी सुरु गर्ने? hello</h2>
          <p className="text-sm">२१ फाल्गुन २०७७</p>
        </div>
      </div>
      <div className='Footer news'>
        <img src={blog2} alt='picture' />
        {/* <button>समाचार</button>
        <h2>गृहणीलाई उधमशील बनाउदै : पाहुनाघर सन्चालन तयारी</h2>
        <p>१७ फाल्गुन २०७७</p> */}
      </div>
      <div className='Footer recipe'>
        <img src={blog3} alt='picture' />
        {/* <button>रेसिपी</button>
        <h2>लसुन र अदुवाको अचार</h2>
        <p>९ फाल्गुन २०७७</p> */}
      </div>
      <div className='Footer travel'>
        <img src={blog4} alt='picture' />
        {/* <button>यात्रा</button>
        <h2>यात्रा रहेछ जिन्दगी</h2>
        <p>३ फाल्गुन २०७७</p> */}
      </div>
    </div>
  );
}

export default Footer
