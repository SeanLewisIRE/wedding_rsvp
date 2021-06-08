import React from 'react';
import './WhenSection.css'

const WhenSection = () => {

    return (
        <div id='when' className='when-container bg-white text-center'>
            <h2>When</h2>
            <h3 className='line-break-header' ><span>FRIDAY 27TH AUGUST</span></h3>
            <h4>1400 hrs Zulu</h4>
            <p className="w-80 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
            <h3 className='line-break-header'><span>SATURDAY 28TH AUGUST</span></h3>
            <h4>1300 hrs Zulu</h4>
            <p className="w-80 mx-auto" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
            <h4 className="my-3">Thursday</h4>

            <div class="container">
                <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3>CEREMONY</h3>
                            <p>Church</p>
                            <p>*time*</p>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>

                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >
                            <h3>DINNER</h3>
                            <p>Tankardstown</p>
                            <p>*Sub address if known*</p>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>

                    <div class="flex flex-row-reverse md:contents">
                        <div
                            class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                        >

                            <h3>DRINKS RECEPTION</h3>
                            <p>Tankardstown House</p>
                        </div>
                        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                            ></div>
                        </div>
                        <div
                            class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                        >
                            <h3>BBQ</h3>
                            <p>Location</p>
                            <p>*time*</p>
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