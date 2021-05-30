import React from "react";
import dcPhoto from "../../static/photos/donnchadh.jpg"
import slPhoto from "../../static/photos/sarah.jpg"

const Welcome = () => {
    return (
        <article className="container bg-white">
            <h2>Welcome!</h2>
            <div className="image-container flex items-center">
                <img className="w-3/12 rounded-full" src={dcPhoto} alt="The groom"/>
                <p>&#38;</p>
                <img className="w-3/12 rounded-full" src={slPhoto} alt="The bride" />
            </div>
            <p>
                Thanks for visiting our wedding website!
                    <br />
                    We are very excited to celebrate our special day with our family and friends
                </p>
        </article>
    )
}

export default Welcome;