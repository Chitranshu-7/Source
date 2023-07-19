// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/search/',
//   params: {
//     q: '<REQUIRED>',
//     type: 'multi',
//     offset: '0',
//     limit: '10',
//     numberOfTopResults: '5'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b7b7d99b0emsh0ed7e3a0b27872bp196e35jsnbc588b734a52',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };


// try {
// 	const response =  axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/arjitsingh',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': 'b7b7d99b0emsh0ed7e3a0b27872bp196e35jsnbc588b734a52',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
