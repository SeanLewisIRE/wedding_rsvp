import React from 'react'
import { FaBaby, FaPlane } from 'react-icons/fa'
import { BiBus } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'

const GoodToKnow = () => {
    return(
        <div className='good-container bg-white text-center' id="goodToKnow">
            <h2>Good to know...</h2>
            <div className="items flex flex-wrap">

                <div className="info-item flex-grow md:flex-grow-0 my-4">
                    <div className="flex items-center justify-center bg-yellow-300 h-16 w-16 rounded-full mx-auto ">
                        <BiBus />
                    </div>
                    <h3>SHUTTLE BUS</h3>
                    <p className="w-80 mx-auto">For those staying in nearby accommodation, we have arranged a courtesy bus to bring you back to your accommodation later. Please let us know if you are interested.</p>
                    
                </div>

                <div className="info-item flex-grow md:flex-grow-0 my-4">
                    <div className="flex items-center justify-center bg-yellow-300 h-16 w-16 rounded-full mx-auto ">
                        <FaPlane />
                    </div>
                    <h3>FLIGHTS FROM THE UK</h3>
                    <p className="w-80 mx-auto">Covid restrictions or something</p>
                    <p className="w-80 mx-auto bg-red-200">
                        Do you want flight logos?
                    </p>
                </div>

                <div className="info-item flex-grow md:flex-grow-0 my-4">
                    <div className="flex items-center justify-center bg-yellow-300 h-16 w-16 rounded-full mx-auto ">
                        <AiFillCar />
                    </div>
                        <h3>CAR RENTAL</h3>
                        <p className="w-80 mx-auto">There are several car rental providers available.</p>
                        <p className="w-80 mx-auto bg-red-200">
                        Do you want car rentals?
                        </p>
                </div>
            </div>
        </div>
    )
}

export default GoodToKnow