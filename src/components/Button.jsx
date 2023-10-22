import React from 'react'
import "../styles/Button.css"
import { FaTimes } from "react-icons/fa";


const Button = ({ name, onDelete, idx }) => {
  return (
    <>
      <button className='entertainment-btn' >{name} <FaTimes style={{ color: "#085C00", cursor: "pointer", paddingLeft: "5px" }} onClick={() => onDelete(idx)} /></button>


    </>
  )
}

export default Button
