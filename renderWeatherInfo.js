export default async function renderWeatherInfo(weatherData) {
  const location = document.querySelector(".location");
  const date = document.querySelector(".date");
  const weatherIcon = document.querySelector(".weather-icon");
  const tempreture = document.querySelector(".temperature");
  const weather = document.querySelector(".weather");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const rain = document.querySelector(".rain");
  const DATE = new Date(weatherData.days[0].datetime);

  const formattedDate = DATE.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  location.textContent = weatherData.resolvedAddress[0].toUpperCase() + weatherData.resolvedAddress.slice(1);
  date.textContent = formattedDate;
  weatherIcon.src = `./weather-icons/${weatherData.currentConditions.icon}.svg`;
  weatherIcon.style.visibility = "visible";
  tempreture.textContent = `${weatherData.currentConditions.temp} °F`;
  weather.textContent = weatherData.currentConditions.conditions;
  feelsLike.textContent = weatherData.currentConditions.feelslike;
  humidity.textContent = weatherData.currentConditions.humidity;
  wind.textContent = `${weatherData.currentConditions.windspeed} km/h`;
  rain.textContent = `${weatherData.currentConditions.precipprob}%`;
}

