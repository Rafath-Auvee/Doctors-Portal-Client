import "./App.css";
import Navbar from "./Pages/Shared/Navbar.js";
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Login from "./Pages/Authencation/Login/Login.js";
import SignUp from "./Pages/Authencation/Register/SignUp.js"
import Appointment from "./Pages/Appointment/Appointment.js";
import RequireAuth from './Pages/Authencation/RequiredAuth/RequiredAuth.js';
import Contact from "./Pages/Contact/Contact.js"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
