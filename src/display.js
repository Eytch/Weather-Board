const moment = require('moment');
import toTitleCase from './Functions';
import icons from './Classes';

export default function displayWeather(weatherData, weatherCoord) {
  const cityDate = document.querySelector('.city_date');
  cityDate.innerHTML = moment().format('LT | dddd  ll');

  const temp = document.querySelector('.degree_text');
  temp.innerHTML = `${Math.round(weatherData.current.temp)}°`;

  const cityName = document.querySelector('.city_name');
  cityName.innerHTML = `${weatherCoord.name}, ${weatherCoord.sys.country}`;

  const currentHighLow = document.querySelector('.HighLow_text');
  currentHighLow.innerHTML = `H:${Math.round(
    weatherData.daily[0].temp.max
  )}, L:${Math.round(weatherData.daily[0].temp.min)}`;

  const weatherIcon = weatherData.current.weather[0].main;

  const condName = document.querySelector('.cond_name');
  condName.innerHTML = `${toTitleCase(
    weatherData.current.weather[0].description
  )} ${icons[`${weatherIcon}`]}`;

  const condAlert = document.querySelector('.cond_alert');
  if (weatherData.hasOwnProperty('alerts')) {
    const alert = weatherData.alerts[0].event;
    condAlert.innerHTML = `<i class="bi bi-info-circle-fill cond_alert_icon"></i>${alert}`;
    condAlert.style.display = 'block';
  } else {
    condAlert.style.display = 'none';
    condAlert.innerHTML = '';
  }

  const bgImage = document.querySelector('body');
  bgImage.className = '';
  bgImage.classList.add(`wp_${weatherIcon}`);
}
