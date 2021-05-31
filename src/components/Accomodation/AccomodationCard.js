import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
const AccomodationCard = (props) => {

    return (
        <div className='accom-card-image'>
            <h6>{props.name}</h6>
            {props.image ? <img src={props.image} alt={props.name} /> : ''}
            <a href={props.numberHref}><AiTwotonePhone />{props.number}</a>
            <a href={props.website} target='_blank' rel='noreferrer'><CgWebsite />{props.website.replace('https://www.', '')}</a>
        </div>
    )
}

export default AccomodationCard