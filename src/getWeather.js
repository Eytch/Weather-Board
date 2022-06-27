import displayWeather from './display';
import displayCurrent from './displayCurrent';
import displayDaily from './displayDaily';
import displayHourly from './displayHourly';
import getCity from './getCity';
import { ApiKey } from './getCity';

async function getWeather(lat, lon, weatherCoord) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`
    );
    const weatherData = await response.json();
    displayWeather(weatherData, weatherCoord);
    displayCurrent(weatherData.current);
    displayDaily(weatherData.daily);
    displayHourly(weatherData.hourly);
  } catch (error) {
    alert('ERROR, Fetching Weather Data');
  }
}

export default getWeather;
