import React from 'react'
import './MainItemPage.css'
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

<<<<<<< Updated upstream
function Dashboard() {
=======
function ItemPage() {
>>>>>>> Stashed changes

    return (
        <div>
            <Navbar />
<<<<<<< Updated upstream
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
=======
            <div className='main-item-page-background'>

                <div className='leftSide'>
                    <div className='itemBox'>
                        <img src=''></img></image>
                        <div className='justBought'>

                        </div>
                        <div className='favorites'>

                        </div>

                    </div>
                </div>

                <div className='rightSide'>

                </div>

               
>>>>>>> Stashed changes
            </div>
        </div>

    )

}

<<<<<<< Updated upstream
export default MainItemPage;
=======
export default ItemPage;
>>>>>>> Stashed changes
