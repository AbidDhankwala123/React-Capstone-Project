import React, { useRef, useState } from 'react'
import "../styles/Timer.css"
import upimg from "../assets/uparrow.png"
import downimg from "../assets/downarrow.png"
import alarmtone from "../assets/alarmtone.mp3"
import {CountdownCircleTimer} from "react-countdown-circle-timer"

const Timer = () => {
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [toggle, setToggle] = useState(false);
  let audioRef = useRef(null);

  function incrementHr() {
    hours++;
    setHours(hours);
  }

  function decrementHr() {
    if (hours > 0) {
      hours--;
      setHours(hours);
    }
  }

  function incrementMin() {
    if (minutes < 59) {
      minutes++;
      setMinutes(minutes);

    }
    else {
      setMinutes(0);
    }
  }

  function decrementMin() {
    if (minutes > 0) {
      minutes--;
      setMinutes(minutes);
    }
  }

  function incrementSec() {
    if (seconds < 59) {
      seconds++;
      setSeconds(seconds);

    }
    else {
      setSeconds(0);
    }
  }

  function decrementSec() {
    if (seconds > 0) {
      seconds--;
      setSeconds(seconds);
    }
  }

  function startTimer() {
    setToggle(true);
  }
  function stopTimer() {
    audioRef.current.play();
    setToggle(false);
  }

  return (
    <section className='timer-container'>
      <div className='timer-circle' style={{fontSize:"2rem",color:"white",fontFamily:"var(--font-family-roboto)"}}>
      <CountdownCircleTimer
      isPlaying={toggle}
      duration={seconds + minutes * 60 + hours * 3600}
      colors={["#FF6A6A"]}
      onComplete={stopTimer}>

      {({ remainingTime }) => {
        let hours = Math.floor(remainingTime / 3600);
        let minutes = Math.floor((remainingTime % 3600) / 60);
        let seconds = remainingTime % 60;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
    
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
    
        if (hours < 10) {
          hours = `0${hours}`;
        }
        return `${hours}:${minutes}:${seconds}`;
      }}
      </CountdownCircleTimer>
      </div>
      <div className='timer-countdown'>
        <div>
          <p className='timer-time'>Hours</p>
          <img src={upimg} alt="up-arrow" style={{ cursor: "pointer" }} onClick={incrementHr} />
          {hours < 10 ? <p className='hms'>{`0${hours}`}</p> : <p className='hms'>{hours}</p>}
          <img src={downimg} alt="down-arrow" style={{ cursor: "pointer" }} onClick={decrementHr} />
        </div>

        <span className='dots'>:</span>

        <div>
          <p className='timer-time'>Minutes</p>
          <img src={upimg} alt="up-arrow" style={{ cursor: "pointer" }} onClick={incrementMin} />
          {minutes < 10 ? <p className='hms'>{`0${minutes}`}</p> : <p className='hms'>{minutes}</p>}
          <img src={downimg} alt="down-arrow" style={{ cursor: "pointer" }} onClick={decrementMin} />
        </div>

        <span className='dots'>:</span>

        <div>
          <p className='timer-time'>Seconds</p>
          <img src={upimg} alt="up-arrow" style={{ cursor: "pointer" }} onClick={incrementSec} />
          {seconds < 10 ? <p className='hms'>{`0${seconds}`}</p> : <p className='hms'>{seconds}</p>}
          <img src={downimg} alt="down-arrow" style={{ cursor: "pointer" }} onClick={decrementSec} />
        </div>

      </div>
      <div className='timer-btn-container'>
        {toggle ? <button className='timer-btn' onClick={stopTimer}>Stop</button> : <button className='timer-btn' onClick={startTimer}>Start</button>}
      </div>
      <audio ref={audioRef} src={alarmtone}></audio>
    </section>
  )
}

export default Timer
