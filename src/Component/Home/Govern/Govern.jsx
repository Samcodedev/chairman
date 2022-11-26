import React from 'react'
import './Govern.css'
import GovernCard from '../../CompJSX/GovernCard'

// icons importation
import { IoMdBusiness } from 'react-icons/io'
import { GoLaw } from 'react-icons/go'
import { GiModernCity } from 'react-icons/gi'
import { RiTeamLine } from 'react-icons/ri'

const Govern = () => {
  const data =[
    {
      content: "Budget & Government, Policy",
      icon: <GoLaw fontSize={60} />
    },
    {
      content: "Business & Administration",
      icon: <IoMdBusiness fontSize={60} />
    },
    {
      content: "Environment & Service",
      icon: <GiModernCity fontSize={60} />
    },
    {
      content: "Administration and Council",
      icon: <RiTeamLine fontSize={60} />
    },
  ]

  const card = data.map((item) =>{
    return(
      <GovernCard 
        content={item.content}
        icon={item.icon}
      />
    )
  })
  return (
    <div className='govern'>
      <div className="sub-text">
        <span>GOVERNMENT & STRATEGY</span>
        <h2>Orile Agege Local Government</h2>
      </div>
      <div className="sub-govern">
        {card}
      </div>
    </div>
  )
}

export default Govern
