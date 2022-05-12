import './App.css';
import Navbar from './Pages/Shared/Navbar.js'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home.js'
import About from './Pages/About/About.js'
import Login from "./Pages/Authencation/Login/Login.js"


function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
