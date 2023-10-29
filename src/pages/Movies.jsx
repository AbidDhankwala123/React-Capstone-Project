import React from 'react'
import "../styles/Movies.css"
import { useNavigate } from 'react-router-dom'
import img from "../assets/circle-user.png"
import moviesImg from "../assets/fiction.png"

const Movies = () => {
  let navigate = useNavigate();

  return (
    <section className='movies-container' style={{backgroundColor:"black",minHeight:"100vh",padding:"20px"}}>
      <div className='nav-section'>
        <p className='movies-heading'>Super app</p>
        <img src={img} style={{height:"50px",width:"50px",cursor:"pointer"}} onClick={() => navigate('/home')}/>
      </div>

      <section className='display-movies'>
        <p className='choosen-entertainment'>Entertainment according to your choice</p>

        <div>
          <p className='category-type'>Action</p>
          <div className='flex-area'>
            <img src={moviesImg}/>
            <img src={moviesImg}/>
            <img src={moviesImg}/>
            <img src={moviesImg}/>
          </div>
        </div>

      </section>

    </section>
  )
}

export default Movies
