export default async function fetchAPI(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=KX7VN9PGJRTGMF7ZUZ6V6YWGG`,
    );

    if (!response.ok) {
      throw new Error(`Something happened`);
    }

    const weatherData = response.json();

    return weatherData;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

// fetchAPI("Greater Noida").then((data) => {
//   console.log(data);
// });
