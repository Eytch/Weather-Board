import getWeather from './getWeather';

const search = document.querySelector('input');
export const ApiKey = 'c7210b0b3510c04bdec8387543d6d490';

async function getCity() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        !search.value ? 'London' : search.value
      }&units=metric&APPID=${ApiKey}`,
      { mode: 'cors' }
    );
    const weatherCoord = await response.json();
    const lat = weatherCoord.coord.lat;
    const lon = weatherCoord.coord.lon;
    getWeather(lat, lon, weatherCoord);
  } catch (error) {
    alert('ERROR, could not fetch city coord');
  }
}

export default getCity;
