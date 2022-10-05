import React from 'react'
import {FiLogOut} from 'react-icons/fi';
import DefaultUserImage from  '../components/defaultUserImage.png';

const UserProfileBtn = ({ username, userPhotoLink }) => {
  return (
    <div className='dashboard-user-profile-container'>
        <div className='dashboard-user-profile'>
            <div className='dashboard-user-profile-img'>
                <img src={userPhotoLink} alt=''/>
            </div>

            <div className="dashboard-user-profile-name-container">
                <span className='dashboard-user-profile-name'>Welcome back, {username}!</span>

                <div className='dashboard-user-profile-logout-container'>
                    <FiLogOut />
                    <a className='dashboard-user-profile-logout-text' href='/LandingPage'>
                        Log out
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

UserProfileBtn.defaultProps = {
    username: "[user's name]",
    userPhotoLink: DefaultUserImage,
}

export default UserProfileBtn