function calculator(firstNum, operator, secondNum) {
    let result = 0;

    switch (operator) {
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "/": result = firstNum / secondNum; break;
        case "*": result = firstNum * secondNum; break;
    }

    console.log(result.toFixed(2));
}

calculator(5, "+", 10); // 15.00
calculator(25.5, "-", 3); // 22.50