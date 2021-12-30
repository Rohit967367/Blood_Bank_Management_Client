import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

import { logout } from '../Context/AuthAction'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
// import logo2 from '../Picture/logo2.jpg'
import logo from '../Picture/logo.png'
// import { logout } from '../Context/AuthAction'
// import DropDown from './DropDown'

const NavBar = () => {
    const { dispatch } = useContext(AuthContext)


    // const [dropDown, setDropDown] = useState(false)

    // const mouseEnter =()=> {
    //     if(window.innerWidth < 960){
    //         setDropDown(false)
    //     } else{
    //         setDropDown(true)
    //     }
    // }

    // const mouseLeave =()=> {
    //     if(window.innerWidth < 960){
    //         setDropDown(false)
    //     } else{
    //         setDropDown(false)
    //     }
    // }

    return (
        // <div className={'head ' + (open && 'active')}>

        <div className='head'>
            <div className="wrapper">
                <div className="leftbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        {/* <img src={logo2} alt="logo2" /> */}
                    </div>
                </div>
                <div className="right">
                    <ul className="menu">
                        <li className="menuList">
                            <NavLink activeClassName='menuL' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="menuList">
                            <NavLink activeClassName='menuL' to='/Donar'>
                                Donor
                            </NavLink>
                        </li>
                        <li className="menuList">
                            <NavLink activeClassName='menuL' to='/Request'>
                                Request
                            </NavLink>
                        </li>
                        <li className="menuList">
                            <NavLink to='/Contact' activeClassName='menuL'>
                                Contact
                            </NavLink>
                        </li>
                        {/* <li className='nav-item' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            Setting
                        { dropDown && <DropDown />}
                        </li> */}
                        <li className="menuList">
                            {/* <li className='dropdown-link'> */}
                            <button onClick={() => dispatch(logout())} className="menuL">
                                Log Out
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default NavBar