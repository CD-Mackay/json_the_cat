const request = require('request');
const breedName = process.argv.slice(2);
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let query = breedName.join("").toLowerCase().slice(0, 3);
url += query;
console.log(url);

request(url, function(error, response, body) {
  const data = JSON.parse(body);
  if (data.length == 0) {
    console.log("The breed does not exist");
    return;
  }
  if (error) {
     return error;
  } else {
    console.log(data[0].description)
  }
});




// request('https://api.thecatapi.com/v1/breeds/search?q=sib', function(error, response, body) {
//   const data = JSON.parse(body);
//   console.log(data[0].description);
//   console.log(typeof data);
// })