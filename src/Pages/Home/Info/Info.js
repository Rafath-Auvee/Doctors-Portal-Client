import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js'
import Marker from "../../../assets/icons/marker.svg"
import Clock from "../../../assets/icons/clock.svg"
import Phone from "../../../assets/icons/phone.svg"


const Info = () => {
  
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard img={Marker} title="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary"/>
      <InfoCard img={Clock} title="Visit our location" bgClass="bg-accent"/>
      <InfoCard img={Phone} title="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary"/>
    </div>
  );
};

export default Info;