const moment = require('moment');
import { icons_classes } from './Classes';
import removeHourly from './removeHourly';
const hourlySec = document.querySelector('.hourly_all');
const bottom = document.querySelector('.bottom');
const rightSide = document.querySelector('.rightSide');

export default function displayHourly(hourly) {
  if (hourlySec.childNodes.length > 0) {
    removeHourly();
  }
  for (let i = 0; i < hourly.length; i++) {
    const hourDiv = document.createElement('div');
    hourDiv.classList.add('hour');

    const hourTime = document.createElement('p');
    hourTime.classList.add('hour_time');
    const hourTimeText = document.createTextNode(
      `${moment.unix(hourly[i].dt).format('ha')}`
    );
    hourTime.appendChild(hourTimeText);

    const hourIcon = document.createElement('i');
    const weatherIcon = hourly[i].weather[0].main;
    const hourly_icon = icons_classes[`${weatherIcon}`];
    hourIcon.classList.add('bi');
    hourIcon.classList.add(`${hourly_icon}`);
    hourIcon.classList.add('hour_icon');

    const hourDegree = document.createElement('p');
    hourDegree.classList.add('hour_d');
    const hourDegreeText = document.createTextNode(
      `${Math.round(hourly[i].temp)}°`
    );
    hourDegree.appendChild(hourDegreeText);

    hourlySec.append(hourDiv);
    hourDiv.append(hourTime);
    hourDiv.append(hourIcon);
    hourDiv.append(hourDegree);
  }

  bottom.style.visibility = 'visible';
  rightSide.style.visibility = 'visible';
  bottom.style.transition = 'opacity 1s ease';
  rightSide.style.transition = 'opacity 1s ease';

  setInterval(() => {
    bottom.style.opacity = '1';
  }, 1000);

  setInterval(() => {
    rightSide.style.opacity = '1';
  }, 1000);
}
