// console.log('Starting')

// setTimeout(() => {
//  console.log('2 Second Timer')
// }, 2000)
// console.log('Stopping')

const request = require('request')
const url =
'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
request({ url: url }, (error, response) => {
 // Parse the response body from JSON string into JavaScript object
 const data = JSON.parse(response.body)
 // Will print the current temperature to the console
 console.log(data.currently.temperature);
})