import React from 'react'
import "../styles/Notes.css"

const Notes = () => {
  return (
    <section className='notes-container'>
      <h2>All Notes</h2>
      <textarea onChange={(e) => localStorage.setItem("myNotes",e.target.value)}></textarea>
      
    </section>
  )
}

export default Notes
