import React from 'react'
import { logout } from '../Context/AuthAction'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import './DropDown.css'


const DropDown = () => {

    const { dispatch } = useContext(AuthContext)
    return (
        <div>
            <ul>
                <li className='dropdown-link'>
                    Rest Password
                </li>
                <li className='dropdown-link'>
                    Delete Account
                </li>
                <li className='dropdown-link'>
                    <button onClick={() => dispatch(logout())} className="menuL">
                        Log Out
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default DropDown
