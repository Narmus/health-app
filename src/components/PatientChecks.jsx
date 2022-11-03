import React, { Fragment } from "react";

const PatientChecks = ({ stats }) => {
  return (
    <div style={{ borderColor: stats.color }}>
      {stats.data.map((item, i) => {
        return (
          <Fragment>
            <h4>{item.header}</h4>
            {item.value && <span>{item.value}</span>}
            {item.subDataArr && <p>{item.subDataArr.join(", ")}</p>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default PatientChecks;
