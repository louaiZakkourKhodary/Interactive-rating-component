const buttons = document.querySelectorAll('.ratings button');

const submitButton = document.getElementById('submit');

const displayArea = document.querySelector('.thanks');

const beforeThanks = document.querySelector('.before-thanks');

const thanksNote = document.querySelector('.thanks-note');

let selectedButton = null;

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    if (selectedButton) {
      selectedButton.classList.remove('selected');
    }

    button.classList.add('selected');

    selectedButton = button;
  });
});

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  // if there is  selected
  if (selectedButton !== null) {
    // get the value of the number and store it in a variable
    let selectedRating = selectedButton.textContent;
    beforeThanks.style.display = 'none';
    displayArea.style.display = 'block'; // Show the "thanks" section
    thanksNote.innerHTML += `You selected ${selectedRating} out of 5`;
  }
});
