import React from 'react'
import './DonateInfo.css'
import donate from '../../Picture/donate.jpg'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material';
// import donate from '../../Picture/Heart.gif'

const DonateInfo = () => {
    let donor = useHistory()
    const donorPage = () => {
        donor.push('DonarForm')
    }
    return (
        <div className="InfoContainer">
            <div className="info">
                <div className="infoLeft">
                    <img src={donate} alt="donate" />
                </div>
                <div className="infoRight">
                    <h2>Why Should Donate The Blood ?</h2>
                    <p>Blood donation is a community responsibility. While you're reading this, a local patient needs blood.</p>
                    <div className="list">
                        <p><i><small>
                            Blood is needed every two seconds.
                        </small></i></p>
                        <p><i><small>
                            About one in seven people entering a hospital needs blood.
                        </small></i></p>
                        <p><i><small>
                            Blood is always needed for treatment of accident victims, cancer patients, hemophiliacs and surgery patients.
                        </small></i></p>
                        <p><i><small>
                            Blood cannot be manufactured.
                        </small></i></p>
                        <p><i><small>
                            Only 37 percent of our country's population is eligible to give blood, and less than 10 percent of
                            those who can donate actually do donate annually.
                        </small></i></p>
                    </div>
                    <p>
                        What if everyone eligible to donate became complacent and decided they didn't need to donate because someone else would?
                    </p>
                    <p>
                        What if there wasn't enough donated blood available when you, a loved one - anyone - needed it?
                    </p>
                    <p>
                        Our blood supply comes from caring donors like you. It takes about one hour of your time. When you give blood, it gives someone another smile, another hug, another chance. It is the gift of life.
                    </p>

                    <Button variant="contained" className="donorButton" onClick={donorPage}>Be A Donor</Button>
                </div>
            </div>

        </div>
    )
}

export default DonateInfo
