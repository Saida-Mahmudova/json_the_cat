const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log("Error occured:", error);
    }
    const data = JSON.parse(body);
    const breedBody = data[0];
    if (breedBody) {
      callback(null, data[0].description);
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };