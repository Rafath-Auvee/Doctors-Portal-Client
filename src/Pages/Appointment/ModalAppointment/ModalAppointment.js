import React from "react";
import { format } from "date-fns";
const ModalAppointment = ({ treatment, date , setTreatment }) => {
  const {_id, name, slots } = treatment;
  let i = 0;
  const handleBooking = e => {
    e.preventDefault()
    const slot = e.target.slot.value;
    console.log(_id, name, slot)
    setTreatment(null)
  }
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
          <h3 className="text-lg font-bold text-secondary">Booking Name: {name}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-5 mt-4 justify-items-center "
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-xs "
            />
            <select name="slot" className="select select-secondary w-full max-w-xs">
              {
                slots.map(slot=> <option key={i++} value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-bordered btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAppointment;
