import React, { useEffect } from 'react'
import Info from '../components/Info.jsx';
import TimeAndWeather from '../components/TimeAndWeather.jsx';
import News from '../components/News.jsx';
import Timer from '../components/Timer.jsx';
import Notes from '../components/Notes.jsx';


const Home = () => {
  // let string = "";
  // useEffect(()=> {
  //   time
  //   string = time;
  // })
  return (
    
    <div style={{backgroundColor:"black",height:"100vh",padding: "10px 0 0 5rem"}}>
      <Info/>
      <TimeAndWeather/>
      <Timer/>
      <Notes/>
      <News/>
    </div>
  )
}

export default Home
