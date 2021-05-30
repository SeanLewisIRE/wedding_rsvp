import React from 'react';
import boyneHouse from '../../static/photos/boyneHouse.jpeg'
const Accomodation = () => {
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
                <div className=''>
                    <h6>BOYNE HOUSE SLANE</h6>
                    <img src={boyneHouse} alt='room at boyne house hotel, slane'/>
                </div>
            </div>
        </div>
    )
}

export default Accomodation