import React from "react";

const InfoCard = ({img, bgClass, title}) => {
  return (
    <div>
      <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure className="pl-5">
          <img
            src={img}
            className="pt-6 lg:pt-0"
            alt="Movie"
          />
                    
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
                    
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
