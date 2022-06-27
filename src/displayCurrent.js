const moment = require('moment');

export default function displayCurrent(current) {
  const feelsLike = document.querySelector('.current_fl');
  feelsLike.innerHTML = `${Math.round(current.feels_like)}°`;

  const humidity = document.querySelector('.current_h');
  humidity.innerHTML = `${current.humidity}%`;

  if (current.hasOwnProperty('rain')) {
    const chanceRainDisplay = document.querySelector('.chance_rain');
    const chanceRain = document.querySelector('.current_cor');
    chanceRain.innerHTML = `${current.rain[`1h`]}hr`;
  }

  const sunRise = document.querySelector('.current_sr');
  sunRise.innerHTML = `${moment.unix(current.sunrise).format('LT')}`;

  const sunSet = document.querySelector('.current_ss');
  sunSet.innerHTML = `${moment.unix(current.sunset).format('LT')}`;

  const visibility = document.querySelector('.current_v');
  visibility.innerHTML = `${current.visibility / 1000} KM`;

  const wind = document.querySelector('.current_w');
  wind.innerHTML = `${current.wind_speed} KM`;

  const pressure = document.querySelector('.current_pre');
  pressure.innerHTML = `${current.pressure} hPa`;
}
