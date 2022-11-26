import React from 'react'
import CHead from '../../CompJSX/CHead'
import './DepartProfile.css'
import eng from '../../img/Screenshot_20221107-011506_Instagram.jpg'

const DepartProfile = () => {
    
    const headData = {
        title: "Works & Infrastructure",
        list1: "Home",
        list2: "Works",
        link1: "/",
        link2: "/Works"
        
    }
  return (
    <div className='depart_profile'>
      <CHead 
        title={headData.title}
        list1={headData.list1}
        list2={headData.list2}
        link1={headData.link1}
        link2={headData.link2}
      />
      <div className="sub_depart_profile">
        <p>
            To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
            To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. <br /><br />
            To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. 
            To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. <br /><br />
            the works department of the orile agege local government.
        </p>
        <img src={eng} alt="Orile Agege Engineer" />
        <span>Orile Agege Engineer</span>
        <h4>Eng. OA Olubaba Lagbaja</h4>
      </div>
    </div>
  )
}

export default DepartProfile
