import React, { useEffect, useState } from 'react'
import image from "../assets/image 14.png"
import "../styles/Info.css"

const Info = () => {
  let [name,setName] = useState("");
  let [username,setUsername] = useState("");
  let [email,setEmail] = useState("");

  let [arr,setArr] = useState([]);
  
useEffect(() => {
  setName(localStorage.getItem("name"));
  setUsername(localStorage.getItem("username"));
  setEmail(localStorage.getItem("email"));
  setArr(JSON.parse(localStorage.getItem("categories")));

},[])

  return (
    <section className='info-container'>
      <div className='right-image'>
        <img src={image} className='music-lover' />
      </div>
      <div className='right-text'>
        <p className='name-text'>{name}</p>
        <p className='email-text'>{email}</p>
        <p className='username-text'>{username}</p>
        <div className="new-button-container">
          {arr.map((element,idx) => (
            <div className='new-button' key={idx}>{element}</div>

          )
          )}
        </div>
      </div>
    </section>
  )
}

export default Info
