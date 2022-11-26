import React from 'react'
import '../CompCSS/NewsCard.css'
import post from '../img/Screenshot_20221107-011506_Instagram.jpg'

import { BsHeart, BsPerson } from 'react-icons/bs'

const NewsCard = (props) => {
  return (
    <div className='news_card'>
      <div className="img_div">
        <img src={post} alt="post_image" />
      </div>
      <div className="text_div">
        <div className="tag">
            <span>{props.tag}</span>
        </div>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <div className="details">
            <p><BsPerson fontSize={20} /> Dotun</p>
            <p><BsHeart fontSize={15} /> {props.likes} Likes</p>
            <p>23 May 22</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
