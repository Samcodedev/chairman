import React from 'react'
import '../CompCSS/GovernCard.css'

const GovernCard = (props) => {
  return (
    <div className='govern_card'>
      {props.icon}
      <h4>{props.content}</h4>
    </div>
  )
}

export default GovernCard
