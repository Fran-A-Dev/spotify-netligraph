const { getSecrets } = require("@netlify/functions");

async function handler(event, context) {
  const secrets = await getSecrets(event);

  if (secrets.spotify) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ready: secrets.spotify.isLoggedIn }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Could not get Spotify information." }),
    };
  }
}

exports.handler = handler;
