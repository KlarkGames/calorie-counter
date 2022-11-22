import { Calculation } from './calculation.js'

const form = document.querySelector('.counter__form');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const informBlock = document.querySelector('.counter__result');

submitButton.onclick = (evt) => {
    evt.preventDefault();
    Calculation();
    informBlock.classList.remove('counter__result--hidden');
};

const textData = form.querySelectorAll('input[type=text]');

form.onchange = () => {
    resetButton.disabled = false;
    let i = 0;
    while (i < textData.length && textData[i].value != '') i++;
    if (i === textData.length) submitButton.disabled = false;
};

form.onreset = () => {
    resetButton.disabled = true;
    submitButton.disabled = true;
    informBlock.classList.add('counter__result--hidden');
};