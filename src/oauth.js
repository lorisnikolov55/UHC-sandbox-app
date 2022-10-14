const config = {
    client: {
      id: 'ad7331f7-7cea-42b5-931a-85b115340836',
      secret: '61914843-fc60-4eec-9cfd-13fc2935b083'
    },
    auth: {
      tokenHost: 'https://sandbox.authz.flex.optum.com/oauth/token'
    }
  };
   
  const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');
  
  async function run() {
    const client = new AuthorizationCode(config);
   
    const authorizationUri = client.authorizeURL({
      redirect_uri: 'https://sandbox.authz.flex.optum.com/oauth/authorize',
      scope: 'patient/Patient.read',
      state: '1234zyx'
    });
   
    // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    res.redirect(authorizationUri);
     
    const tokenParams = {
      code: 'AuthorizationCode',
      redirect_uri: 'https://lorisnikolov55.github.io/UHC-sandbox-app/patient.html',
      scope: 'patient/Patient.read',
    };
   
    try {
      const accessToken = await client.getToken(tokenParams);
    } catch (error) {
      console.log('Access Token Error', error.message);
    }
  }
   
  run();
