import logo from "./logo.svg";
import "./App.css";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
