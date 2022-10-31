import React from "react";
import Sidebar from "./Sidebar";
import PatientChecks from "./PatientChecks";
import patientChecksData from "../patientChecksData";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <PatientChecks stats={patientChecksData.card1} />
      <PatientChecks stats={patientChecksData.card2} />
      <PatientChecks stats={patientChecksData.card3} />
      <PatientChecks stats={patientChecksData.card4} />
    </div>
  );
}

export default App;
