import React from "react";
import Banner from "./Banner.js";
import Info from "./Info/Info.js";
import Services from "./Services/Services.js";
import MakeAppointment from "./MakeAppointment/MakeAppointment.js"
import Testimonials from './Testimonial/Testimonial.js'
import Contact from "./Contact/Contact.js"
import Footer from "./Footer/Footer.js"

const Home = () => {
  return (
    <div >
      <Banner className="px-12"/>
      <Info className="px-12"/>
      <Services className="px-12"/>
      <MakeAppointment/>
      <Testimonials className="px-12"/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
