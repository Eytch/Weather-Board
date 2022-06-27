const moment = require('moment');
const dayName = document.querySelectorAll('.day_name');
const dayHighLow = document.querySelectorAll('.day_hl');
const dayIcon = document.querySelectorAll('.day_icon');
import icons from './Classes';

export default function displayDaily(daily) {
  for (let i = 0; i < 7; i++) {
    const day = moment.unix(daily[i].dt).format('dddd');
    dayName[i].innerHTML = `${day}`;
    const weatherIcon = daily[i].weather[0].main;
    dayIcon[i].innerHTML = `${icons[`${weatherIcon}`]}`;
    dayHighLow[i].innerHTML = `${Math.round(daily[i].temp.max)}° ${Math.round(
      daily[i].temp.min
    )}°`;
  }
}
