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

/*async function requestAccessToken() {
  const base_uri = "https://sandbox.authz.flex.optum.com/";
  const auth_uri = base_uri + "oauth/authorize";
  const full_auth_uri =
    auth_uri +
    "?response_type=code&client_id=ad7331f7-7cea-42b5-931a-85b115340836&state=1234zyx&scope=patient%2FPatient.read&redirect_uri=https%3A%2F%2Florisnikolov55.github.io%2FUHC-sandbox-app%2Fpatient.html";
  console.log(full_auth_uri);

  let req = new Request(full_auth_uri, {
    method: "GET",
    mode: "no-cors",
  });

  fetch(req)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
    });
  //return accessToken
}*/
