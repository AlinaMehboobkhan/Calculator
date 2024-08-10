let result = document.querySelector('.result');
let currentNum = '';
let previousNum = '';
let operator = '';

document.querySelectorAll('.num-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentNum += button.value;
        result.innerHTML = currentNum;
    });
});

document.querySelectorAll('.op-btn').forEach(button => {
    button.addEventListener('click', () => {
        previousNum = currentNum;
        currentNum = '';
        operator = button.value;
        result.innerHTML = operator;
    });
});

document.querySelector('.dec-btn').addEventListener('click', () => {
    if (!currentNum.includes('.')) {
        currentNum += '.';
        result.innerHTML = currentNum;
    }
});

document.querySelector('.eq-btn').addEventListener('click', () => {
    let num1 = Number(previousNum);
    let num2 = Number(currentNum);

    switch (operator) {
        case '+':
            result.innerHTML = num1 + num2;
            break;
        case '-':
            result.innerHTML = num1 - num2;
            break;
        case '*':
            result.innerHTML = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result.innerHTML = 'Cannot divide by zero';
                return;
            }
            result.innerHTML = num1 / num2;
            break;
    }
    previousNum = '';
    currentNum = result.innerHTML;
});

document.querySelector('.clear-btn').addEventListener('click', () => {
    currentNum = '';
    previousNum = '';
    operator = '';
    result.innerHTML = '0';
});


