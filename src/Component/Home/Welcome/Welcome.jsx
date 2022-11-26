import React from 'react'
import './Welcome.css'
import chair from '../../img/Screenshot_20221107-011506_Instagram.jpg'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="sub-welcome">
        <div className="text-div">
            <span>WELCOME TO ORILE AGEGE LCDA</span>
            <h2>The Executive Chairman</h2>
            <p>In the Center of Excellence</p>

            <h4>JOHNSON JS BABATUNDE</h4>

            <h5>Our Vision:</h5>
            <p>To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State.</p>
            
            <h5>Our Mission:</h5>
            <p>To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State.</p>
            
            <h5>Our Philosophy:</h5>
            <p>To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State.</p>
            
            <h5>Always my home... Always our home</h5>

        </div>
        <div className="img-div">
            <div className="card">
                <img src={chair} alt="" />
                <div className="label">
                    "All we do is for, your business and organization."
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
