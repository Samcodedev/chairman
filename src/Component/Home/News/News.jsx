import React from 'react'
import NewsCard from '../../CompJSX/NewsCard'
import './News.css'

const News = () => {

    const data = [
        {
            tag: "Politics",
            title: "Local Government Directorate Holds Inaugural meeting",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 23
        },
        {
            tag: "General Meetings",
            title: "Local government hold community cancelling for the youth",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 5
        },
        {
            tag: "General Events",
            title: "Johnson Babatunde at Oba of Orile Agege birthday",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 11
        },
        {
            tag: "Community Development",
            title: "Johnson Babatunde build a public amenities at olowo-okere community",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 1
        },
        {
            tag: "Education",
            title: "Johnson Babatunde giving Award to the bests students in Orile Agege schools",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 67
        },
        {
            tag: "Health",
            title: "Johnson Babatunde gives free medications to people at the health center",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 3
        },
        {
            tag: "Security",
            title: "Johnson Babatunde have a meeting with the head of security in Orile Agege",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 67
        },
        {
            tag: "Education",
            title: "Johnson Babatunde visiting schools in Orile Agege",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 9
        },
        {
            tag: "Public Meetings",
            title: "Local government giving food items to widows in the community",
            content: "The first inaugural meeting of the local government directorate took place today, 17th Nov, 2022, in Council,...",
            likes: 13
        },
    ]

    const card = data.map((item)=>{
        return(
            <NewsCard 
                tag={item.tag}
                title={item.title}
                content={item.content}
                likes={item.likes}
            />
        )
    })

  return (
    <div className='news'>
      <div className="sub-text">
        <span>NEWS & BLOG</span>
        <h2>Latest News And Blogs</h2>
      </div>
      <div className="sub-news">
        {card}
      </div>
    </div>
  )
}

export default News
