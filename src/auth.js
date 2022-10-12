import AuthorizationCode from "../node_modules/simple-oauth2";
//const { AuthorizationCode } = require("simple-oauth2");
const oauth2 = new AuthorizationCode({
  client: {
    id: "ad7331f7-7cea-42b5-931a-85b115340836",
    secret: "61914843-fc60-4eec-9cfd-13fc2935b083",
  },
  auth: {
    tokenHost: "https://sandbox.authz.flex.optum.com",
    authorizePath: "/oauth/authorize",
    tokenPath: "/oauth/token",
  },
});

let oauthToken = oauth2.createToken(params);
console.log(oauthToken);
