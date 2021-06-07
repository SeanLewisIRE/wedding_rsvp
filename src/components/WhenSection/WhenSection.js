import React from 'react';
import './WhenSection.css'

const WhenSection = () => {

    return (
        <div id='when' className='when-container bg-white'>
            <h2>When</h2>
            <h3 className='line-break-header' >FRIDAY 27TH AUGUST</h3>
            <h4>1400 hrs Zulu</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
            <h3 className='line-break-header' >SATURDAY 28TH AUGUST</h3>
            <h4>1300 hrs Zulu</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        
            <div className='timeline bg-gray-200'>
                <h4 >Thursday</h4>
                <div className="tl-container right">
                    <div className="content">
                        <h3>CEREMONY</h3>
                        <p>Church</p>
                        <p>*time*</p>
                    </div>
                </div>
                <div className="tl-container left">
                    <div className="content">
                        <h3>DRINKS RECEPTION</h3>
                        <p>Tankardstown House</p>
                    </div>
                </div>
                <div className="tl-container right">
                    <div className="content">
                        <h3>DINNER</h3>
                        <p>Tankardstown</p>
                        <p>*Sub address if known*</p>
                    </div>
                </div>
                <h4>Friday</h4>
                <div className="tl-container left">
                    <div className="content">
                        <h3>BBQ</h3>
                        <p>Location</p>
                        <p>*time*</p>
                    </div>
                </div>
            </div>

            <div className="parallax">

            </div>
        </div>
        
    )
}

export default WhenSection;