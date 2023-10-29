import RegisterPage from './pages/RegisterPage';
import Category from './pages/Category';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let isActive = localStorage.getItem("categories") === null;

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={isActive ? <RegisterPage/> : <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
