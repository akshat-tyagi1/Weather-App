import { API_KEY } from "./config.js";

export default async function fetchAPI(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`Something happened`);
    }

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.error("Something went wrong:", error);
    return null;
  }
}
