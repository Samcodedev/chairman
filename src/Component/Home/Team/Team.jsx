import React from 'react'
import ProfileCard from '../../CompJSX/ProfileCard'
import './Team.css'

const Team = () => {

    const data =[
        {
            name: "Johnson Babatunde",
            post: "Chairman"
        },
        {
            name: "Johnson Babatunde",
            post: "Vice Chairman"
        },
        {
            name: "Johnson Babatunde",
            post: "Council Manager"
        },
        {
            name: "Johnson Babatunde",
            post: "HR-Manager"
        }
    ]

    const card = data.map((item)=>{
        return(
            <ProfileCard 
                name={item.name}
                post={item.post}
            />
        )
    })
  return (
    <div className='team'>
      <div className="sub-text">
        <span>ORILE AGEGE LSCD TEAM</span>
        <h2>The Team Members</h2>
      </div>
      <div className="sub-team">
        {card}
      </div>
    </div>
  )
}

export default Team
