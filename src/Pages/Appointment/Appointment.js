import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner.js";
import AppointmentCard from "./AppointmentCard/AppointmentCard.js";
import Footer from "../Shared/Footer/Footer.js";
const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}/>
      <AppointmentCard date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
