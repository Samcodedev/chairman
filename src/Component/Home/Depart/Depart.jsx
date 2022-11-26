import React from 'react'
import DepartCard from '../../CompJSX/DepartCard'
import './Depart.css'

const Depart = () => {

    const data = [
        {
            title: "Environmental Services"
        },
        {
            title: "Budget and Planning"
        },
        {
            title: "Mayor and City Council"
        },
        {
            title: "Women and Poverty Alleviation"
        }
    ]

    const card = data.map((item)=>{
        return(
            <DepartCard 
                title={item.title}
            />
        )
    })
  return (
    <div className='depart'>
      <div className="sub-text">
        <span>DEPARTMENTS & DIVISIONS</span>
        <h2>Departments</h2>
      </div>
      <div className="sub-depart">
        {card}
      </div>
    </div>
  )
}

export default Depart
