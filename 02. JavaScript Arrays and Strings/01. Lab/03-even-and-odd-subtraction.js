function calcDifference(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i])
        const result = number % 2 === 0 ? evenSum += number :  oddSum += number;
    }

    console.log(evenSum - oddSum);
}

calcDifference([1, 2, 3, 4, 5, 6]); // 3
calcDifference([3, 5, 7, 9]); // -24
calcDifference([2, 4, 6, 8, 10]); // 30