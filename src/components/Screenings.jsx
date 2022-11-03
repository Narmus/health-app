import React from "react";

const Screenings = ({ screenData }) => {
  return (
    <div className="screenings">
      <h4>Screenings: </h4>
      {screenData.screenings.map((data, i) => {
        return <p key={i}>⚪ {data} &emsp;</p>;
      })}
    </div>
  );
};

export default Screenings;
