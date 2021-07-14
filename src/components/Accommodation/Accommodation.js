import React from 'react';
import AccomodationCard from './AccommodationCard'
import boyneHouse from '../../static/photos/boyneHouse.jpeg'
import rosnaree from '../../static/photos/rosnaree.jpeg'
import collonhouse from '../../static/photos/collonhouse.jpeg'
import oldpostoffice from '../../static/photos/oldpostoffice.jpeg'
import conyarms from '../../static/photos/conyarms.jpeg'

const Accommodation = () => {

    const accom = [
        {
            'name': 'Boyne House Slane',
            'image': boyneHouse,
            'number': '+353 41 982 4621',
            'numberHref': 'tel:+353419824621',
            'website': 'https://www.boynehouseslane.ie',
            'key': 1
        },
        {
            'name': 'The Conyngham Arms',
            'image': conyarms,
            'number': '+353 41 98 84444',
            'numberHref': 'tel:+353419884444',
            'website': 'https://www.conynghamarms.ie',
            'key': 2
        },
        {
            'name': 'The Old Post Office',
            'image': oldpostoffice,
            'number': '+353 41 982 4090',
            'numberHref': 'tel:+353419824090',
            'website': 'https://www.oldpostoffice.ie',
            'key': 3
        },
        {
            'name': 'Collon House',
            'image': collonhouse,
            'number': '+353 87 235 5645',
            'numberHref': 'tel:+353872355645',
            'website': 'http://www.collonhouse.com',
            'key': 4
        },
        {
            'name': 'Rosnaree Boutique B&B',
            'image': rosnaree,
            'number': '+353 41 982 0975',
            'numberHref': 'tel:+353419820975',
            'website': 'http://www.rossnaree.ie',
            'key': 5
        }
    ]

    return(
        <div className="accommodation-container bg-white text-center" id="accommodation">
            <h2 >Accommodation</h2>
            <p className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto">
                Slane is a very small village and accommodation in the area is limited, so we recommend you reserve as soon as possible.  
            </p>
            <br/>
            <p className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto">
                We've blocked off rooms at all Tankardstown House properties (on-site at Tankardstown, Boyne House, The Conyngham Arms and The Old Post Office), but there are also other options in the surrounding area.
            </p>

            <h3 className='line-break-header w-4/5 lg:w-4/6'><span>Closest Places</span></h3>
            <div className='list flex flex-wrap w-4/5 md:w-3/5 mx-auto justify-center'>
                {accom.map(item => (
                    <AccomodationCard 
                        key={item.key}
                        name={item.name}
                        image={item.image}
                        number={item.number}
                        website={item.website}
                    />
                ))}
            </div>

        </div>
    )
}

export default Accommodation