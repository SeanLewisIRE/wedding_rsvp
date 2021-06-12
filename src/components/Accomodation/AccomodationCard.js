import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
const AccomodationCard = (props) => {

    return (
        <div className='accom-card-image my-8'>
            <h6 className="my-1">{props.name}</h6>
            {props.image ? <img src={props.image} alt={props.name} className="w-4/5 md:w-3/5 mx-auto my-1 border border-dashed border-light-blue-500 p-1" /> : ''}
            <div className="flex flex-row items-center justify-center">
                <AiTwotonePhone />
                <a 
                    className="px-1 my-1"
                    href={props.numberHref}>{props.number}
                </a>
            </div>
            <div className="flex flex-row items-center justify-center">
                <CgWebsite />
                <a 
                    className="px-1 my-1"
                    href={props.website} target='_blank' rel='noreferrer'>{props.website.replace('https://www.', '')}
                </a>
            </div>
        </div>
    )
}

export default AccomodationCard