import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import Navbar from '../components/navbar';
import '../components/navbar.css';
import '../pages/Dashboard.css';
import UserProfileBtn from '../components/UserProfileBtn';

function Dashboard() {

    return (
        <div>
            <Navbar />
            <div className='dashboard-page-background'>
                <UserProfileBtn />
                <DashboardHeader />
            </div>
        </div>

    )

}

export default Dashboard;