import React from 'react'
import '../CompCSS/ProfileCard.css'
import profile from '../img/Screenshot_20221107-011506_Instagram.jpg'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

const ProfileCard = (props) => {
  return (
    <div className='profile_card'>
      <img src={profile} alt="" />
      <div className="details">
        <h4>{props.name}</h4>
        <span>{props.post}</span>
        <div className="contact">
            <div className="icon">
                <FiMail />
            </div>
            <div className="icon">
                <FiPhoneCall />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
