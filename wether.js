const axios = require('axios');
const params = {
  access_key: '45da7d66fa9933948d938730d07299f9',
  query: 'New York'
}

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });