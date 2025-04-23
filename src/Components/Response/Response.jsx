import React from 'react';
import './Response.css';
import first from '../../assests/testimonials/1.jpg';
import second from '../../assests/testimonials/2.jpg';
import third from '../../assests/testimonials/3.jpg';
import { BsQuote } from "react-icons/bs";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";


const Response = () => {
  return (
    <div className='Response'>
      <div className='Pratikriya'>
        <h>
          प्रतिक्रिया
        </h>
        <p>
          स्थानीय श्रोत र साधनको उच्चतम उपयोग गरी आर्थिक उपार्जनका लागि सांस्कृतिक आतिथ्य र स्थानीय खानाको प्रबन्ध मिलाउने <br /> जसले सांस्कृतिक, ग्रामिण र सामाजिक पर्यटनको विकास गर्दै राष्ट्रलाई पर्यटन-मैत्री पहिचान बनाउन र स्थानीय स्तरमा उधमशीलता विकास अनि बिस्तार गर्नेछ |
        </p>
        <div className="container">
          <section className='profile-card'>
            <img src={first} alt='profile' />
            <h1>
              भगवती बर्तौला
            </h1>
            <h2>
              चितवन
            </h2>
            <p>
              <BsQuote className='icon' />
              प्रविधिको विकास संगै एक आपसमा जोडिन सजिलो भएको छ, सामाजिक संजाल संगै समाज परिवर्तनकारी सोच सँग सुरु भएको पाहुनाघरको विचार राम्रो लाग्यो
            </p>
          </section>
          <section className='profile-card'>
            <img src={second} alt='profile' />
            <h1>
              पुर्णिमा उप्रेती
            </h1>
            <h2>
              बिराटनगर
            </h2>
            <p>
              <BsQuote className='icon' />
              घरमै बसेर उधमशीलता साथै अतिथि सत्कारले देशको कुना कुनामा लुकेर रहेको स्थानमा पर्यटन प्रबर्दन गर्नमा ठुलो भूमिका खेल्दछ ।
            </p>

          </section>
          <section className='profile-card'>
            <img src={third} alt='profile' />
            <h1>
              राम प्रसाद अधिकारी
            </h1>
            <h2>
              भोजपुर
            </h2>
            <p>
              <BsQuote className='icon' />
              घुम्ने भनेको आफुलाई मन पर्ने ठाउँ हो, सबै ठाउँमा पाहुनाघर भएको खण्डमा जो सुकै पनि जुनसुकै स्थान पुग्न, त्यसबारेमा जानकारी लिन सक्नेछन ।
            </p>
            <MdOutlineStarBorderPurple500 className='icon' />
          </section>
        </div>
      </div>
      {/* <div className='comment'>
        <div className='first'>
          <img src={first} alt='profile' />
          <h>
            भगवती बर्तौला
          </h>
          <h1>
            चितवन
          </h1>
          <p>
            प्रविधिको विकास संगै एक आपसमा जोडिन सजिलो भएको छ, सामाजिक संजाल संगै समाज परिवर्तनकारी सोच सँग सुरु भएको पाहुनाघरको विचार राम्रो लाग्यो
          </p>

        </div>

      </div> */}

    </div>
  )
}

export default Response
