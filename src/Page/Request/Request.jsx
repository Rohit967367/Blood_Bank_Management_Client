import React from 'react'
// import { useHistory } from 'react-router'
import NavBar from '../NavBar'
import Bill from './Bill'
import './Request.css'
// import TypeList from './TypeList'
// import Pdf from "../Pdf/Pdf"

const Request = () => {
    // let reqFrom = useHistory();

    // let requestForm = () => {
    //     reqFrom.push('/RequestForm');
    // }
    return (
        <div className='request'>
            <NavBar />
            <div className="requestSection">
                <div className="requestHeading">
                    <div  className="reqHead">
                        <h1>Check Blood Stock</h1>
                    </div>
                </div>
                <div className="reqButton">
                    {/* <button
                        onClick={requestForm}>Request Now
                    </button> */}
                </div>
                {/* {reqFrom && <RequestForm 
                onClose={hideRequestForm} 
                />} */}

                {/* <TypeList /> */}
                <Bill/>
                {/* <Pdf/> */}
            </div>
        </div>
    )
}

export default Request
