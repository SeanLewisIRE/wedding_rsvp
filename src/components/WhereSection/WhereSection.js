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
        <div className="where-container bg-white">
            <h2> Where...</h2>
            <div className="ceremony-container">
                <h3 className='line-break-header' >CEREMONY</h3>
                <h4>RATHFEIGH CHURCH</h4>
                <address>
                    Church of Immaculate Conception
                    Rathfeigh, Co. Meath.
                </address>
                <img src={churchPhoto} alt='Lorem Ipsum Church'/>
                <a href='https://www.google.ie/maps/place/Church+of+the+Immaculate+Conception/@53.5909677,-6.4898685,17z/data=!3m1!4b1!4m5!3m4!1s0x4867404e43b05d75:0x3d6947500412ffde!8m2!3d53.5909727!4d-6.4876838?hl=en'><FiMapPin /> Rathfeigh Church, Google Maps </a>
            </div>

            <div className="reception-container">
                <h3 className='line-break-header' >RECEPTION</h3>
                <h4>TANKARDSTOWN HOUSE</h4>
                <address>Rathkenny Slane, Co. Meath</address>
                <img src={tankardstown} alt='tankardstown house hotel'/>
                <a href='tel:+353419824621'><AiTwotonePhone />+353 41 982 4621</a>
                <a href='https://www.tankardstown.ie/' target='_blank' rel='noreferrer'><CgWebsite />Tankardstown Hosue</a>
                <a href='https://g.page/Tankardstown?share'> <FiMapPin />Tankardstown House, Google Maps</a>
            </div>

            
        </div>
    )
}

export default WhereSection