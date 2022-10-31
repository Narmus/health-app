import React from "react";
import Sidebar from "./Sidebar";
import PatientChecks from "./PatientChecks";
import patientChecksData from "../patientChecksData";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <PatientChecks key="4" stats={patientChecksData.card4} />
      <PatientChecks key="3" stats={patientChecksData.card3} />
      <PatientChecks key="2" stats={patientChecksData.card2} />
      <PatientChecks key="1" stats={patientChecksData.card1} />
    </div>
  );
}

export default App;
