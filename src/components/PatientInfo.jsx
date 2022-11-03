import React from "react";
import PatientDetailBox from "./PatientDetailBox";
import Screenings from "./Screenings";

const PatientInfo = ({ info }) => {
  return (
    <div className="patient-info">
      <div>
        <div className="patient-info-img-holder">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="User Pic"
          />
          <button className="change-pic-button">
            <i class="ri-video-add-fill"></i>
          </button>
        </div>

        <div className="flexbox-container-patient-info-inner">
          <div className="patient-info-left ">
            <div className="patient-name-box">
              <h2>{info.name}</h2>
              <button className="orange-button">
                <i class="ri-pencil-line"></i>
              </button>
              <button className="orange-button-no-space">
                <i class="ri-more-2-fill"></i>
              </button>
              <button className="button-space">
                <i class="ri-add-line ri-2x"></i> <p>Chart</p>
              </button>
              <button className="button-space">
                <i class="ri-add-line ri-2x"></i> <p>Enroll</p>
              </button>
            </div>
            <p>
              {info.sex}
              <span> DOB: </span>
              {info.dob} ({info.age} Yrs)
            </p>
            <p>
              <span>Ethnicity: </span> {info.ethnicity}
            </p>
            <p>
              <span>Occupation: </span>
              {info.occupation}
            </p>
            <div>
              <span>Account#:</span>
              {info.account}
              <span>
                <span> MRN:-</span> {info.mrn}
              </span>
            </div>
          </div>
          <div className="patient-info-right">
            <p>
              <span> Address: </span>({info.address} Yrs)
            </p>
            <p>
              <span>Primary: </span> {info.primaryph}
            </p>
            <p>
              <span>Emergency: </span>
              {info.emergencyph}
            </p>
            <p>
              <span>Policy Number:</span>
              {info.policyno}
            </p>
            <p>
              <span>Insurer:</span>
              {info.insurer}
            </p>
          </div>
        </div>
      </div>
      <div className="flexbox-patient-detail-box">
        <div className="flexbox-patient-detail-box">
          <PatientDetailBox content={info.box1} />
          <PatientDetailBox content={info.box2} />
          <PatientDetailBox content={info.box3} />
          <PatientDetailBox content={info.box4} />
        </div>
        <Screenings screenData={info} />
      </div>
    </div>
  );
};

export default PatientInfo;
