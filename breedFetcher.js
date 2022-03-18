const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Error occured:", error);
  }
  const data = JSON.parse(body);
  const breedBody = data[0];
  if (breedBody) {
    console.log(data[0].description);
  } else {
    console.log("Breed is not found");
  }
});