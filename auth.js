var credentials = {
  client: {
    id: "ad7331f7-7cea-42b5-931a-85b115340836",
    secret: "61914843-fc60-4eec-9cfd-13fc2935b083",
  },
  auth: {
    tokenHost: "https://sandbox.authz.flex.optum.com",
    authorizePath: "/oauth/authorize",
    tokenPath: "/oauth/token",
  },
};

var oauth2 = require("simple-oauth2").create(credentials);

var redirectUri =
  "https://lorisnikolov55.github.io/UHC-sandbox-app/patient.html";

// The scopes the app requires
var scopes = ["patient/Patient.read"];

function getAuthUrl() {
  var returnVal = oauth2.authorizationCode.authorizeURL({
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
  });
  console.log("Generated auth url: " + returnVal);
  return returnVal;
}

function getTokenFromCode(auth_code, callback, response) {
  var token;
  oauth2.authorizationCode.getToken(
    {
      code: auth_code,
      redirect_uri: redirectUri,
      scope: scopes.join(" "),
    },
    function (error, result) {
      if (error) {
        console.log("Access token error: ", error.message);
        callback(response, error, null);
      } else {
        token = oauth2.accessToken.create(result);
        console.log("Token created: ", token.token);
        callback(response, null, token);
      }
    }
  );
}

function refreshAccessToken(refreshToken, callback) {
  var tokenObj = oauth2.accessToken.create({ refresh_token: refreshToken });
  tokenObj.refresh(callback);
}

const _getAuthUrl = getAuthUrl;
export { _getAuthUrl as getAuthUrl };
const _getTokenFromCode = getTokenFromCode;
export { _getTokenFromCode as getTokenFromCode };
const _refreshAccessToken = refreshAccessToken;
export { _refreshAccessToken as refreshAccessToken };
