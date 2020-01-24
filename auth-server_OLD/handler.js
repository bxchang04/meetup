'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=3dssascu6mej4fuptij43jdbh4'
    + '&client_secret=v1A/UF3x+u2vzYrj5AsIS5frj+Z9gmdPCgd6qSsy'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://bxchang04.github.io/meetup'
    + '&code=5f611a77f6f9b64652a8567d53a02f01';
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
