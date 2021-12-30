import axios from "axios";
import './DonarForm.css'
import { Link } from 'react-router-dom'
// import Button from '../../Button'
import useDynamicForm from '../../DynamicForm'
// import { useState } from 'react'

const DonarForm = (props) => {
    let {
        value: userName,
        valueIsValid: condition,
        changeHandler: userNameChangeHandler,
        blurHandler: userNameBlurHandler,
        rest: userNameRest,
        errorMsg: userNameIsNotValid,
    } = useDynamicForm(value => value.trim() !== "");

    let {
        value: adhaarNo,
        valueIsValid: adhaarCondition,
        changeHandler: AdhaarChangeHandler,
        blurHandler: adhaarBlurHandler,
        rest: adhaarNoRest,
        errorMsg: adhaarIsNotValid,
    } = useDynamicForm(value => value.trim().length === 12)

    let {
        value: phoneNo,
        valueIsValid: phoneCondition,
        changeHandler: phoneChangeHandler,
        blurHandler: phoneBlurHandler,
        rest: phoneNoRest,
        errorMsg: phoneIsNotValid,
    } = useDynamicForm(value => value.trim().length === 10)

    let {
        value: email,
        valueIsValid: emailCondition,
        changeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        rest: emailRest,
        errorMsg: emailIsNotValid,
    } = useDynamicForm(value => value.includes('@'));

    let {
        value: age,
        valueIsValid: ageCondition,
        changeHandler: ageChangeHandler,
        blurHandler: ageBlurHandler,
        rest: ageRest,
        errorMsg: ageIsNotValid,
    } = useDynamicForm(value => value.trim() !== "");

    let {
        value: gender,
        valueIsValid: genderCondition,
        changeHandler: genderChangeHandler,
        blurHandler: genderBlurHandler,
        rest: genderRest,
        errorMsg: genderIsNotValid,
    } = useDynamicForm(value => value.trim() !== "");

    let {
        value: occupation,
        valueIsValid: occupationCondition,
        changeHandler: occupationChangeHandler,
        blurHandler: occupationBlurHandler,
        rest: occupationRest,
        errorMsg: occupationIsNotValid,
    } = useDynamicForm(value => value.trim() !== "");

    let {
        value: address,
        valueIsValid: addressCondition,
        changeHandler: addressChangeHandler,
        blurHandler: addressBlurHandler,
        rest: addressRest,
        errorMsg: addressIsNotValid,
    } = useDynamicForm(value => value.trim() !== "");

    let {
        value: pin,
        valueIsValid: pinCondition,
        changeHandler: pinChangeHandler,
        blurHandler: pinBlurHandler,
        rest: pinRest,
        errorMsg: pinIsNotValid,
    } = useDynamicForm(value => value.trim().length === 6);

    let {
        value: dateTime,
        valueIsValid: dateTimeCondition,
        changeHandler: dateTimeChangeHandler,
        blurHandler: dateTimeBlurHandler,
        rest: dateTimeRest,
        errorMsg: dateTimeIsNotValid,
    } = useDynamicForm(value => value.trim() !== "");

    let formIsValid = false;
    if (condition && adhaarCondition && phoneCondition && emailCondition && ageCondition && genderCondition && occupationCondition && addressCondition && pinCondition && dateTimeCondition) {
        formIsValid = true;
    }

    let submitForm = async(event) => {
        event.preventDefault();

        if (formIsValid) {
            window.confirm(`Dear ${userName}, Your details are all correct`);
            try {
                let donorData = {firstName:userName, adhaarNumber:adhaarNo, phoneNumber:phoneNo, email, age, gender, occupation, address, pinCode:pin, date: new Date(dateTime)};


                await axios.post("http://localhost:8800/api/donorform", donorData)
                
                console.log(userName, adhaarNo, phoneNo, email, age, gender, occupation, address, pin, dateTime);
                userNameRest();
                adhaarNoRest();
                phoneNoRest();
                emailRest();
                addressRest();
                ageRest();
                genderRest();
                occupationRest();
                pinRest();
                dateTimeRest();
            }
            catch (err) {
                console.log(err);
                window.alert("Please enter your register Email ID And Phone no. ");
            }
        }
        else {
            window.alert(`Please fill all your details`);
        }
    }

    let userNameClass = userNameIsNotValid ? 'formInput invalid' : 'formInput';
    let adhaarClass = adhaarIsNotValid ? 'formInput invalid' : 'formInput';
    let phoneClass = phoneIsNotValid ? 'formInput invalid' : 'formInput';
    let emailClass = emailIsNotValid ? 'formInput invalid' : 'formInput';
    let ageClass = ageIsNotValid ? 'formInput invalid' : 'formInput';
    let genderClass = genderIsNotValid ? 'formInput invalid' : 'formInput';
    let occupationClass = occupationIsNotValid ? 'formInput invalid' : 'formInput';
    let addressClass = addressIsNotValid ? 'formInput invalid' : 'formInput';
    let pinClass = pinIsNotValid ? 'formInput invalid' : 'formInput';
    let dateTimeClass = dateTimeIsNotValid ? 'formInput invalid' : 'formInput';
    return (
        <div className='back'>
            <div className="modelContainer">
                <form className="form" onSubmit={submitForm}>
                    <div className={userNameClass}>
                        <label htmlFor="userName">First Name</label>
                        <input
                            placeholder='First Name'
                            type="text"
                            value={userName}
                            onChange={userNameChangeHandler}
                            onBlur={userNameBlurHandler}
                        />
                        {userNameIsNotValid && <p>Please Enter Your User Name</p>}
                    </div>
                    <div className={adhaarClass}>
                        <label htmlFor="adhaarNumber">Adhaar Number</label>
                        <input
                            placeholder='Adhaar Number'
                            type="text"
                            value={adhaarNo}
                            onChange={AdhaarChangeHandler}
                            onBlur={adhaarBlurHandler}
                        />
                        {adhaarIsNotValid && <p>Please Enter Your 12 Digit Adhaar Number</p>}
                    </div>
                    <div className={phoneClass}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            placeholder='Phone Number'
                            type="text"
                            value={phoneNo}
                            onChange={phoneChangeHandler}
                            onBlur={phoneBlurHandler}
                        />
                        {phoneIsNotValid && <p>Please Enter 10 Digit Your Phone Number</p>}
                    </div>
                    <div className={emailClass}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="donarEmail"
                            id="donarEmail"
                            placeholder="Email"
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                        {emailIsNotValid && <p>Please Enter Your Email Id</p>}
                    </div>

                    <div className="formInput" id="formInput">
                        <div className={ageClass}>
                            <label htmlFor="age">Age</label>
                            <input
                                type="text"
                                minLength="2" maxLength="2"
                                placeholder="Age"
                                value={age}
                                onChange={ageChangeHandler}
                                onBlur={ageBlurHandler}
                            />
                            {ageIsNotValid && <p>Please Enter Your Age</p>}
                        </div>
                        <div className={genderClass}>
                            <label htmlFor="gender" id="donarGender">Gender</label>
                            <select
                                name="gender"
                                id="donarGender"
                                value={gender}
                                onChange={genderChangeHandler}
                                onBlur={genderBlurHandler}
                            >
                                <option value="null">Select Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {genderIsNotValid && <p>Please Enter Your Gender</p>}
                        </div>
                    </div>
                    <div className={occupationClass} >
                        <label htmlFor="occupation">Occupation</label>
                        <input
                            type="text"
                            placeholder="Student, Employee"
                            value={occupation}
                            onChange={occupationChangeHandler}
                            onBlur={occupationBlurHandler}
                        />
                        {occupationIsNotValid && <p>Please Enter Your Occupation</p>}
                    </div>
                    <div className={addressClass}>
                        <label htmlFor="address">Address</label>
                        <textarea
                            name="donarForm"
                            id="donarForm"
                            cols="10" rows="4"
                            placeholder="Address..."
                            value={address}
                            onChange={addressChangeHandler}
                            onBlur={addressBlurHandler}
                        />
                        {addressIsNotValid && <p>Please Enter Address</p>}
                    </div>
                    <div className={pinClass}>
                        <label htmlFor="donarPin">PinCode</label>
                        <input
                            type="text"
                            minLength="6" maxLength="6"
                            placeholder="Pin Code"
                            value={pin}
                            onChange={pinChangeHandler}
                            onBlur={pinBlurHandler}
                        />
                        {pinIsNotValid && <p>Please Enter Area Pin Code Number</p>}
                    </div>
                    <div className={dateTimeClass}>
                        <div className="donarDate">
                            <label htmlFor="date">Date</label>
                            <input
                                type="datetime-local"
                                name="date"
                                id="date"
                                value={dateTime}
                                onChange={dateTimeChangeHandler}
                                onBlur={dateTimeBlurHandler}
                            />
                            {dateTimeIsNotValid && <p>Please Enter Your Appointment Date And Time</p>}
                        </div>
                    </div>

                    <div className="form-action">
                        {/* <Link className='linkButton' to='/Donar'>
                            <button>Cancel</button>
                    </Link> */}

                        {formIsValid && <button disabled={!formIsValid}>Submit</button>}

                        {!formIsValid &&
                            <Link to='/donar'>
                                <button>Back</button>
                            </Link>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DonarForm
