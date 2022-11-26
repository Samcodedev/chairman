import React from 'react'
// imported components
import Depart from './Depart/Depart'
import Govern from './Govern/Govern'
import Head from './Head/Head'
import News from './News/News'
import Team from './Team/Team'
import Welcome from './Welcome/Welcome'

const Home = () => {
  return (
    <div className='margin'>
      <Head />
      <Welcome />
      <Govern />
      <Team />
      <Depart />
      <News />
    </div>
  )
}

export default Home
