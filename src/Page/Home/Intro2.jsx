import React from 'react'
import BloodSlide from '../../Picture/BloodDonation.jpg'
import './Intro.css'

const Intro = () => {
    return (
        <div className='Intro'>
            <div className="leftSide">
                <div className="container">
                    <img src={BloodSlide} alt="BloodDonation" />
                </div>
            </div>
            <div className="rightSide">
                <div className="textContainer">
                    <h2>hello</h2>
                </div>
            </div>
        </div>
    )
}

export default Intro
