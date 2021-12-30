import React from 'react'
import './Register.css'
import { Link, useHistory } from 'react-router-dom'
import useDynamicForm from '../../DynamicForm'
import axios from "axios"



const Register = () => {
    let log = useHistory();
    let {
        value: firstName,
        valueIsValid: ValueIsValidFirstName,
        errorMsg: ValueIsNotValidFirstName,
        changeHandler: firstNameChangeHandler,
        blurHandler: firstNameBLurHandler,
        rest: restFirstName,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: lastName,
        valueIsValid: ValueIsValidLastName,
        errorMsg: ValueIsNotValidLastName,
        changeHandler: lastNameChangeHandler,
        blurHandler: lastNameBLurHandler,
        rest: restLastName,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: phone,
        valueIsValid: ValueIsValidPhone,
        errorMsg: ValueIsNotValidPhone,
        changeHandler: phoneChangeHandler,
        blurHandler: phoneBLurHandler,
        rest: restPhone,
    } = useDynamicForm(value => value.trim().length === 10);

    let {
        value: email,
        valueIsValid: ValueIsValidEmail,
        errorMsg: ValueIsNotValidEmail,
        changeHandler: emailChangeHandler,
        blurHandler: emailBLurHandler,
        rest: restEmail,
    } = useDynamicForm(value => value.includes('@'));

    let {
        value: password,
        valueIsValid: ValueIsValidPassword,
        errorMsg: ValueIsNotValidPassword,
        changeHandler: passwordChangeHandler,
        blurHandler: passwordBLurHandler,
        rest: restPassword,
    } = useDynamicForm(value => value.trim().length > 8);

    let {
        value: confirmPassword,
        valueIsValid: ValueIsValidConfirmPassword,
        errorMsg: ValueIsNotValidConfirmPassword,
        changeHandler: confirmPasswordChangeHandler,
        blurHandler: confirmPasswordBLurHandler,
        rest: restConfirmPassword,
    } = useDynamicForm(value => value.trim().length > 8);

    let passwordIsValid = ValueIsValidPassword && ValueIsValidConfirmPassword;
    let FormIsValid = false;
    if (ValueIsValidFirstName && ValueIsValidLastName && ValueIsValidEmail && ValueIsValidPhone && passwordIsValid) {
        FormIsValid = true;
    }

    let SignUpSubmit = async (event) => {
        event.preventDefault();

        if (FormIsValid) {
            try {
                await axios.post("http://localhost:8800/api/auth/register", { firstName, lastName, email, phoneNumber: phone, password, confirmPassword: confirmPassword })
                window.alert(`Welcome ${firstName}`);

                log.push('/LogIn');
                console.log(firstName, lastName, email, phone, password, confirmPassword);

                restFirstName();
                restLastName();
                restEmail();
                restPhone();
                restPassword();
                restConfirmPassword();
            }
            catch (err) {
                console.log(err);
                window.alert("Sorry Your Email ID And Phone no. is already register");
            }
        }
        else {
            window.alert(`Please fill all your details`);
        }

    }


    let firstClass = ValueIsNotValidFirstName ? 'registerInput invalidValue' : 'registerInput';
    let lastClass = ValueIsNotValidLastName ? 'registerInput invalidValue' : 'registerInput';
    let emailClass = ValueIsNotValidEmail ? 'registerInput invalidValue' : 'registerInput';
    let setPasswordClass = ValueIsNotValidPassword ? 'registerInput invalidValue' : 'registerInput';
    let confirmPasswordClass = ValueIsNotValidConfirmPassword ? 'registerInput invalidValue' : 'registerInput';
    let phoneNumberClass = ValueIsNotValidPhone ? 'registerInput invalidValue' : 'registerInput';




    return (
        <div className='registerFormContainer'>
            <form className="registerForm" onSubmit={SignUpSubmit}>
                <div className={firstClass}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        placeholder='Your Name'
                        value={firstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBLurHandler}
                    />
                    {ValueIsNotValidFirstName && <p>Please Enter Your First Name</p>}
                </div>
                <div className={lastClass}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        placeholder='Your Surname'
                        value={lastName}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBLurHandler}
                    />
                    {ValueIsNotValidLastName && <p>Please Enter Your Last Name</p>}
                </div>
                <div className={phoneNumberClass}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        placeholder='Your Phone Number'
                        value={phone}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBLurHandler}
                    />
                    {ValueIsNotValidPhone && <p>Please Enter 10 digit Number</p>}
                </div>
                <div className={emailClass}>
                    <label htmlFor="email">Email Id</label>
                    <input
                        type="email"
                        placeholder='Your Email Id'
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBLurHandler}
                    />
                    {ValueIsNotValidEmail && <p>Please Enter Your Email ID</p>}
                </div>
                <div className={setPasswordClass}>
                    <label htmlFor="password">Set Password</label>
                    <input
                        type="password"
                        placeholder='Set Your Password'
                        value={password}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBLurHandler}
                    />
                    {ValueIsNotValidPassword && <p>Please Set Min 8 length Password</p>}
                </div>
                <div className={confirmPasswordClass}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        placeholder='Confirm Your Password'
                        value={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                        onBlur={confirmPasswordBLurHandler}
                    />
                    {ValueIsNotValidConfirmPassword && <p>Please Enter Your Same 8 digit Password</p>}
                </div>
                <div className="registerInput">
                    <button type='submit'>Submit</button>
                </div>
                <div className="registerInput acc">
                    Do You Have Already <Link to='/LogIn'>Account</Link> ?
                </div>
            </form>
        </div>
    )
}

export default Register
