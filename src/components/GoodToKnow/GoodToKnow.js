import React from 'react'
import { FaPlane } from 'react-icons/fa'
import { BiBus } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'
import aerLingus from '../../static/photos/logo-aerlingus.png'
import ryanair from '../../static/photos/logo-ryanair.png'
import hertz from '../../static/photos/logo-hertz.png'
import enterprise from '../../static/photos/logo-enterprise.png'
import europcar from '../../static/photos/logo-europcar.png'

const GoodToKnow = () => {
    return(
        <div className='good-container bg-white text-center' id="goodToKnow">
            <h2>Good to know...</h2>
            <div className="items flex flex-wrap w-85 mx-auto">

                <div className="info-item flex-grow my-4">
                    <div className="flex items-center justify-center gold h-16 w-16 rounded-full mx-auto ">
                        <BiBus />
                    </div>
                    <h3 className="my-2">SHUTTLE BUS</h3>
                    <p className="w-4/5 md:w-3/5 mx-auto ">For those staying in nearby accommodation, we have arranged a courtesy bus to bring you back to your accommodation later. Please let us know if you are interested.</p>
                    
                </div>

                <div className="info-item flex-grow  my-4 w-4/5 md:w-3/5">
                    <div className="flex items-center justify-center gold h-16 w-16 rounded-full mx-auto ">
                        <FaPlane />
                    </div>
                    <h3 className="my-2">FLIGHTS FROM THE UK</h3>
                    <p className=" mx-auto m-2">Covid restrictions or something</p>
                    <div className="mx-auto mt-2 flex justify-center flex-wrap w-4/5 md:w-3/5">
                        <a className="p-2" href="https://www.aerlingus.com/" target="_blank" rel="noreferrer" >
                            <img src={aerLingus} className="h-10 w-36" alt="aerlingus logo"/>
                        </a>
                        <a className="p-2" href="https://www.ryanair.com/" target="_blank" rel="noreferrer">
                            <img src={ryanair} className="h-10 w-36" alt="ryanair logo"/>
                        </a>
                    </div>
                </div>

                <div className="info-item flex-grow  my-4 w-4/5 md:w-3/5">
                    <div className="flex items-center justify-center gold h-16 w-16 rounded-full mx-auto ">
                        <AiFillCar />
                    </div>
                    <h3 className="my-2">CAR RENTAL</h3>
                        <p className="mx-auto m-2">There are several car rental providers available.</p>
                    
                    <div className="mx-auto mt-2 flex justify-around flex-wrap w-4/5 md:w-3/5">
                        <a className="p-2" href="https://www.hertz.com/rentacar/reservation/" target="_blank" rel="noreferrer" >
                            <img src={hertz} className="h-10 w-36" alt="hertz logo" />
                        </a>
                        <a className="p-2" href="https://www.enterprise.com/" target="_blank" rel="noreferrer">
                            <img src={enterprise} className="h-10 w-36" alt="enterprise logo" />
                        </a>
                        <a className="p-2" href="https://www.europcar.com/" target="_blank" rel="noreferrer">
                            <img src={europcar} className="h-10 w-36" alt="europcar logo" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GoodToKnow