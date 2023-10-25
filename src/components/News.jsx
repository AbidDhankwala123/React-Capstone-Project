import React from 'react'
import "../styles/News.css"
import img from "../assets/image 15.png"

const News = () => {
  return (
    <section className='news-container'>
      <div className='api-img-div'>
        <img src={img} className='api-img'/>
      </div>
      <div className='date-time-div'>
        <p className='question-text'>Want to climb Mount Everest?</p>
        <p className='date-and-time'><span>2-20-2023</span><span>|</span><span>07:35 PM</span></p>
      </div>
      <div className='description'>
        In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......
      </div>
    </section>
  )
}

export default News
