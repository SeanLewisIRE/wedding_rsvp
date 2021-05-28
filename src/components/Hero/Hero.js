import React from 'react';
import heroBackground from '../../static/videos/heroBackground.mov'


const Hero = () => {

    return(
        <div className="hero">
            <video className="z-10 h-screen object-cover" autoPlay="autoplay" loop="loop" muted>
                <source src={heroBackground} />
            </video>
        </div>
    )
}

export default Hero;