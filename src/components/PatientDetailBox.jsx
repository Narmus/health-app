import React from "react";

const patientDetailBox = ({ content }) => {
  return (
    <div className="patient-detail-box">
      {Object.entries(content).map((entry, i) => {
        const [head, val] = entry;
        return (
          <div key={i}>
            <p className="detail-box-head">{head}</p>
            {head !== "CareGaps"
              ? val.map((ent, i) => {
                  return (
                    <p key={i} className="detail-box-val">
                      {ent}
                    </p>
                  );
                })
              : val.map((ent, i) => {
                  return (
                    <p key={i} className="care-gap">
                      {ent}
                    </p>
                  );
                })}
          </div>
        );
      })}
    </div>
  );
};

export default patientDetailBox;
