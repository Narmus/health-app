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
      { header: "Primary Physician", value: "Name" },
      { header: "Primary Location", value: "Place" },
    ],
  },
  card2: {
    color: "green",
    data: [
      { header: "Primary Physician", value: "Name" },
      { header: "Primary Location", value: "Place" },
    ],
  },
  card3: {
    color: "orange",
    data: [
      { header: "Primary Physician", value: "Name" },
      {
        header: "Vitals",
        subData: {
          bmi: "NA",
          systolicDiastolic: "value",
          glucose: "glucose",
          oxygensat: "NA",
        },
      },
    ],
  },
  card4: {
    color: "red",
    data: [
      { header: "Primary Physician", value: "Name" },
      { header: "Primary Location", value: "Place" },
    ],
  },
};

export default patientChecksData;
