
const calculatorForm = document.querySelector('.calculator-form');
const calculatorResult = document.querySelector('.calculator-result');
const calculatorSelector = document.querySelector('.calculator-operator-selector');

const calculate = (event) => {
    event.preventDefault();

    const formData = new FormData(calculatorForm);
    const firstNumber = parseInt(formData.get('first-number'));
    const secondNumber = parseInt(formData.get('second-number'));
    const selectedOperator = calculatorSelector.value;
    
    let result;

    if (selectedOperator === '+') {
        result = firstNumber + secondNumber;
    } else if (selectedOperator === '-') {
        result = firstNumber - secondNumber;
    } else if (selectedOperator === '*') {
        result = firstNumber * secondNumber;
    } else if (selectedOperator === '/') {
        result = firstNumber / secondNumber;
    }
        
    
    calculatorResult.innerText = result;
};

calculatorForm.addEventListener('submit', calculate);

