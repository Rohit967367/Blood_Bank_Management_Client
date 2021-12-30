import React from 'react'
import './Donar.css'
import NavBar from '../NavBar'
// import { Button } from '@material-ui/core'
// import DonarItem from './DonarItem'
import DonateInfo from './DonateInfo'

const Donar = () => {
    return (
        <div className='donar'>
            <NavBar />
            <div className="donarContainer">
                {/* <DonarItem /> */}
                <DonateInfo />
            </div>
        </div>
    )
}

export default Donar
