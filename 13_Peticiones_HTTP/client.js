const request = require('request');

const getPokemonByName = (name) =>{
    request.get(`https://pokeapi.co/api/v2/pokemon/${name}`, function (error, response, body) {

  if (response.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json.abilities);
  }else {
      console.log('Ocurrio un error en la peticion...');
  }
});
}

getPokemonByName("porygon");

/* request('https://pokeapi.co/api/v2/pokemon/ditto', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  if (response.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json);
  }else {
      console.log('Ocurrio un error en la peticion...');
  }
}); */