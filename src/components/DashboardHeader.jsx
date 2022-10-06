import React from 'react'
import '../pages/Dashboard.css'
import Vegetables from '../components/vegetables.jpg'
import Meat from '../components/meat.jpg'
import Dairy from '../components/dairy.jpg'
import Pantry from '../components/pantry.jpg'
import Alcohol from '../components/alcohol.jpg'

const DashboardHeader = () => {
  return (

    <div>
      <div className='dashboard-header-container'>
        <h1 className='dashboard-header-title'>
            Browse items by category
        </h1>

        <div className='dashboard-category-container'>
          <div className='dashboard-category-image'>
            <img src={Vegetables} alt=''/>

            <span className='dashboard-category-caption'>Fresh produce</span>
          </div>

          <div className='dashboard-category-image'>
            <img src={Dairy} alt=''/>

            <span className='dashboard-category-caption'>Dairy</span>
          </div>

          <div className='dashboard-category-image'>
            <img src={Meat} alt=''/>

            <span className='dashboard-category-caption'>Meat & Poultry</span>
          </div>

          <div className='dashboard-category-image'>
            <img src={Pantry} alt=''/>

            <span className='dashboard-category-caption'>Pantry</span>
          </div>

          <div className='dashboard-category-image'>
            <img src={Alcohol} alt=''/>

            <span className='dashboard-category-caption'>Alcohol</span>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default DashboardHeader;