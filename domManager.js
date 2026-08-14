import fetchAPI from "./fetchAPI.js";

const weatherData = await fetchAPI("Greater Noida");

console.log(weatherData);


