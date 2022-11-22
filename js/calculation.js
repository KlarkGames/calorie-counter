const ACTIVITY_COEFFICIENTS = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9,
};

const ADD_WEIGHT = 0.15;
const LOSE_WEIGHT = -0.15;

const form = document.querySelector('.counter__form');

const CalculationNorm = function () {
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const age = form.querySelector('input[name="age"]').value;
    const height = form.querySelector('input[name="height"]').value;
    const weight = form.querySelector('input[name="weight"]').value;
    const activity = form.querySelector('input[name="activity"]:checked').value;
    
    let n;
    if (gender === 'male') {
        n = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5;
    } else {
        n = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;
    }
    return ACTIVITY_COEFFICIENTS[activity] * n;
};

const Calculation = function () {
    const keep = CalculationNorm();
    document.querySelector('#calories-norm').textContent = Math.round(keep);
    document.querySelector('#calories-minimal').textContent = Math.round(keep * (1 + LOSE_WEIGHT));
    document.querySelector('#calories-maximal').textContent = Math.round(keep * (1 + ADD_WEIGHT));
};

export {Calculation};