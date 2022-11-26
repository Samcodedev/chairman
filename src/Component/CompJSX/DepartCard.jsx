import React from 'react'
import '../CompCSS/DepartCard.css'
import { HiArrowSmRight } from 'react-icons/hi'

const DepartCard = (props) => {
  return (
    <div className='depart_card'>
      <h4>{props.title}</h4>
      <div className="details">
        <button>MORE <HiArrowSmRight fontSize={25} /></button>
      </div>
    </div>
  )
}       

export default DepartCard
