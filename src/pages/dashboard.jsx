import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import Navbar from '../components/navbar';
import '../components/navbar.css'
import '../pages/Dashboard.css'

function Dashboard() {

    return (
        <div className='dashboard-page-background'>
            <Navbar />
            <DashboardHeader />
        </div>

    )

}

export default Dashboard;