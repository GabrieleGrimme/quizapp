console.clear();

const buttons = document.querySelectorAll('.card__button');
const answerTexts = document.querySelectorAll('.card__answer');


/*
buttons.eventListener('click', () => {
  answerTexts.classList.toggle('hidden');
})
*/

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
  answerTexts[index].classList.toggle('hidden')
  })
})
