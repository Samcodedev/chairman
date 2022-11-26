import React from 'react'
import './CAbout.css'
import chairman from '../../img/Screenshot_20221107-011506_Instagram.jpg'

import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const CAbout = () => {
  return (
    <div className='c_about'>
      <div className="sub_c_about">
        <div className="img_div">
            <img src={chairman} alt="" />
        </div>
        <div className="text_div">
            <span>Executive Chairman</span>
            <h1>Johnson J.S Babatunde</h1>
            <p>
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. <br /><br />
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. <br /><br />
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. <br /><br />
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
                To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State.
            </p>
            <div className="social">
                <div className="icon">
                    <BsFacebook fontSize={20} />
                </div>
                
                <div className="icon">
                    <BsInstagram fontSize={20} />
                </div>
                
                <div className="icon">
                    <BsTwitter fontSize={20} />
                </div>
            </div>
        </div>
      </div>
      <div className="appoint">
        <button>BOOK AN APPOINTMENT</button>
      </div>
    </div>
  )
}

export default CAbout
