import React, { useEffect, useState } from 'react'
import "../styles/News.css"

const News = ({ date, time }) => {
  let [news, setNews] = useState('');

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=apple&from=2023-10-1&to=2023-10-28&sortBy=popularity&apiKey=f533040446fb47859d520e67227251b0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles[0]);
        setNews(data.articles[0]);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      {news ?
        <section className='news-container'>
          <div className='api-img-div'>
            <img src={news.urlToImage} className='api-img' />
          </div>
          <div className='date-time-div'>
            <p className='question-text'>{news.title}</p>
            <p className='date-and-time'><span>{date}</span><span>|</span><span>{time}</span></p>
          </div>
          <div className='description'>
            {news.description}
          </div>
        </section> : <></>}
    </>
  )
}

export default News
