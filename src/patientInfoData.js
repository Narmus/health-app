const patientInfoData = {
  name: "Pet3011 par3011",
  sex: "Male",
  dob: "01-Jan-1980",
  age: "42",
  ethnicity: "Caucasian (European)",
  occupation: "Management",
  account: "14251541825",
  mrn: "(EBS Demo Facility - 35)",
  address: "No details Provided",
  primaryph: "+9111111111",
  emergencyph: "+122222222",
  policyno: "999999999",
  insurer: "Medicare",
  screenings: [
    "DM",
    "BP",
    "Depression",
    "Colorectal",
    "Breast cancer",
    "Fall Risk",
    "Tobacco",
  ],

  box1: { Risk: ["This Year : N/A", "Last Year : N/A"] },
  box2: { CareGaps: ["3"] },
  box3: { ASCVD: ["Current Risk : 2.70", "Lowest Risk : 0.20"] },
  box4: { SDOH: ["This Year : 0.57", "Last Year: 0.60"] },
  recentActivity: { head: "Recent Activity", value: ["Follow Up"] },
  latestNote: { head: "Latest Notes", value: ["stuff1", "stuff2"] },
};

export default patientInfoData;
