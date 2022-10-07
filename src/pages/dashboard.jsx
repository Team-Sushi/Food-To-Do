import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import Navbar from '../components/navbar';
import '../components/navbar.css';
import '../pages/Dashboard.css';
import UserProfileBtn from '../components/UserProfileBtn';
import DashboardCarousel from '../components/DashboardCarousel';
import { useState } from 'react'
import { recentlyPurchasedItems } from '../components/RecentlyPurchasedData';
import { favItems } from '../components/FavouritesData';
import { nextShopItems } from '../components/NextShopListData';
import DashboardCarouselHeader from '../components/DashboardCarouselHeader';
import DashboardCarouselHeaderEmpty from '../components/DashboardCarouselHeaderEmpty';

function Dashboard() {

    return (
        <div>
            <Navbar />
            <div className='dashboard-page-background'>
                <UserProfileBtn />
                <DashboardHeader />

                {nextShopItems.length > 0 ? (
                    <div>
                        <DashboardCarouselHeader ListName={'Next Shopping List'}/>
                        <DashboardCarousel UserItems={nextShopItems} ListName={'Next Shopping List'}/>
                    </div>
                ) : <DashboardCarouselHeaderEmpty ListName={'Next Shopping List'}/>}
                
                {recentlyPurchasedItems.length > 0 ? (
                    <div>
                        <DashboardCarouselHeader ListName={'Recently Purchased'}/>
                        <DashboardCarousel UserItems={recentlyPurchasedItems} ListName={'Recently Purchased'}/>
                    </div>
                ) : <DashboardCarouselHeaderEmpty ListName={'Recently Purchased'}/>}
                
                {favItems.length > 0 ? (
                    <div>
                        <DashboardCarouselHeader ListName={'Favourites'}/>
                        <DashboardCarousel UserItems={favItems} ListName={'Favourites'}/>
                    </div>
                ) : <DashboardCarouselHeaderEmpty ListName={'Favourites'}/>}
            </div>
        </div>

    )

}

export default Dashboard;