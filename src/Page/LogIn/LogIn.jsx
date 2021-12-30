import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import './LogIn.css'
import Button from '../../Button'
import useDynamicForm from '../../DynamicForm'
import { Login } from '../../Context/ApiCall'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const LogIn = (props) => {
    let home = useHistory();
    // let goHome = () => {
    //     props.passing(true);
    //     home.push('/Home')
    // }

    const {isFetching, dispatch} = useContext(AuthContext)
    let {
        value: email,
        valueIsValid: ValueIsValidEmail,
        errorMsg: ValueIsNotValidEmail,
        changeHandler: emailChangeHandler,
        blurHandler: emailBlurhandler,
        rest: restEmail,
    } = useDynamicForm(value => value.trim() !== '')

    let {
        value: Password,
        valueIsValid: ValueIsValidPassword,
        errorMsg: ValueIsNotValidpassword,
        changeHandler: passwordChangeHandler,
        blurHandler: passwordBlurhandler,
        rest: restPassword,
    // } = useDynamicForm(value => value.trim().length === 6);
} = useDynamicForm(value => value.trim() !== "");


    let formIsValid = false;
    if (ValueIsValidEmail && ValueIsValidPassword) {
        formIsValid = true;
    }

    let LoginSubmit = (event) => {
        event.preventDefault();

        if (formIsValid) {
            Login({email, password: Password}, dispatch)
            console.log(email, Password);

            home.push('/')
            
            restEmail();
            restPassword();
        }
        else{
            window.alert(`Dear, Please fill your Register Email & Password`)
        }
    }

    let userNameClass = ValueIsNotValidEmail ? 'loginInput chuk' : 'loginInput';
    let passwordClass = ValueIsNotValidpassword ? 'loginInput chuk' : 'loginInput'

    return (

        <div className='LogInFormContainer'>
            <form className="LoginForm" onSubmit={LoginSubmit}>
            <h1>Log In</h1>
                <div className={userNameClass}>
                    <label htmlFor="lUserName">Email</label>
                    <input
                        type="text"
                        placeholder='User Name'
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurhandler}
                    />
                    {ValueIsNotValidEmail && <p>Please Enter Your Register Email</p>}
                </div>
                <div className={passwordClass}>
                    <label htmlFor="lPassword">Password</label>
                    <input type="password"
                        placeholder='Password'
                        value={Password}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurhandler}
                    />
                    {ValueIsNotValidpassword && <p>Please Enter Your 8 Password</p>}
                </div>

                {/* <Link to='./'> */}
                <div className="loginButton">
                    <Button type='submit' disabled={isFetching}>
                        Log In
                    </Button>
                </div>
                <div className="LoginAcc">
                    Do You Have't Already <Link to='/Register'>Account</Link> ?
                </div>
                {/* </Link> */}
            </form >
        </div>
    )
}

export default LogIn
