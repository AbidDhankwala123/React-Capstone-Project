import React,{useState} from 'react'
import "../styles/LeftBanner.css"
import Text from './Text.jsx';
import Button from './Button.jsx';



const LeftBanner = ({isActive}) => {
  let [buttonObjs,setButtonObjs] = useState([
    {
      id:1,
      btnName:"romance",
      gborder:true,
    },
    {
      id:2,
      btnName:"action",
      gborder:true,
    },
    {
      id:3,
      btnName:"drama",
      gborder:true,
    },
    {
      id:4,
      btnName:"fantasy",
      gborder:true,
    },
    {
      id:5,
      btnName:"fiction",
      gborder:true,
    },
    {
      id:6,
      btnName:"horror",
      gborder:true,
    },
    {
      id:7,
      btnName:"music",
      gborder:true,
    },
    {
      id:8,
      btnName:"thriller",
      gborder:true,
    },
    {
      id:9,
      btnName:"western",
      gborder:true,
    },  
  ]);

  let deleteCategory = (id) => {
    // console.log(id);
    setButtonObjs(buttonObjs.filter((category) => category.id != id))
  }
  
  return (
    <div style={{display:"flex",flexDirection:"column",width:"35vw"}}>
      <Text/>
      <div className="button-container">
       {buttonObjs.map((name) => {
        return <Button key={name.id} name={name.btnName} isActive={isActive} idx={name.id} onDelete={deleteCategory}/>
       })}
      </div>
    </div>
  )
}

export default LeftBanner
