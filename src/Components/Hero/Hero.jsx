import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/interface.png';
import arrow_icon from '../Assets/right-arrow.png';

const Hero = ({ scrollToItem }) => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>items in stock</p>
        </div>
        <div className="hero-latest-btn">
          <button onClick={scrollToItem}>
            Latest Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
