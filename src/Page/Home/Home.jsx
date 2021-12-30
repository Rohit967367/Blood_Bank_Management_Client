import React from 'react'
import Intro from './Intro';
import ShortInfo from './ShortInfo';
import NavBar from '../NavBar'
import './Home.css';
import { withRouter } from 'react-router-dom';
import Req from './Req';

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <div className="section">
                <Intro />
                <ShortInfo />
                <Req />
            </div>
        </div>
    )
}

export default withRouter(Home)
