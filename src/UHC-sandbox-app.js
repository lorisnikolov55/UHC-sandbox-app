async function requestPatientData() {
  const base_url = "https://sandbox.fhir.flex.optum.com/R4"
  console.log(base_url+"Patient")
  var patient = await fetch(base_url + "/Patient", {
    headers: {
      Accept: "application/json+fhir",
      Authorization: "Bearer " + myApp.smart.state.tokenResponse.access_token,
      Authorization: "Client Secret " + "61914843-fc60-4eec-9cfd-13fc2935b083",
    },
  }).then(function (data) {
    return data;
  });

  var patientData = await patient.json();
  console.log(patientData);
}
