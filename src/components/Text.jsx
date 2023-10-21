import React from 'react'
import "../styles/Text.css"
import { GoAlertFill } from "react-icons/go"

const Text = ({ error }) => {
  return (
    <>
      <h1 className='form-headings'>Super app</h1>
      <p className='entertainment-list'>Choose your entertainment category</p>
      {error && <p className='error-field-text'><GoAlertFill style={{ color: "red", marginRight: "10px" }} />Minimum 3 categories required</p>}
    </>
  )
}

export default Text
