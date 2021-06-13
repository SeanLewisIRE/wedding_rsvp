import React from 'react';
import churchPhoto from '../../static/photos/rathfeighChurch.png'
import tankardstown from '../../static/photos/tankardstown.jpeg'
// React Icons
import { FiMapPin } from 'react-icons/fi'
import { AiTwotonePhone } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

import './WhereSection.css'

const WhereSection = () => {
    return (
        <div className="where-container bg-white text-center" id="where">
            <h2> Where...</h2>

            <div className="flex flex-wrap w-4/5 md:w-3/5 mx-auto justify-center">
                <div className="ceremony-container w-full lg:w-1/2 mx-auto">
                    <h3 className='line-break-header w-full lg:w-4/5'><span>CEREMONY</span></h3>
                <div >
                    <h4>RATHFEIGH CHURCH</h4>
                        <address className="grey w-2/5 h-20 mx-auto text-xs">
                        Church of Immaculate Conception
                        <strong> Rathfeigh</strong>, Co. Meath.
                    </address>
                    <img src={churchPhoto} alt='RATHFEIGH CHURCH' className="w-4/5 md:w-8/12 mx-auto my-1 border border-dashed border-light-blue-500 p-1"/>
                    
                    <div className="flex flex-row items-center justify-center">
                    <FiMapPin />
                    <a  
                        className="px-1 my-1"
                        href='https://www.google.ie/maps/place/Church+of+the+Immaculate+Conception/@53.5909677,-6.4898685,17z/data=!3m1!4b1!4m5!3m4!1s0x4867404e43b05d75:0x3d6947500412ffde!8m2!3d53.5909727!4d-6.4876838?hl=en'
                        target="_blank"
                        rel="noreferrer"
                        >
                        Rathfeigh Church, Google Maps 
                    </a>
                    </div>
                </div>
                </div>

                <div className="ceremony-container w-full lg:w-1/2 mx-auto">
                    <h3 className='line-break-header w-full lg:w-4/5' ><span>RECEPTION</span></h3>
                <div className="reception-container ">
                    <h4>TANKARDSTOWN HOUSE</h4>
                        <address className="grey w-2/5 h-20 mx-auto text-xs">Rathkenny<strong> Slane</strong>, Co. Meath</address>
                    <img src={tankardstown} alt='tankardstown house hotel' className="w-4/5 md:w-8/12 mx-auto my-1 border border-dashed border-light-blue-500 p-1"/>
                    
                    <div className="flex flex-row items-center justify-center">
                        <AiTwotonePhone />
                        <a 
                            className="px-1 my-1"
                            href='tel:+353419824621'>
                            +353 41 982 4621
                        </a>
                    </div>
                    
                    <div className="flex flex-row items-center justify-center">
                        <CgWebsite />
                        <a 
                            className="px-1 my-1"
                            href='https://www.tankardstown.ie/' target='_blank' rel='noreferrer'>
                            Tankardstown House
                        </a>
                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <FiMapPin />
                        <a 
                        className="px-1 my-1"
                        href='https://g.page/Tankardstown?share'
                        target="_blank"
                        rel="noreferrer"
                        >
                            Tankardstown House, Google Maps
                        </a>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default WhereSection