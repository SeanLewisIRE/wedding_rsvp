import React from 'react'
import { FaBaby, FaPlane } from 'react-icons/fa'
import { BiBus } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'

const GoodToKnow = () => {
    return(
        <div className='good-container bg-white'>
            <h2>Good to know...</h2>
            <div className="items flex flex-wrap">

                <div className="info-item ">
                    <div className="bg-yellow-300 h-16 w-16">
                        <FaBaby />
                    </div>
                    <h2>BABY-SITTER</h2>
                    <p>There is a kids playroom next to the dining room. A baby-sitter will be available for children during the evening.</p>
                    
                </div>

                <div className="info-item">
                    <div className="bg-yellow-300 h-16 w-16">
                        <BiBus />
                    </div>
                    <h2>SHUTTLE BUS</h2>
                    <p>For those staying in nearby accommodation, we have arranged a courtesy bus to bring you back to your accommodation later. Please let us know if you are interested.</p>
                    
                </div>

                <div className="info-item">
                    <div className="bg-yellow-300 h-16 w-16">
                        <FaPlane />
                    </div>
                    <h2>FLIGHTS FROM THE UK</h2>
                    <p>Covid restrictions or something</p>
                    <div className="bg-red-200">
                        Do you want flight logos?
                    </div>
                </div>

                <div className="info-item">
                    <div className="bg-yellow-300 h-16 w-16">
                        <AiFillCar />
                    </div>
                        <h2>CAR RENTAL</h2>
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