import React from 'react';
import './WhenSection.css'

const WhenSection = () => {

    return (
        <div id='when' className='when-container bg-white text-center'>
            <h2>When</h2>
            <h3 className='line-break-header w-4/5 lg:w-4/6' ><span>FRIDAY 27TH AUGUST</span></h3>

            <h4 className="my-2">01:30PM</h4>
            <p className="w-4/5 mx-auto">We invite you to join us at Rathfeigh Church for the ceremony at 1:30pm. This will be followed by a drinks reception and dinner at Tankardstown House</p>
        
            <div className="container w-4/5 mx-auto my-6">
                <h4 className="my-3">Friday 27th August 2021</h4>

                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

                    <div className="flex flex-row-reverse md:contents">
                        <div
                            className="col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto text-left md:ml-auto md:mr-0 md:text-right"
                        >
                            <h3>Ceremony</h3>
                            <span className="grey">Rathfeigh Church</span>
                            <span className="green-font block">1:30PM</span>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 gold pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full gold"
                            ></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 gold pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full gold "
                            ></div>
                        </div>
                        <div
                            className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto text-left"
                        >
                            <h3>Drinks Reception</h3>
                            <span className="grey">Tankardstown House</span>
                            <span className="green-font block">3:15PM</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div
                            className="col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto text-left md:ml-auto md:mr-0 md:text-right"
                        >
                            <h3>Dinner</h3>
                            <span className="grey">Tankardstown House</span>
                            <span className="green-font block">6:15PM</span>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 gold pointer-events-none"></div>
                            </div>
                            <div
                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full gold "
                            ></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="parallax">

            </div>
        </div>
        
    )
}

export default WhenSection;