import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import Navbar from '../components/navbar';
import '../components/navbar.css';
import '../pages/Dashboard.css';
import UserProfileBtn from '../components/UserProfileBtn';
import DashboardCarousel from '../components/DashboardCarousel';
import { useState } from 'react'
import { items, recentlyPurchasedItems } from '../components/RecentlyPurchasedData';
import { favItems } from './FavouritesData';
import { nextShopItems } from './NextShopListData';
import DashboardCarouselHeader from '../components/DashboardCarouselHeader';
import DashboardCarouselHeaderEmpty from '../components/DashboardCarouselHeaderEmpty';

function Dashboard() {

    // const [nextShopItems, setNextShopItems] = useState([
    //     {
    //         id: 1,
    //         url: './unavailable.png',
    //         itemName: 'Apple Royal Gala',
    //         priority: true,
    //     },
    //     {
    //         id: 2,
    //         url: './unavailable.png',
    //         itemName: 'Banana Cavendish',
    //         priority: true,
    //     },
    //     {
    //         id: 3,
    //         url: './unavailable.png',
    //         itemName: 'Apple Royal Gala',
    //         priority: true,
    //     },
    // ])

    // const [favourites, setFavourites] = useState ([
    //     {
    //         id: 1,
    //         url: './unavailable.png',
    //         itemName: 'Johnnie Walkers Black label 700mL',
    //         priority: true,
    //     }
    // ])

    // const [recentlyPurchasedItems, setRecentlyPurchasedItems] = useState ([
    //     {
    //         id: 1,
    //         url: './unavailable.png',
    //         itemName: 'Banana Cavendish',
    //         priority: false,
    //     }
    // ])

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