import React from "react";
import dcPhoto from "../../static/photos/donnchadh.jpg"
import slPhoto from "../../static/photos/sarah.jpg"
import './Welcome.css'

const Welcome = () => {
    return (
        <article className="container bg-white text-center">
            
            <h2>Welcome!</h2>
            
            <div className="image-container flex items-center justify-center">
                <div className="w-4/12 md:w-3/12">
                    <img className="rounded-full border border-dashed border-light-blue-500 p-1" src={dcPhoto} alt="The groom" />
                    <span className="photo-name italic font-medium">Donnchadh</span>
                </div>
                
                <h2>&#38;</h2>

                <div className="w-4/12 md:w-3/12">
                    <img className="rounded-full border border-dashed border-light-blue-500 p-1" src={slPhoto} alt="The bride" />
                    <span className="photo-name italic font-medium">Sarah</span>
                </div>
            </div>

            <p className="w-4/5 md:w-3/5 mx-auto py-4 grey">
                Thanks for visiting our wedding website!
                    <br />
                    We are very excited to celebrate our special day with our family and friends
                </p>

        </article>
    )
}

export default Welcome;