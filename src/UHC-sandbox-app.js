async function requestPatientData() {
  const base_url = "https://sandbox.fhir.flex.optum.com/R4";
  console.log(base_url + "/Patient");
  var patient = await fetch(base_url + "/Patient", {
    headers: {
      Accept: "application/json+fhir",
      Authorization: "Bearer " + "eyJraWQiOiI5MmY1YjM3NC1iYTI1LTQ3MTctOTRlOC1iZmFhZjQ2ZDdlYTkiLCJhbGciOiJSUzI1NiJ9.eyJodHRwOlwvXC9vcHR1bS5jb21cL2NsaW5pY2FsaW50ZXJvcFwvaWRlbnRpZmljYXRpb25cL2NsYWltc1wvZWxpZ2liaWxpdHlcL3NvdXJjZXN5c3RlbSI6InVoY252LWZhY2V0cyIsInN1YiI6IjMzMTBhNjkyNzVmNzY3YjcxNjY0MDgwMjNjMjM4MjgyNzE2OTQ3ODY4MWM3OGE2MTc1MTE0NTFlOGJkMTUyMGYiLCJodHRwOlwvXC9vcHR1bS5jb21cL2NsaW5pY2FsaW50ZXJvcFwvaWRlbnRpZmljYXRpb25cL2NsYWltc1wvZWxpZ2liaWxpdHlcL2VmZmVjdGl2ZWRhdGUiOiIyMDE2LTAxLTAxIiwiaHR0cDpcL1wvb3B0dW0uY29tXC9jbGluaWNhbGludGVyb3BcL2N1c3RvbWVycmV0dXJuZGF0YVwvY2xhaW1zXC9wcm9kdWN0aW9uZGF0YSI6ImZhbHNlIiwiaHR0cDpcL1wvb3B0dW0uY29tXC9jbGluaWNhbGludGVyb3BcL3ZlbmRvclwvY2xhaW1zXC92ZW5kb3J1bmlxdWVpZGVudGlmaWVyIjoiMzEzIiwiaHR0cDpcL1wvb3B0dW0uY29tXC9jbGluaWNhbGludGVyb3BcL3ZlbmRvclwvY2xhaW1zXC92ZW5kb3JuYW1lIjoiVGVsbCBIZWFsdGggSW5jLiIsImlzcyI6Imh0dHBzOlwvXC9hdXRoei5mbGV4Lm9wdHVtLmNvbVwvZXh0IiwiaHR0cDpcL1wvb3B0dW0uY29tXC9jbGluaWNhbGludGVyb3BcL3ZlbmRvclwvY2xhaW1zXC9hcHBsaWNhdGlvbnVuaXF1ZWlkZW50aWZpZXIiOiIyNzYiLCJjbGllbnRfaWQiOiJhZDczMzFmNy03Y2VhLTQyYjUtOTMxYS04NWIxMTUzNDA4MzYiLCJodHRwOlwvXC9vcHR1bS5jb21cL2NsaW5pY2FsaW50ZXJvcFwvaWRlbnRpZmljYXRpb25cL2NsYWltc1wvbWVtYmVyX2V4dGVybmFsX2lkZW50aWZpZXIiOiIzMzEwYTY5Mjc1Zjc2N2I3MTY2NDA4MDIzYzIzODI4MjcxNjk0Nzg2ODFjNzhhNjE3NTExNDUxZThiZDE1MjBmIiwibmJmIjoxNjY1NDMyODc4LCJodHRwOlwvXC9vcHR1bS5jb21cL2NsaW5pY2FsaW50ZXJvcFwvdmVuZG9yXC9jbGFpbXNcL2FwcGxpY2F0aW9ubmFtZSI6IlVuaXRlZCBIZWFsdGhjYXJlIFNhbmRib3ggQXBwIiwiaHR0cDpcL1wvb3B0dW0uY29tXC9jbGluaWNhbGludGVyb3BcL2lkZW50aWZpY2F0aW9uXC9jbGFpbXNcL2hlbWlcL3NlcnZpY2VhY2NvdW50IjoiRkxFWFVIQ0JLMSIsInNjb3BlIjoiW1wicGF0aWVudFwvUGF0aWVudC5yZWFkXCJdIiwiZXhwIjoxNjY1NDMzNDc3LCJpYXQiOjE2NjU0MzMxNzh9.aLtkPQo_RUiZdfmN68CD2y4GA1eg9FPN-mAVM5EIBux8yfLccHehxxDg4HP5NBx6lYEZNtQcmnfU7gFc_e6wzW4VOf1EaMyuPyRfdUD1hRdDoN1GT-qTEDJBo-MNih1sJChh8YGTOFDDrFIgRSWs5_Iqrii4IqFIDq2fwE55LBsbP4VDfZ323E3PfAVEpvDz7swm9XLzoP3VLnYepEOD-1YxomWgpl2ljdKN2UsaH-j4h2qYWIvA9YbT1FEQKAx3hpOBNhWs1wqkLjCRurQ5QVF44YemP4I2VLQ5HzX-SmJL4PuMgFb0fpocgsQO3IUb520UoUndvpXqkzshosCbGg",
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