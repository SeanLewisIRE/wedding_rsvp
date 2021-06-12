import React from 'react';
import { FiExternalLink } from 'react-icons/fi'

const ThingsToDo = () => {

    const amenities = [
        {
            "title": "SLANE CASTLE",
            "link_copy": "slanecastle.ie",
            "link": "https://www.slanecastle.ie/"
        },
        {
            "title": "SLANE HISTORIC TOWN WALK",
            "link_copy": "discoverireland.ie",
            "link": "https://www.discoverireland.ie/meath/slane-self-guided-historic-town-walk"
        },
        {
            "title": "BOYNE VALLEY TOURING ROUTE",
            "link_copy": "discoverboynevalley.ie",
            "link": "https://www.discoverboynevalley.ie/"
        },
        {
            "title": "SLANE WHISKEY DISTILLERY",
            "link_copy": "slaneirishwhiskey.com",
            "link": "https://www.slaneirishwhiskey.com/"
        },
        {
            "title": "NEWGRANGE WORLD HERITAGE",
            "link_copy": "newgrange.com",
            "link": "https://www.newgrange.com/"
        },
        {
            "title": "TAYTO PARK",
            "link_copy": "taytopark.ie",
            "link": "https://taytopark.ie/"
        },

    ]

    return (


        <div className="things-container bg-white text-center" id="things">
            <h2>Things to do...</h2>
            <h3 className='line-break-header'>NEAR THE VENUE</h3>

            <div className="flex flex-wrap mb-9 w-4/5 mx-auto ">
                {amenities.map(item => (
                    <div className="w-60 item p-4 mx-auto " key={item.title}>
                        <h3>{item.title}</h3>
                        <div className="w-4/5 mx-auto flex flex-row items-center justify-center">

                            <FiExternalLink />

                            <a
                                className="px-1 my-2 text-sm"
                                href={item.link} 
                                target="_blank"
                                rel="noreferrer"
                                >
                                {item.link_copy}
                            </a>
                        </div>

                    </div>



                    
                ))}
            </div>
        </div>
    )
}

export default ThingsToDo