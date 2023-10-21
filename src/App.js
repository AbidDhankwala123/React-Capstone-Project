import RegisterPage from './components/RegisterPage';
import Category from './components/Category';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
