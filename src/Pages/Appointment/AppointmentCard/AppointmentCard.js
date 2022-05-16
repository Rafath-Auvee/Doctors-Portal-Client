import React, { useState, useEffect } from "react";
import Services from "../Services/Services.js";
import ModalAppointment from "../ModalAppointment/ModalAppointment.js"
import { format } from "date-fns";
const AppointmentCard = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div >
      <p className="text-center text-xl text-secondary text-bold">
        Available Appointment on {format(date, "PP")}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <Services key={service._id} service={service} setTreatment={setTreatment}/>
        ))}
      </div>
      {treatment && <ModalAppointment treatment={treatment}/>}
    </div>
  );
};

export default AppointmentCard;
