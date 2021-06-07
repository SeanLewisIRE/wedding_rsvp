import React from 'react';

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


        <div className="things-container bg-white" id="things">
            <h2>Things to do...</h2>
            <h3 className='line-break-header'>NEAR THE VENUE</h3>

            <div className="allItems">
                {amenities.map(item => (
                    <div className="item">
                        <h3>{item.title}</h3>
                        <a href={item.link} >{item.link_copy}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ThingsToDo