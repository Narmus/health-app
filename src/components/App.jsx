import React, { Fragment, useState } from "react";
import Header from "./Header";
import PatientChecks from "./PatientChecks";
import patientChecksData from "../patientChecksData";
import PatientInfo from "./PatientInfo";
import Editable from "./Editable";
import patientInfoData from "../patientInfoData";
import Sidebar from "./Sidebar";

function App() {
  let [sideBar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar((prevState) => {
      return !prevState;
    });
    console.log(sideBar);
  };
  return (
    <Fragment>
      <Header toggle={toggleSidebar} />

      <div className="flexbox-1">
        <Sidebar sideBar={sideBar} toggle={toggleSidebar} />
        <div></div>
        <div className="full-content">
          <div className="flexbox-container-patient-info">
            <PatientInfo info={patientInfoData} />
            <div className="editable-flex">
              <Editable val={patientInfoData.recentActivity} />
              <Editable val={patientInfoData.latestNote} />
            </div>
          </div>
          <div className="flexbox-container-patient-checks patient-checks">
            <PatientChecks stats={patientChecksData.card1} />
            <PatientChecks stats={patientChecksData.card2} />
            <PatientChecks stats={patientChecksData.card3} />
            <PatientChecks stats={patientChecksData.card4} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
