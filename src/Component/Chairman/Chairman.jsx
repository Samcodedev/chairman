import React from 'react'
import CHead from '../CompJSX/CHead'
import CAbout from './CAbout/CAbout'

const Chairman = () => {

  const headData = {
    title: "Orile Agege Chairman",
    list1: "Home",
    list2: "Chairman",
    link1: "/",
    link2: "/chairman"
    
  }
  return (
    <div>
      <CHead 
        title={headData.title}
        list1={headData.list1}
        list2={headData.list2}
        link1={headData.link1}
        link2={headData.link2}

      />
      <CAbout />
    </div>
  )
}

export default Chairman
