const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  let query = breedName.toLowerCase().slice(0, 3);
  url += query;
  request(url, function(error, response, body) {
    if (error) {
      callback(error.code, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        let error = "Breed does not exist, try a real cat";
        callback(error, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };





