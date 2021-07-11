import React from 'react';
import heroBackground from '../../static/videos/heroBackground.mov'
import imageBackground from '../../static/photos/tankardstownhouse-hero.jpg'
import { BsFillHeartFill } from 'react-icons/bs'
import logo from '../../static/photos/logo.png'
import './Hero.css'

const Hero = () => {

    return(
        <div className="hero" id="hero">
            <img src={imageBackground} alt="Tankardstown house" className="min-h-screen object-cover"/>
            {/* <video className="z-10 h-screen w-full object-cover" autoPlay="autoplay" loop="loop" muted>
                <source src={heroBackground} />
            </video> */}
            <div className="centered text-black text-xl leading-relaxed tracking-widest">
                {/* <img src={logo} alt="wedding logo"/> */}
                <h2>S&amp;D</h2>
                <span className="text-black">WE ARE GETTING MARRIED!</span>
                <BsFillHeartFill className="m-auto" />
                <span>27th AUGUST 2021</span>
            </div>
        </div>
    )
}

export default Hero;