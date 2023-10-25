import RegisterPage from './pages/RegisterPage';
import Category from './pages/Category';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
