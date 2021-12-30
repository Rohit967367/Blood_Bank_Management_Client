import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Toolkid from './Toolkid/Toolkid'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DonorList from '../Page/DonorPage/DonorList'
import Receive from '../Page/ReceiveList/Receive'
import DashboardHomePage from '../Page/DashboardHomePage'
import Register from '../Page/Register/Register'
import AppointmeneList from '../Page/AppointmentList/AppointmeneList'


const Dashboard = () => {
    return (
        <Router>
            <Toolkid />
            <div className="containerSidebar">
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <DashboardHomePage />
                    </Route>
                    <Route path='/User'>
                        <DonorList />
                    </Route>
                    <Route path='/Receive'>
                        <Receive />
                    </Route>
                    <Route path='/Register'>
                        <Register />
                    </Route>
                    <Route path='/AppointmentList'>
                        <AppointmeneList />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Dashboard
