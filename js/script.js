import './calculation.js'
/*
Состояние по умолчанию
Выбран мужской пол.
В полях ввода стоит 0.
Выбрана «минимальная» физическая активность.
Кнопка «Рассчитать» неактивна.
Кнопка сброса данных из полей ввода неактивна.
Блок с выводом информации о калориях скрыт.
*/
const form = document.querySelector('.counter__form');
const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
/*
Кнопка «Рассчитать»
Становится активна только когда заполнены все поля ввода.
По клику на кнопку появляется блок с информацией о калориях, если до этого он не был показан. Если блок уже находится на странице, клик по кнопке обновляет расчёты, выводится актуальная информация.
*/
submitButton.onclick = (evt) => {
    evt.preventDefault();
};

/*
Кнопка «Очистить поля и расчёт»
Становится активна, когда хотя бы одно числовое поле заполнено.
При клике все элементы приложения сбрасываются до состояния по умолчанию: числовые поля очищаются (плейсхолдер 0), пол становится мужской, физическая активность «минимальная», блок с информацией о калориях скрывается.
*/
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
};