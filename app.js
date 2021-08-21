const calculateBtn = document.querySelector('#calculateBtn');
const salaryInput = document.querySelector('#salary');

const grossItemValue = document.querySelector('#grossSalary');
const casItemValue = document.querySelector('#cas');
const cassItemValue = document.querySelector('#cass');
const netItemValue = document.querySelector('#netSalary');

const barGreen = document.querySelector('.bar-green');
const barRed = document.querySelector('.bar-red');

const salaryDetails = document.querySelector('.salary-details');

calculateBtn.addEventListener('click', () => {
  const grossSalaryValue = Number(salaryInput.value);

  salaryDetails.style.display = 'none';

  if(isValidInput(grossSalaryValue)) {
    const casValue = Math.round(0.25 * grossSalaryValue);
    const cassValue = Math.round(0.10 * grossSalaryValue);
    const netSalaryValue = grossSalaryValue - casValue - cassValue;

    grossItemValue.innerText = `${grossSalaryValue} RON`;
    casItemValue.innerText = `${casValue} RON`;
    cassItemValue.innerText = `${cassValue} RON`;
    netItemValue.innerText = `${netSalaryValue} RON`;

    const netSalaryPercent = Math.round(netSalaryValue * 100 / grossSalaryValue);
    const taxesPercent = Math.round((casValue + cassValue) * 100 / grossSalaryValue);

    barGreen.style.width = `${netSalaryPercent}%`;
    barGreen.innerText = `${netSalaryValue} RON`;
    barRed.style.width = `${taxesPercent}%`;
    barRed.innerText = `${casValue + cassValue} RON`;

    salaryDetails.style.display = 'block';
  }
});

function isValidInput(value) {
  if(value === 0) {
    setError('Trebuie sa introduci o valoare mai mare decat 0');
    return false;
  }
  if(!Number.isInteger(value)) {
    setError('Valoarea introdusa trebuie sa fie un numar intreg');
    return false;
  }
  setError('');
  return true;
}

function setError(message) {
  const errorContainer = document.querySelector('.error-message');
  if(message === '') {
    errorContainer.style.display = 'none';
  } else {
    errorContainer.innerText = message;
    errorContainer.style.display = 'block';
  }
}