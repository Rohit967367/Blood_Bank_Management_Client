import React from 'react'
// import { Button } from '@material-ui/core'
import './Toolkid.css';

const Toolkid = () => {
    return (
        <div className="toolkid">
            <div className='toolkidContainer'>
                <div className='topLeft'>
                    <span className='logo'>Blood Bank</span>
                </div>
                <div className='rightToolkid'>
                    <div className="topbarIcon">
                        <h1>icon</h1>
                    </div>
                </div>
                {/* <Button variant="contained" color="primary">button</Button> */}
            </div>
        </div>
    )
}

export default Toolkid;