import React from 'react'
import '../CompCSS/CHead.css'
import { Link } from 'react-router-dom'

const CHead = (props) => {
  return (
    <div className='chead'>
      <h1>{props.title}</h1>
      <ul>
        <Link to={props.link1}><li>{props.list1}</li></Link>
        <Link to={props.link2}><li>{props.list2}</li></Link>
      </ul>
    </div>
  )
}

export default CHead
