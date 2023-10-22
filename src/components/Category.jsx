import React, { useState } from 'react'
import LeftBanner from './LeftBanner.jsx';
import RightBanner from './RightBanner.jsx';
import image1 from "../assets/romance.png"
import image2 from "../assets/action.png"
import image3 from "../assets/drama.png"
import image4 from "../assets/fantasy.png"
import image5 from "../assets/fiction.png"
import image6 from "../assets/horror.png"
import image7 from "../assets/music.png"
import image8 from "../assets/thriller.png"
import image9 from "../assets/western.png"


const Category = () => {
  let [buttonObjs, setButtonObjs] = useState([
    {
      id: 1,
      btnName: "romance",
      imgSource: image1,
      gborder: false,
    },
    {
      id: 2,
      btnName: "action",
      imgSource: image2,
      gborder: false,
    },
    {
      id: 3,
      btnName: "drama",
      imgSource: image3,
      gborder: false,
    },
    {
      id: 4,
      btnName: "fantasy",
      imgSource: image4,
      gborder: false,
    },
    {
      id: 5,
      btnName: "fiction",
      imgSource: image5,
      gborder: false,
    },
    {
      id: 6,
      btnName: "horror",
      imgSource: image6,
      gborder: false,
    },
    {
      id: 7,
      btnName: "music",
      imgSource: image7,
      gborder: false,
    },
    {
      id: 8,
      btnName: "thriller",
      imgSource: image8,
      gborder: false,
    },
    {
      id: 9,
      btnName: "western",
      imgSource: image9,
      gborder: false,
    },
  ]);

  let [error, setError] = useState(false);

  let arr = [];

  function handleClick() {
    if (arr.length < 3) {
      console.log(arr);
      setError(true);
      return true;
    }
    else{
      setError(false);
      return false;
    }
  }

  let toggleGBorder = (id) => {
    // console.log(id);
    setButtonObjs(buttonObjs.map((category) => category.id === id ? { ...category, gborder: !category.gborder } : category));
    // setButtonObjs(buttonObjs.map((data) => arr.push(data)));
  }


  return (
    <>
      <div style={{ height: "100vh", display: "flex", backgroundColor: "black" }}>
        <LeftBanner error={error} objects={buttonObjs} setObjects={setButtonObjs} />
        <RightBanner onToggle={toggleGBorder} buttonObjs={buttonObjs} onHanlde={handleClick} />
      </div>
    </>

  )
}

export default Category
