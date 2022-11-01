import React from "react";
import PatientDetailBox from "./PatientDetailBox";
import Screenings from "./Screenings";

const PatientInfo = ({ info }) => {
  return (
    <div className="patientInfo">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="User Pic"
        />

        <h2>{info.name}</h2>
        <div className="left-sided">
          <p>
            {info.sex}
            <span className="bolded"> DOB: </span>
            {info.dob} ({info.age} Yrs)
          </p>
          <p>
            <span className="bolded">Ethnicity: </span> {info.ethnicity}
          </p>
          <p>
            <span className="bolded">Occupation: </span>
            {info.occupation}
          </p>
          <div>
            <span className="bolded">Account#:</span>
            {info.account}
            <p>
              <span className="bolded">MRN:-</span> {info.mrn}
            </p>
          </div>
        </div>
        <div className="right-sided">
          <p>
            <span className="bolded"> Address: </span>
            {info.dob} ({info.address} Yrs)
          </p>
          <p>
            <span className="bolded">Primary: </span> {info.primaryph}
          </p>
          <p>
            <span className="bolded">Emergency: </span>
            {info.emergencyph}
          </p>
          <p>
            <span className="bolded">Policy Number:</span>
            {info.policyno}
          </p>
          <p>
            <span className="bolded">Insurer:</span>
            {info.insurer}
          </p>
        </div>
      </div>
      <div>
        <PatientDetailBox content={info.box1} />
        <PatientDetailBox content={info.box2} />
        <PatientDetailBox content={info.box3} />
        <PatientDetailBox content={info.box4} />
      </div>
      <Screenings screenData={info} />
    </div>
  );
};

export default PatientInfo;
