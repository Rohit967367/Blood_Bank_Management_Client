import React from 'react'
import './ContactUs.css'
import Contact from '../../Picture/ContactUs.jpg'
import useDynamicForm from '../../DynamicForm';
import axios from 'axios';
// import axios from 'axios'

const ContactUs = () => {

    let {
        value: phoneNumber,
        valueIsValid: validPhoneNumber,
        errorMsg: notValidPhoneNumber,
        changeHandler: phoneNumberChangehandler,
        blurHandler: phoneNumberBlurHandler,
        rest: restPhoneNumber,
    } = useDynamicForm(value => value.trim().length === 10)

    let {
        value: fullName,
        valueIsValid: validFullName,
        errorMsg: notValidFullName,
        changeHandler: fullNameChangehandler,
        blurHandler: fullBlurHandler,
        rest: restFullName,
    } = useDynamicForm(value => value.trim() !== '')

    let {
        value: email,
        valueIsValid: validEmail,
        errorMsg: notValidEmail,
        changeHandler: emailChangehandler,
        blurHandler: emailBlurHandler,
        rest: restEmail,
    } = useDynamicForm(value => value.includes('@'))

    let {
        value: subject,
        valueIsValid: validSubject,
        errorMsg: notValidSubject,
        changeHandler: subjectChangehandler,
        blurHandler: sujectBlurHandler,
        rest: restSubject,
    } = useDynamicForm(value => value.trim() !== '')

    let formIsValid = false;
    if (validPhoneNumber && validFullName && validSubject && validEmail) {
        formIsValid = true;
    }


    let contactSubmit = async (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return
        }
        const update = {
            fullName,
            phoneNumber,
            email,
            subject
        };

        try {
            await axios.post('http://localhost:8800/api/contact', update)
            window.alert(`Submited`);
        }
        catch (e) {
            window.alert(`Dear ${fullName} your Email ID is not valid`)
        };

        console.log(fullName, phoneNumber, email, subject);

        restFullName();
        restPhoneNumber();
        restSubject();
        restEmail();

    }

    let ClassContactName = notValidFullName ? 'contactForm galat' : 'contactForm';
    let ClassContactUser = notValidPhoneNumber ? 'contactForm galat' : 'contactForm';
    let ClassContactEmail = notValidEmail ? 'contactForm galat' : 'contactForm';
    let ClassContactSubject = notValidSubject ? 'contactForm galat' : 'contactForm';

    return (
        <div className='contactUs'>
            <div className="heading">
                <h1>Contact Us</h1>
                <h3>How Can We Help You?</h3>
            </div>
            <div className="contactUsRow">
                <div className="contactUsColumn">
                    <img src={Contact} alt="contactUs" />
                </div>
                <div className="contactUsColumn">
                    <form className='contactUsForm' onSubmit={contactSubmit}>
                        <div className={ClassContactName}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder='Your Full Name'
                                value={fullName}
                                onChange={fullNameChangehandler}
                                onBlur={fullBlurHandler}
                            />
                            {notValidFullName && <p>Please Enter Your Full name</p>}
                        </div>
                        <div className={ClassContactUser}>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                placeholder='Phone Number'
                                value={phoneNumber}
                                onChange={phoneNumberChangehandler}
                                onBlur={phoneNumberBlurHandler}
                            />
                            {notValidPhoneNumber && <p>Please Enter Your 10 digit Phone Number</p>}
                        </div>
                        <div className={ClassContactEmail}>
                            <label htmlFor="email">Email Id</label>
                            <input
                                type="email"
                                placeholder='Email Id'
                                value={email}
                                onChange={emailChangehandler}
                                onBlur={emailBlurHandler}
                            />
                            {notValidEmail && <p>Please Enter Your Email ID</p>}
                        </div>
                        <div className={ClassContactSubject}>
                            <label htmlFor="subject">Subject</label>
                            <textarea placeholder='Write Something...'
                                value={subject}
                                onChange={subjectChangehandler}
                                onBlur={sujectBlurHandler}
                            />
                            {notValidSubject && <p>Please Write Something</p>}
                        </div>
                        <button type="submit" disabled={!formIsValid} >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
