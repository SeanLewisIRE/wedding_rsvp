import React from 'react';
import { FiExternalLink } from 'react-icons/fi'


const Directions = () => {
    return (
        <div className='diretions-container bg-white text-center' id="directions">
            <h2>Directions</h2>
            <div className="flex flex-col lg:flex-row content-around lg:w-3/4 mx-auto">
            <div>
            <h3 className='line-break-header w-4/5 lg:w-4/6'><span>TO RATHFEIGH CHURCH</span></h3>
            
            <div className="flex w-4/5 lg:w-3/5 mx-auto text-left my-4">
                <div className="mx-auto">
                    <p>From <strong> Dublin</strong></p>
                    <p>From <strong> Dublin Airport</strong></p>
                </div>
                <div className="mx-auto">
                    <p>40mins</p>
                    <p>30mins</p>
                </div>
            </div>
            
            <iframe 
                title='dublin to rathfeigh church, google maps'
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d303946.394001559!2d-6.655200872868648!3d53.475944375789176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!3m2!1d53.3498053!2d-6.2603097!4m5!1s0x4867404e43b05d75%3A0x3d6947500412ffde!2sChurch%20of%20the%20Immaculate%20Conception%2C%20Rathfeigh%2C%20Co.%20Meath%2C%20Ireland!3m2!1d53.590972699999995!2d-6.4876838!5e0!3m2!1sen!2sie!4v1626204784393!5m2!1sen!2sie"                 allowFullScreen=""
                loading="lazy"
                className="w-80 h-80 md:w-96 md:h-96 mx-auto my-1 border border-dashed border-light-blue-500 p-1"
            />

            <div className="w-4/5 mx-auto flex flex-row items-center justify-center">
                <FiExternalLink />
                <a
                    className="px-1 my-3"
                    alt='dublin to rathfeigh church, google maps' target='_blank' rel='noreferrer' href='https://goo.gl/maps/Gm34WBvfLttL65io7'>Google Maps</a>
            </div>

            <p className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto text-left text-justify mb-4">
                Rathfeigh Church is located just off the N2 between Ashbourne and Slane. The Rathfeigh turn is clearly marked. From the Dublin direction the turn will be on your left. From Monaghan the turn will be on your right. After the turn please follow our sign posts. It's only a 2 minute drive from here but the church is hidden away in a quiet part of the village.
            </p>
                </div>

            <div>
            <h3 className='line-break-header w-4/5 lg:w-4/6'><span>TO TANKARDSTOWN HOUSE</span></h3>

            <div className="flex w-4/5 lg:w-3/5 mx-auto text-justify my-4">
                <div className="mx-auto">
                    <p>From <strong> Rathfeigh Church</strong></p>
                    <p>From <strong> Dublin</strong></p>
                </div>
                <div className="mx-auto">
                    <p>25mins</p>
                    <p>60mins</p>
                </div>
            </div>

            <iframe 
                title='rathfeigh church to tankardstown, google maps'
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d151312.27745062945!2d-6.684069740408856!3d53.66026676235985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4867404e43b05d75%3A0x3d6947500412ffde!2sChurch%20of%20the%20Immaculate%20Conception%2C%20Rathfeigh%2C%20Co.%20Meath%2C%20Ireland!3m2!1d53.590972699999995!2d-6.4876838!4m5!1s0x48674f42f26240cf%3A0x66088a3fdaa4eae5!2sTankardstown%20House%2C%20Tankardstown%2C%20Slane%2C%20County%20Meath!3m2!1d53.740916!2d-6.610937!5e0!3m2!1sen!2sie!4v1622491373258!5m2!1sen!2sie" 
                allowFullScreen=""
                loading="lazy" 
                className="w-80 h-80 md:w-96 md:h-96 mx-auto my-1 border border-dashed border-light-blue-500 p-1"
            />

            <div className="w-4/5 mx-auto flex flex-row items-center justify-center">
                <FiExternalLink />
                <a 
                className="px-1 my-3"
                alt='rathfeigh church to tankardstown, google maps' target='_blank' rel='noreferrer' href='https://goo.gl/maps/BQtdnhRToQmmkoax6'>Google Maps</a>
            </div>

                    <p className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto text-left text-justify mb-4">
                Tankardstown House is located in Rathkenny, just outside Slane. It is a 25 minute drive from the church. From the church, head north on the N2 towards Slane. At Slane village crossroads, turn left and continue for 1.5km. Turn right onto the R162 just after you pass Slane Castle on your left. At the fork in the road, keep left and continue for approximately 4 - 5 mins. The venue will be on your right.           
            </p>
                </div>
            </div>
        </div>
    )
}

export default Directions