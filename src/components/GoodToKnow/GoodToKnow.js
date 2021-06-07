import React from 'react'
import { FaBaby, FaPlane } from 'react-icons/fa'
import { BiBus } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'

const GoodToKnow = () => {
    return(
        <div className='good-container bg-white' id="goodToKnow">
            <h2>Good to know...</h2>
            <div className="items flex flex-wrap">

                <div className="info-item ">
                    <div className="bg-yellow-300 h-16 w-16">
                        <FaBaby />
                    </div>
                    <h3>BABY-SITTER</h3>
                    <p>There is a kids playroom next to the dining room. A baby-sitter will be available for children during the evening.</p>
                    
                </div>

                <div className="info-item">
                    <div className="bg-yellow-300 h-16 w-16">
                        <BiBus />
                    </div>
                    <h3>SHUTTLE BUS</h3>
                    <p>For those staying in nearby accommodation, we have arranged a courtesy bus to bring you back to your accommodation later. Please let us know if you are interested.</p>
                    
                </div>

                <div className="info-item">
                    <div className="bg-yellow-300 h-16 w-16">
                        <FaPlane />
                    </div>
                    <h3>FLIGHTS FROM THE UK</h3>
                    <p>Covid restrictions or something</p>
                    <div className="bg-red-200">
                        Do you want flight logos?
                    </div>
                </div>

                <div className="info-item">
                    <div className="bg-yellow-300 h-16 w-16">
                        <AiFillCar />
                    </div>
                        <h3>CAR RENTAL</h3>
                        <p>There are several car rental providers available.</p>
                        <div className="bg-red-200">
                            Do you want car rentals?
                        </div>
                </div>
            </div>
        </div>
    )
}

export default GoodToKnow