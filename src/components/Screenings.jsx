import React from "react";

const Screenings = ({ screenData }) => {
  return (
    <div className="screening">
      <h4>Screenings: </h4>
      {screenData.screenings.map((data, i) => {
        return <span>{data}, </span>;
      })}
    </div>
  );
};

export default Screenings;
