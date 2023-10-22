import React from 'react'
import "../styles/RightBanner.css"

const RightBanner = ({ onToggle, buttonObjs }) => {


  return (
    <>
      <div style={{ width: "65vw" }} className='grid-container'>
        {buttonObjs.map((name) => {
          // console.log(name);
          return (
            <div key={name.id} className={`${name.btnName}-div entertainment-divs ${name.gborder ? 'gborder' : ''}`} onClick={() => onToggle(name.id)}>

              <p className='entertainment-headings'>{name.btnName}</p>

              <img src={name.imgSource} alt={name.btnName} className='entertainment-images' />
            </div>
          );
        })}
      </div>

      <div className='next-page-div'>
        <button className='next-page'>Next Page</button>
      </div>
    </>
  )
}

export default RightBanner
