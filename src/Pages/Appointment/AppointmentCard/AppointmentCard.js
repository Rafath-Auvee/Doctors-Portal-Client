import React, { useState, useEffect } from "react";
import Services from "../Services/Services.js";
import ModalAppointment from "../ModalAppointment/ModalAppointment.js";
import { format } from "date-fns";
import Loading from "../../Shared/Loading/Loading.js"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const AppointmentCard = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const queryClient = new QueryClient()

  const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
    fetch(`https://doctors-portal-auvee.herokuapp.com/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if(isLoading)
  {
    return <Loading/>
  }


  return (
    <div>
      <p className="text-center text-xl text-secondary text-bold">
        Available Appointment on {format(date, "PP")}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <Services
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <ModalAppointment
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AppointmentCard;
