import React from 'react'
import '../CompCSS/GovernProfile.css'
import vise from '../img/Screenshot_20221107-011506_Instagram.jpg'

const GovernProfile = (props) => {
  return (
    <div className='govern_profile'>
      <div className="sub_govern_profile">
        <div className="img_div">
            <img src={vise} alt="" />
        </div>
        <div className="text_div">
            <span>{props.post}</span>
            <h1>{props.name}</h1>
            <p>{props.content1}<br /><br />{props.content2}<br /><br />{props.content3}</p>
        </div>
      </div>
    </div>
  )
}

export default GovernProfile