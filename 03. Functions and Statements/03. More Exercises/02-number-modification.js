function numberModification(numbers) {
    numbers = String(numbers);

    function averageNumber(numbers) {
        let sum = 0;
        for (let number of numbers) {
            sum += parseInt(number);
        }
        return sum / numbers.length;
    }

    while (averageNumber(numbers) < 5) {
        numbers += "9";
    }
    console.log(numbers);
}

numberModification(101); // 1019999
numberModification(5835); // 5835