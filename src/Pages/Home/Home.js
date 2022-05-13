import React from "react";
import Banner from "./Banner.js";
import Info from "./Info/Info.js";
import Services from "./Services/Services.js";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services/>
    </div>
  );
};

export default Home;
