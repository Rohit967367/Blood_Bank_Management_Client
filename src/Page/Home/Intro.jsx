import React, { useEffect, useRef } from 'react'
import './Intro.css'
import Blood from '../../Picture/BloodDonation.jpg'
import { useHistory } from 'react-router'
// import Button from '@material-ui/icons'
import { init } from 'ityped'
import { Button } from '@mui/material'

const Intro = () => {

    let textType = useRef()

    useEffect(() => {
        init(textType.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [`We need you to save life.`, 
            `Donate Blood so that others may live ...`, 
            `Light up a lamp of life by donating Blood.`],
        });
    }, []);

    let donatePage = useHistory()
    let goDonatePage = () => {
        donatePage.push('/DonarForm')
    }

    return (
        <div className='intro' id='intro'>
            <div className="leftIntro">
                <img src={Blood} alt="" />
            </div>
            <div className="rightIntro">
                <div className="Intro">
                    <h2>Blood donation will cost you nothing but
                        it will save a life !</h2>
                    <span ref={textType}></span>
                    <br />
                    <div className="homeButton">
                        <Button onClick={goDonatePage}>Donate now</Button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
