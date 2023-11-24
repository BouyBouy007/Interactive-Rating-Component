let ratingNumber;

export function getNumber(value) {
  ratingNumber = value;
  localStorage.setItem('ratingNumber', ratingNumber);
}

export function displayMessage() {
  ratingNumber = localStorage.getItem('ratingNumber');
  if(ratingNumber) {
    document.querySelector('.selected-rating-message')
      .innerHTML = `You selected ${ratingNumber} out of 5`;
  }
}