import getCity from './getCity';
import './styles/main.scss';

const form = document.querySelector('form');
const github = document.querySelector('.github');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getCity();
  form.reset();
});

github.addEventListener('click', () => {
  window.open('https://github.com/Eytch', '_blank');
});

getCity();
