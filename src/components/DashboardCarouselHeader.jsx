import React from 'react'
import {IoIosLogOut} from 'react-icons/io'
import '../pages/dashboard-final.css'

const DashboardCarouselHeader = ({ListName, ListArray}) => {

  // const navigate = useNavigate();

  let hrefLink = '';
  if(ListName === 'Next Shopping List') {
    hrefLink = '/nextshop'
  } else if (ListName === 'Recently Purchased') {
    hrefLink = '/recentlypurchased'
  } else if (ListName === 'Favourites') {
    hrefLink = '/favourites'
  }
 
  return (
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
  )
}

export default DashboardCarouselHeader