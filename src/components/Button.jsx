import React from 'react'
import "../styles/Button.css"
import { FaTimes } from "react-icons/fa";


const Button = ({ name, isActive, idx, onDelete }) => {
  return (
    <>
      {isActive && <button className='entertainment-btn' >{name} <FaTimes onClick={() => onDelete(idx)} style={{ color: "#085C00", cursor: "pointer", paddingLeft: "5px" }} /></button>}


    </>
  )
}

export default Button
