import { Routes, Route } from "react-router-dom";

import "./App.css";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import CarClubs from "./pages/CarClubs";
import SingleClubPage from "./pages/SingleClubPage";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carclubs' element={<CarClubs />} />
        <Route path='/carclubs/:id' element={<SingleClubPage />} />
      </Routes>
    </div>
  );
}

export default App;
