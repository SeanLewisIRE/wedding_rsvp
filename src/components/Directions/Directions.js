import React from 'react';
import { FaTaxi } from 'react-icons/fa'
const Directions = () => {
    return (
        <div className='diretions-container bg-white' id="directions">
            <h2>Directions</h2>
            <h3 className='line-break-header'>To RATHFEIGH CHURCH</h3>
            
            <div>
                <div>
                    <p>From Dublin</p>
                    <p>From Dublin Airport</p>
                </div>
                <div>
                    <p>40mins</p>
                    <p>30mins</p>
                </div>
            </div>

            <iframe 
                title='dublin to rathfeigh church, google maps'
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d151992.5812997315!2d-6.544436021966344!3d53.47053171151002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!3m2!1d53.3498053!2d-6.2603097!4m5!1s0x4867404e43b05d75%3A0x3d6947500412ffde!2sChurch%20of%20the%20Immaculate%20Conception%2C%20Rathfeigh%2C%20County%20Meath!3m2!1d53.590972699999995!2d-6.4876838!5e0!3m2!1sen!2sie!4v1622490705927!5m2!1sen!2sie"
                allowFullScreen=""
                loading="lazy"
                className='border-none h-96 w-96'
            />
            <a alt='dublin to rathfeigh church, google maps' target='_blank' rel='noreferrer' href='https://goo.gl/maps/Gm34WBvfLttL65io7'>dublin to rathfeigh church, google maps</a>
            <p>
                Rathfeigh Church is located just off the N2 between Ashbourne and Slane. The Rathfeigh turn is clearly marked. From the Dublin direction the turn will be on your left. From Monaghan the turn will be on your right. After the turn please follow our sign posts. It's only a 2 minute drive from here but the church is hidden away in a quiet part of the village.
            </p>
            
            <h3 className='line-break-header'>TO TANKARDSTOWN HOUSE</h3>
            <div>
                <div>
                    <p>From Rathfeigh Church</p>
                    <p>From Dublin</p>
                </div>
                <div>
                    <p>25mins</p>
                    <p>60mins</p>
                </div>
            </div>

            <iframe 
                title='rathfeigh church to tankardstown, google maps'
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d151312.27745062945!2d-6.684069740408856!3d53.66026676235985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4867404e43b05d75%3A0x3d6947500412ffde!2sChurch%20of%20the%20Immaculate%20Conception%2C%20Rathfeigh%2C%20Co.%20Meath%2C%20Ireland!3m2!1d53.590972699999995!2d-6.4876838!4m5!1s0x48674f42f26240cf%3A0x66088a3fdaa4eae5!2sTankardstown%20House%2C%20Tankardstown%2C%20Slane%2C%20County%20Meath!3m2!1d53.740916!2d-6.610937!5e0!3m2!1sen!2sie!4v1622491373258!5m2!1sen!2sie" 
                allowFullScreen=""
                loading="lazy" 
                className='border-none h-96 w-96'
            />
            <a alt='rathfeigh church to tankardstown, google maps' target='_blank' rel='noreferrer' href='https://goo.gl/maps/BQtdnhRToQmmkoax6'>rathfeigh church to tankardstown, google maps</a>
            <p>
                Tankardstown House is located in Rathkenny just outside Slane. It is a 25 min drive from the Church. After the church head north on the N2 for Slane. At Slane village crossroads turn left and continue for 1.5km. Turn right for the R162 just after you pass Slane Castle on your left. At the fork in the road keep left and continue for approx 4 - 5 mins. The venue will be on your right.
            </p>

            <h3 className='line-break-header'> <FaTaxi /> TAXI - Airport Collection</h3>


        </div>
    )
}

export default Directions