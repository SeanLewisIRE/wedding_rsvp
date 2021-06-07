import React from 'react';
import AccomodationCard from './AccomodationCard'
import boyneHouse from '../../static/photos/boyneHouse.jpeg'

const Accomodation = () => {

    const accom = [
        {
            'name': 'BOYNE HOUSE SLANE',
            'image': boyneHouse,
            'number': '+353 41 982 4621',
            'numberHref': 'tel:+353419824621',
            'website': 'https://www.boynehouseslane.ie',
            'key': 1
        },
        {
            'name': 'The D Hotel',
            'image': '',
            'number': '+353 41 987 7700',
            'numberHref': 'tel:+353419877700',
            'website': 'https://www.thedhotel.com',
            'key': 2
        }
    ]

    return(
        <div className="accomodation-container bg-white" id="accomodation">
            <h2>Accomodation</h2>
            <p>Slane is a very small village. 
                Accomodation in the area is limited so we recommend that you 
                reserve as soon as possible.
            </p>
            <br/>
            <p>
                There are also accomodation options available in the nearby towns of Navan, 
                Ashbourne and Drogheda (30 minutes from venue).
            </p>

            <h3 className='line-break-header'>Closest Places</h3>
            <div className='list'>
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

            <h3 className='line-break-header'>Shuttle Bus</h3>

        </div>
    )
}

export default Accomodation