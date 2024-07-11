function calc() {
    // const firstNumberElementRef = document.getElementById("num1");
    // const firstNumberValue = firstNumberElementRef.value;
    // const firstNumberAsNum = Number(firstNumberValue);

    const firstNum = Number(document.getElementById("num1").value);
    const secondNum = Number(document.getElementById("num2").value);

    document.getElementById("sum").value = firstNum + secondNum;
}
