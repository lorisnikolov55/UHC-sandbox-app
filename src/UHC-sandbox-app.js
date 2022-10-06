async function requestPatientData() {
  const base_url = "https://sandbox.authz.flex.optum.com/"
  console.log(base_url+"Patient")
  var patient = await fetch(base_url + "Patient", {
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
