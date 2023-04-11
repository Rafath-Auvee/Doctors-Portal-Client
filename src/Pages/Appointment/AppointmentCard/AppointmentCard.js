import React, { useState, useEffect } from "react";
import Services from "../Services/Services.js";
import ModalAppointment from "../ModalAppointment/ModalAppointment.js";
import { format } from "date-fns";
import Loading from "../../Shared/Loading/Loading.js"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// import ModalAppointment from "../ModalAppointment/ModalAppointment";

const AppointmentCard = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null)
  const formattedDate = format(date, 'PP');

  const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
      fetch(`https://doctors-portal-server-sage-psi.vercel.app/available?date=${formattedDate}`)
          .then(res => res.json())
  )
  if (isLoading) {
      return <Loading></Loading>
  }
  return (
      <div>
          <h4 className='text-xl text-secondary text-center mt-32 mb-9'>Appointments Available on {format(date, 'PP')}</h4>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center'>
              {
                  services?.map(service => <Service
                      key={service._id}
                      service={service}
                      setTreatment={setTreatment}
                  ></Service>)
              }
          </div>
          {treatment && <ModalAppointment
              setTreatment={setTreatment}
              date={date}
              treatment={treatment}
              refetch={refetch}
          ></ModalAppointment>}
      </div>
  );
};

export default AppointmentCard;
