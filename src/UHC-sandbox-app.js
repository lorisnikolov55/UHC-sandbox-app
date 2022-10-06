async function requestPatientData() {
  const base_url =
    "https://sandbox.fhir.flex.optum.com/R4";
  var patient = await fetch(base_url + "/Patient/" + myApp.smart.patient.id, {
    headers: {
      Accept: "application/json+fhir",
      Authorization: "Bearer " + myApp.smart.state.tokenResponse.access_token,
    },
  }).then(function (data) {
    return data;
  });

  var patientData = await patient.json();
  console.log(patientData);
}
