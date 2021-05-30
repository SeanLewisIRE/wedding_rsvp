import React from 'react';
import churchPhoto from '../../static/photos/glenstal.jpeg'
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
                <h4>Lorem Ipsum Church</h4>
                <address>Address for Lorem Ipsum Church, Co. Cork (surely)</address>
                <img src={churchPhoto}/>
                <a><FiMapPin /> Lorem Ipsum Church, Google Maps </a>
            </div>

            <div className="reception-container">
                <h3 className='line-break-header' >RECEPTION</h3>
                <h4>TANKARDSTOWN House</h4>
                <address>Rathkenny Slane, Co. Meath</address>
                <img src={tankardstown} />
                <a href='tel:+353419824621'><AiTwotonePhone />+353 41 982 4621</a>
                <a href='https://www.tankardstown.ie/' target='_blank' rel='noreferrer'><CgWebsite />Tankardstown Hosue</a>
                <a href='https://g.page/Tankardstown?share'> <FiMapPin />Tankardstown House, Google Maps</a>
            </div>

            
        </div>
    )
}

export default WhereSection