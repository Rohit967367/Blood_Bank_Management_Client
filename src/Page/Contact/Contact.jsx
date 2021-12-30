import React from 'react'
import NavBar from '../NavBar'
import './Contact.css'
import ContactUs from './ContactUs'


const Contact = () => {
    return (
        <div className='contact'>
            <NavBar />
            <div className="contactSection">
                <ContactUs/>
            </div>
        </div>
    )
}

export default Contact
