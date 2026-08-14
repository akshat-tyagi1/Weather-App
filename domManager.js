import fetchAPI from "./fetchAPI.js";

const weatherData = await fetchAPI("Greater Noida");

console.log(weatherData);

function renderWeatherInfo(city) {
  const location = document.querySelector(".location");
  const date = document.querySelector(".date");
  const tempreture = document.querySelector(".temperature");
  const weather = document.querySelector(".weather");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const rain = document.querySelector(".rain");
  const date = new Date(weatherData.days[0].datetime);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  location.textContent = weatherData.resolvedAddress;
  date.textContent = formattedDate;
}
