import React from 'react'
import GovernProfile from '../CompJSX/GovernProfile'

const Legislature = () => {

    const data = {
        post: "Legislative Leader",
        name: "Hon AR Ayobami Rotimi",
        content1: "To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. ",
        content2: "To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. ",
        content3: "To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. To evolve a community that will serve as a model for Socio-economic, Infrastructural and Communal Development in Lagos State. "
    }

  return (
    <div>
      <GovernProfile 
        post={data.post}
        name={data.name}
        content1={data.content1}
        content2={data.content2}
        content3={data.content3}
      />
    </div>
  )
}

export default Legislature
