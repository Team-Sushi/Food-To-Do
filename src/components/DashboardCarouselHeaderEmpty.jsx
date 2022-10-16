import React from 'react'
import {IoIosLogOut} from 'react-icons/io'
import '../pages/dashboard-final.css'

const DashboardCarouselHeaderEmpty = ({ListName}) => {

    let hrefLink = '';
  if(ListName === 'Next Shopping List') {
    hrefLink = '/nextshop'
  } else if (ListName === 'Recently Purchased') {
    hrefLink = '/recentlypurchased'
  } else if (ListName === 'Favourites') {
    hrefLink = '/favourites'
  }

  return (
    <div>
        <div className='dashboard-item-wheel-container'>
            <a className='dashboard-item-wheel-title' href={hrefLink}>
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