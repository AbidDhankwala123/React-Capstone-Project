import React, { useEffect, useState } from 'react'
import Info from '../components/Info.jsx';
import Weather from '../components/Weather.jsx';
import News from '../components/News.jsx';
import Timer from '../components/Timer.jsx';
import Notes from '../components/Notes.jsx';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate = useNavigate();

  let [date, setDate] = useState('');
  let [time, setTime] = useState('');

  useEffect(() => {
    let currentDate = new Date();
    
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;//we can display month number from 1 to 12 by adding 1
    let date = currentDate.getDate();

    setDate(`${month}-${date}-${year}`);
  }, [])

  useEffect(() => {
    let currentTime = new Date();
    currentTime = currentTime.toLocaleString("default", {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(currentTime);
    setTime(currentTime);
  }, [])
  
  return (

    <div style={{ backgroundColor: "black", height: "100vh", padding: "10px 0 0 50px" }}>
      <Info />
      <Weather date={date} time={time} />
      <Timer />
      <Notes />
      <News date={date} time={time} />
      <div className='browse-page-div' style={{ position: "absolute", right: "0.3rem", bottom: "0.7rem" }}>
        <button className='browse-page' onClick={() => navigate('/movies')} style={{ cursor: "pointer", border: "none", padding: "0.5rem 0.8rem", borderRadius: "2.4rem", background: "#148A08", color: "#FFF", fontSize: "1rem", fontWeight: 500, letterSpacing: "0.5px" }}>Browse</button>
      </div>
    </div>
  )
}

export default Home
