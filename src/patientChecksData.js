// let patientChecksData = [
//   {
//     primaryPhysician: "Name",
//     primaryLocation: "Location",
//     referredBy: "referrer",
//     lastVisit: "Date",
//     totalVisits: "visits",
//     totalHospitalization: "hospitalized",
//     readMission: "number",
//     condition: ["1", "2", "3"],
//     habits: ["habit1", "habit2"],
//     vitals: {
//       bmi: "NA",
//       systolicDiastolic: "value",
//       glucose: "glucose",
//       oxygensat: "NA",
//     },
//     labs: { hdl: "hdl", ldl: "ldl", hba1c: "hba1c" },
//     allergies: ["aller1", "aller2", "aller3"],
//     medications: ["med1", "med2"],
//     immunization: ["whatever it is"],
//     programs: ["prog1", "prog2", "prog3"],
//     serviceCategory: ["sercat1", "sercat2"],
//     measures: ["measure1", "measure2", "measure3"],
//   },
// ];

const patientChecksData = {
  card1: {
    color: "blue",
    data: [
      { header: "Primary Physician", value: "TEST ONLY" },
      { header: "Primary Location", value: "EBS Demo Facility - 35" },
      { header: "Referred By", value: "Not Provided" },
      { header: "Last Visit       ", value: "15-Nov-2019" },
      { header: "No of Visits:      ", value: "7" },
      { header: "No of Hospitalizations:", value: "0" },
      { header: "Readmissions", value: "0" },
    ],
  },
  card2: {
    color: "green",
    data: [
      {
        header: "Condition:",
        subDataArr: ["Heart Failure", "Hypertension", "Ischemic Heart Disease"],
      },
      { header: "Habits:", value: ["Smoking"] },
      {
        header: "Vitals",
        subDataObj: {
          bmi: "NA",
          systolicDiastolic: "value",
          glucose: "glucose",
          oxygensat: "NA",
        },
      },
      { header: "Lab:", subDataObj: { HDL: "NA", LDL: "NA", HbA1c: "NA" } },
    ],
  },
  card3: {
    color: "orange",
    data: [
      {
        header: "Allergy:",
        subDataArr: ["Env (Fungicide)", "Food (Egg)", "Food (Tree Nut)"],
      },
      { header: "Medication:", value: ["DIA-EZE"] },
      { header: "Immunization:", value: "1122(dtp)" },
    ],
  },
  card4: {
    color: "red",
    data: [
      {
        header: "Programs:",
        subDataArr: [
          "Remote Monitoring",
          "Disease Management Program",
          "CCM",
          "AWV",
        ],
      },
      {
        header: "Service Category:",
        subDataArr: ["High Acuity", "Straight Medicare"],
      },
      {
        header: "Measures:",
        subDataArr: [
          "Adult Access to Preventive/Ambulatory Health Services ALL",
          "Adult BMI Assessment",
          "Controlling High blood pressure with 18-59 years of age",
        ],
      },
    ],
  },
};

export default patientChecksData;
