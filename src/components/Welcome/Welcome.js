import React, { useState, useRef, useEffect } from "react";
import dcPhoto from "../../static/photos/donnchadh.jpeg"
import slPhoto from "../../static/photos/sarah.jpeg"
import './Welcome.css'

const Welcome = () => {

    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    })

    return (
        <div className="text-center bg-white">
            
            <h2>Welcome!</h2>
            
            <div className="image-container flex items-center justify-center my-6">
                <div className={`fade-in-section ${isVisible ? 'is-visible' : ''} left w-4/12 md:w-3/12 lg:w-48`} ref={domRef}>
                    <img className="rounded-full border border-dashed border-light-blue-500 p-1 max-h-36" src={dcPhoto} alt="The groom" />
                    <span className="photo-name italic font-medium">Donnchadh</span>
                </div>
                
                <h2 className="p-0 mx-2 md:mx-4 lg:mx-8">&#38;</h2>

                <div className={`fade-in-section ${isVisible ? 'is-visible' : ''} right w-4/12 md:w-3/12 lg:w-48`} ref={domRef}>
                    <img className="rounded-full border border-dashed border-light-blue-500 p-1 max-h-36" src={slPhoto} alt="The bride" />
                    <span className="photo-name italic font-medium">Sarah</span>
                </div>
            </div>

            <p className="w-4/5 md:w-3/5 lg:w-2/4 mx-auto py-4 grey">
                Thanks for visiting our wedding website!
                    <br />
                    We are very excited to celebrate our special day with our family and friends
                </p>

        </div>
    )
}

export default Welcome;