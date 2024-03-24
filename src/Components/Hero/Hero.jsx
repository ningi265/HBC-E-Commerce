import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/interface.png'
import arrow_icon from '../Assets/right-arrow.png'
import hero_image from '../Assets/product_33.jpeg'

const Hero = () => {
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
                <div>Latest Items</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  );
};

export default Hero;
