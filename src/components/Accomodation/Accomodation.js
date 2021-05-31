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
            'website': 'https://www.boynehouseslane.ie'
        },
        {
            'name': 'The D Hotel',
            'image': '',
            'number': '+353 41 987 7700',
            'numberHref': 'tel:+353419877700',
            'website': 'https://www.thedhotel.com'
        }
    ]

    return(
        <div className="accomodation-container bg-white">
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

export default Accomodation