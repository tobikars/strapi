const request = require('request');

const options = {
  uri: 'http://localhost:1337',
  method: 'POST',
  json: {
      "username":"tobikars",
      "password":"test123",
      "passwordConfirmation":"test123",
      "email":"test@test.com"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
});