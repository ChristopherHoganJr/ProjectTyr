import { Routes, Route } from "react-router-dom";

import "./App.css";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import CarClubs from "./pages/CarClubs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carclubs" element={<CarClubs />} />
      </Routes>
    </div>
  );
}

export default App;
