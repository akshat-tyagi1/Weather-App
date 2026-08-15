import renderWeatherInfo from "./renderWeatherInfo.js";
import fetchAPI from "./fetchAPI.js";

let weatherData = null;
let isCelsius = false;

function changeTempUnit(temp) {
  const tempreture = document.querySelector(".temperature");

  if (!isCelsius) {
    tempreture.textContent = `${(((temp - 32) * 5) / 9).toFixed(1)} °C`;
    isCelsius = true;
  } else {
    tempreture.textContent = `${temp} °F`;
    isCelsius = false;
  }
}

document
  .querySelector(".header-container")
  .addEventListener("click", async (event) => {
    if (event.target.classList.contains("search-btn")) {
      const city = document.querySelector("#search").value;

      if (city === "") return;

      weatherData = await fetchAPI(city);

      if (weatherData === null) return;
      isCelsius = false;
      renderWeatherInfo(weatherData);
    } else if (event.target.classList.contains("unit")) {
      if (weatherData === null) return;

      changeTempUnit(weatherData.currentConditions.temp);
    }
  });

document.querySelector("body").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.querySelector(".search-btn").click();
  }
});
