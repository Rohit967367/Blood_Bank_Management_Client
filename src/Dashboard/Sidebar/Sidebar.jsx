import React from 'react'
import './sidebar.css'
import { LineStyle } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarcontainer">
                <div className="sidebarlist">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarmenu">
                        <li className="hom">
                            <NavLink activeClassName='sidebarStyle' to='/'>
                                <LineStyle className='sidebaricon' />
                                Home
                            </NavLink>
                        </li>

                        <li className="hom">
                            <NavLink activeClassName='sidebarStyle' to='/User'>
                                <LineStyle className='sidebaricon' />
                                Donor Page
                            </NavLink>
                        </li>
                        <li className="hom">
                            <NavLink activeClassName='sidebarStyle' to='/Receive'>
                                <LineStyle className='sidebaricon' />
                                Receiver Page
                            </NavLink>
                        </li>
                        <li className="hom">
                            <NavLink activeClassName='sidebarStyle' to='/Register'>
                                <LineStyle className='sidebaricon' />
                                Register
                            </NavLink>
                        </li>
                        <li className="hom">
                            <NavLink activeClassName='sidebarStyle' to='/AppointmentList'>
                                <LineStyle className='sidebaricon' />
                                Appointment
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
