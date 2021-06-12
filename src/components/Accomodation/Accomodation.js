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
        <div className="accomodation-container bg-white text-center" id="accomodation">
            <h2 >Accomodation</h2>
            <p className="w-4/5 md:w-3/5 mx-auto">Slane is a very small village.
                Accomodation in the area is limited so we recommend that you 
                reserve as soon as possible.
            </p>
            <br/>
            <p className="w-4/5 md:w-3/5 mx-auto">
                There are also accomodation options available in the nearby towns of Navan, 
                Ashbourne and Drogheda (30 minutes from venue).
            </p>

            <h3 className='line-break-header'><span>Closest Places</span></h3>
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

            <h3 className='line-break-header'><span>Shuttle Bus</span></h3>
            <div>
                <p className="w-4/5 md:w-3/5 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui finibus nisl lobortis hendrerit. Morbi ipsum orci, molestie quis arcu eget, aliquam pulvinar diam. Proin et purus id nisl mattis vestibulum. Cras pharetra diam volutpat nisi vehicula lacinia. Curabitur et tortor ut neque efficitur condimentum sit amet eu justo.
                </p>
            </div>
        </div>
    )
}

export default Accomodation