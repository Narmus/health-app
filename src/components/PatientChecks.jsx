import React, { Fragment } from "react";

const PatientChecks = ({ stats }) => {
  return (
    <div className="patientDetailBox">
      {stats.data.map((item, i) => {
        return (
          <Fragment>
            <h4>{item.header}</h4>
            {item.value && <p>{item.value}</p>}
            {item.subData &&
              Object.entries(item.subData).map((entry, i) => {
                const [head, val] = entry;
                return (
                  <Fragment>
                    <p>
                      {head} : {val}
                    </p>
                  </Fragment>
                );
              })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default PatientChecks;

{
  /* <PatientChecks
            key={i}
            primaryPhysician={detail.primaryPhysician}
            primaryLocation={detail.primaryLocation}
            referredBy={detail.referredBy}
            lastVisit={detail.lastVisit}
            totalVisits={detail.totalVisits}
            totalHospitalization={detail.totalHospitalization}
            readMission={detail.readMission}
            condition={detail.condition}
            habits={detail.habits}
            vitals={detail.vitals}
            labs={detail.labs}
            allergies={detail.allergies}
            medications={detail.medications}
            immunization={detail.immunization}
            programs={detail.programs}
            serviceCategory={detail.serviceCategory}
            measures={detail.measures}
          /> */
}
