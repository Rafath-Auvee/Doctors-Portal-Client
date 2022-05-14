import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";
import Service from "./Service.js";
import PrimaryButton from "../../Shared/PrimaryButton.js"
import Filling from "../../../assets/images/treatment.png"
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: Fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: Cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: Whitening,
    },
  ];
  return (
    <div className="my-28 px-12">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Filling}
            className="max-w-sm rounded-lg shadow-2xl mr-24 mt-12"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
