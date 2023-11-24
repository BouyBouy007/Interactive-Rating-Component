import {getNumber} from './message.js';

const ratingButtons = document.querySelectorAll('.js-rating-button');
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener('click', () => {
    ratingButtons.forEach((button) => {
      button.classList.remove('activate-rating-button');
    });
    ratingButton.classList.add('activate-rating-button');
    const ratingNumber = ratingButton.innerHTML;
    getNumber(ratingNumber);
  });
});