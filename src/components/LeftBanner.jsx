import React, { useState } from 'react'
import "../styles/LeftBanner.css"
import Text from './Text.jsx';
import Button from './Button.jsx';



const LeftBanner = ({ objects, setObjects }) => {
  let [buttonObjs, setButtonObjs] = useState([
    {
      id: 1,
      btnName: "romance",
      gborder: false,
    },
    {
      id: 2,
      btnName: "action",
      gborder: false,
    },
    {
      id: 3,
      btnName: "drama",
      gborder: false,
    },
    {
      id: 4,
      btnName: "fantasy",
      gborder: false,
    },
    {
      id: 5,
      btnName: "fiction",
      gborder: false,
    },
    {
      id: 6,
      btnName: "horror",
      gborder: false,
    },
    {
      id: 7,
      btnName: "music",
      gborder: false,
    },
    {
      id: 8,
      btnName: "thriller",
      gborder: false,
    },
    {
      id: 9,
      btnName: "western",
      gborder: false,
    },
  ]);

  let deleteCategory = (id) => {
    // console.log(id);
    setButtonObjs(buttonObjs.filter((category) => category.id != id))
    setObjects(objects.map((category) => category.id == id ? { ...category, gborder: !category.gborder } : category))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "35vw" }}>
      <Text />
      <div className="button-container">
        {objects.map((name) => {
          return (
            name.gborder == true ? <Button key={name.id} name={name.btnName} onDelete={deleteCategory} idx={name.id} /> : ""
          )
        })}
      </div>
    </div>
  )
}

export default LeftBanner
