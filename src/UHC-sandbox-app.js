async function requestPatientData() {
  const base_url = "https://sandbox.fhir.flex.optum.com/R4";
  console.log(base_url + "/Patient");
  var patient = await fetch(base_url + "/Patient", {
    headers: {
      Accept: "application/json+fhir",
      Authorization: "Bearer " + "",
    },
  }).then(function (data) {
    return data;
  });

  var patientData = await patient.json();
  console.log(patientData);
}

function oauth2 () {
  
}