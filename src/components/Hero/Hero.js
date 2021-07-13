import React from 'react';
import imageBackground from '../../static/photos/tankardstownhouse-hero.jpg'
import { BsFillHeartFill } from 'react-icons/bs'
import './Hero.css'

const Hero = () => {

    return(
        <div className="hero " id="hero">
            <img src={imageBackground} alt="Tankardstown house" className="z-10 h-screen min-w-screen object-cover filter grayscale"/>
            <div className="centered text-black text-xl leading-relaxed tracking-widest">
                {/* <img src={logo} alt="wedding logo"/> */}
                <h2>S&amp;D</h2>
                <span className="text-royal">WE ARE GETTING MARRIED!</span>
                <BsFillHeartFill className="m-auto" />
                <span className="text-royal">27th AUGUST 2021</span>
            </div>
        </div>
    )
}

export default Hero;