import React from "react";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const ModalAppointment = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const formattedDate = format(date, "PP");
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    axios.post("https://doctors-portal-auvee.herokuapp.com/booking", booking).then((data) => {
      if (data.data?.success) {
        toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
      } else {
        toast.warning(
          `Already have an appointment on ${data.data?.booking?.date} at ${data.data?.booking?.slot}`
        );
      }
      console.log(data.success);
      console.log(data);
      refetch()
      setTreatment(null);
    });

    console.log(_id, name, slot);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-secondary">
            Booking Name: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAppointment;
