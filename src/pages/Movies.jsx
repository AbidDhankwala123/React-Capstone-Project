import React,{useState,useEffect} from 'react'
import "../styles/Movies.css"
import { useNavigate } from 'react-router-dom'
import img from "../assets/circle-user.png"

const Movies = () => {
  let navigate = useNavigate();
  let [category, setCategory] = useState([]);
  let [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    setCategory(JSON.parse(localStorage.getItem("categories")));
  }, []);

  useEffect(() => {
    const callingApi = async (type) => {
      try {
        let raw_data = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=7ce215bedef998a057075788a5c272c5&&query=${type}`
        );
        let data = await raw_data.json();

        // Update categoryData using the category name as the key
        setCategoryData((prevData) => ({...prevData,[type]: data.results.slice(0,5)}));
      } catch (error) {
        console.log(error);
      }
    };

    // Call callingApi for each category here if needed
    category.forEach((type) => callingApi(type));
  }, [category]);

  return (
    <section className='movies-container' style={{backgroundColor:"black",minHeight:"100vh",padding:"20px"}}>
      <div className='nav-section'>
        <p className='movies-heading'>Super app</p>
        <img src={img} style={{height:"50px",width:"50px",cursor:"pointer"}} onClick={() => navigate('/home')}/>
      </div>

      <section className='display-movies'>
        <p className='choosen-entertainment'>Entertainment according to your choice</p>


        {category.map((movieType, idx) => (
          <div key={idx}>
            <p className='category-type'>{movieType}</p>
            <div className='flex-area'>
              {categoryData[movieType] && categoryData[movieType].map((element, index) => (element.poster_path && (
                    <img
                      key={index}
                      src={`https://image.tmdb.org/t/p/w185/${element.poster_path}`}
                      alt=""
                    />
                  )
                ))}
            </div>
          </div>
        ))}


      </section>

    </section>
  )
}

export default Movies
