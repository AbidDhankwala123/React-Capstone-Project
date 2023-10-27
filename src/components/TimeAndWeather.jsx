import React, { useEffect, useState } from 'react'
import "../styles/TimeAndWeather.css"
import pressure from "../assets/pressure.png"
import wind from "../assets/wind.png"
import humidity from "../assets/humidity.png"



const TimeAndWeather = ({ date, time }) => {
  let [weather, setWeather] = useState('');

  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/current.json?key=106bd82ea3114b529ce115440232710&q=mumbai&aqi=no")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <section className='time-and-weather-container'>
      <div className='display-time'>
        <p className='time'>{date}</p>
        <p className='time'>{time} </p>
      </div>

      {weather ?
        <div className='display-weather'>
          <div>
            <img src={weather.current.condition.icon} alt="weather-icon" className='weather-icon' />
            <p className='weather'>{weather.current.condition.text}</p>
          </div>

          <div className='white-line'></div>

          <div>
            <p className='degree-celsius'>{weather.current.temp_c}°C</p>
            <img src={pressure} alt="pressure-icon" className='pressure-icon' />
            <span className='pressure'>{weather.current.pressure_mb} mbar Pressure</span>
          </div>

          <div className='white-line'></div>

          <div className='wind-humidity'>
            <div>
              <img src={wind} alt="wind-icon" className='wind-icon' />
              <span className='wind'>{weather.current.wind_kph} km/h Wind</span>
            </div>
            <div>
              <img src={humidity} alt="humidity-icon" className='humidity-icon' />
              <span className='humidity'>{weather.current.humidity} % Humidity</span>
            </div>
          </div>

        </div>
        : <></>}
    </section>
  )
}

export default TimeAndWeather
