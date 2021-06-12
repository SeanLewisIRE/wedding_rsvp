import React from 'react';
import './WhenSection.css'

const WhenSection = () => {

    return (
        <div id='when' className='when-container bg-white text-center'>
            <h2>When</h2>
            <h3 className='line-break-header' ><span>FRIDAY 27TH AUGUST</span></h3>
            <h4>1400 hrs Zulu</h4>
            <p className="w-4/5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
            <h3 className='line-break-header'><span>SATURDAY 28TH AUGUST</span></h3>
            <h4>1300 hrs Zulu</h4>
            <p className="w-4/5 mx-auto" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        

            <div className="container w-4/5 mx-auto my-6">
                <h4 className="my-3">Thursday</h4>

                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

                    <div className="flex flex-row-reverse md:contents">
                        <div
                            className="col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto text-left md:ml-auto md:mr-0 md:text-right"
                        >
                            <h3>CEREMONY</h3>
                            <span className="grey">Church</span>
                            <span className="green-font block">*time*</span>
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
                            <h3>BBQ</h3>
                            <span className="grey">Location</span>
                            <span className="green-font block">*time*</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div
                            className="col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto text-left md:ml-auto md:mr-0 md:text-right"
                        >
                            <h3>DINNER</h3>
                            <span className="grey">Tankardstown</span>
                            <span className="grey block">*Sub address if known*</span>
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

                <h4 className="my-3">Thursday</h4>
                
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

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
                            <h3>BBQ</h3>
                            <span className="grey">Location</span>
                            <span className="green-font block">*time*</span>
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