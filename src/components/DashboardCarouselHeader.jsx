import React from 'react'
import {IoIosLogOut} from 'react-icons/io'

const DashboardCarouselHeader = ({ListName}) => {
  return (
    <div className='dashboard-item-wheel-container'>
        <a className='dashboard-item-wheel-title' href='/LandingPage'>
            <h1>
                {ListName}
            </h1>

            <div className='dashboard-item-wheel-title-img'>
                <IoIosLogOut/>
            </div>
        </a>
    </div>
  )
}

export default DashboardCarouselHeader