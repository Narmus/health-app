import React from "react";
import Sidebar from "./Sidebar";
import PatientChecks from "./PatientChecks";
import patientChecksData from "../patientChecksData";
import PatientInfo from "./PatientInfo";
import Editable from "./Editable";
import patientInfoData from "../patientInfoData";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="float-right">
        <Editable val={patientInfoData.recentActivity} />
        <Editable val={patientInfoData.latestNote} />
      </div>
      <div className="float-right">
        <PatientInfo info={patientInfoData} />
      </div>
      <div>
        <PatientChecks stats={patientChecksData.card4} />
        <PatientChecks stats={patientChecksData.card3} />
        <PatientChecks stats={patientChecksData.card2} />
        <PatientChecks stats={patientChecksData.card1} />
      </div>
    </div>
  );
}

export default App;
