import React from 'react';
import imageBackground from '../../static/photos/tankardstown.jpeg'
import './Hero.css'

const Hero = () => {

    return(
        <div className="hero " id="hero">
            <img src={imageBackground} alt="Tankardstown house" className="z-10 h-screen min-w-screen object-cover filter grayscale"/>
            <div className="centered text-black text-xl leading-relaxed tracking-widest">
                <h2 className="font-extrabold text-black text-5xl mb-4">S&amp;D</h2>
                <span className="text-royal font-bold">FRIDAY 27th AUGUST 2021</span>
            </div>
        </div>
    )
}

export default Hero;