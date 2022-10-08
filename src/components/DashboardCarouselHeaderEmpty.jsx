import React from 'react'
import {IoIosLogOut} from 'react-icons/io'

const DashboardCarouselHeaderEmpty = ({ListName}) => {
  return (
    <div>
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

        <h3 className='dashboard-no-item-header'>No Items to show</h3>
    </div>
  )
}

export default DashboardCarouselHeaderEmpty