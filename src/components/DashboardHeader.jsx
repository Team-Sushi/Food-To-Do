import React from 'react'
import '../pages/dashboard-final.css'
import Vegetables from '../components/vegetables.jpg'
import Meat from '../components/meat.jpg'
import Dairy from '../components/dairy.jpg'
import Pantry from '../components/pantry.jpg'
import Alcohol from '../components/alcohol.jpg'
import AllItems from '../components/all-items.jpg'
import Plus from '../components/plus.png'

const DashboardHeader = () => {
  return (

    <div>
      <div className='dashboard-header-container'>
        <h1 className='dashboard-header-title'>
            Browse items by category
        </h1>

        <div className='dashboard-category-container'>

          <div className='dashboard-category-image'>
            <a href='./category'>
              <img src={Vegetables} alt=''/>

              <span className='dashboard-category-caption'>Fresh produce</span>
            </a>
          </div>

          <div className='dashboard-category-image'>
            <a href='./dairy'>
              <img src={Dairy} alt=''/>

              <span className='dashboard-category-caption'>Dairy</span>
            </a>
          </div>

          <div className='dashboard-category-image'>
            <a href='./meat&poultry'>
              <img src={Meat} alt=''/>

              <span className='dashboard-category-caption'>Meat & Poultry</span>
            </a>
          </div>

          <div className='dashboard-category-image'>
            <a href='./pantry'>
              <img src={Pantry} alt=''/>

              <span className='dashboard-category-caption'>Pantry</span>
            </a>
          </div>

          <div className='dashboard-category-image'>
            <a href='./allitems'>
              <img src={AllItems} alt=''/>

              <span className='dashboard-category-caption'>All Items</span>
            </a>
          </div>

          <div className='dashboard-category-image-custom'>
            <a href='./additem'>
              <img src={Plus} alt=''/>

              <span className='dashboard-category-caption'>Add Item</span>
            </a>
          </div>
  
        </div>
      </div>
    </div>
  
  )
}

export default DashboardHeader;