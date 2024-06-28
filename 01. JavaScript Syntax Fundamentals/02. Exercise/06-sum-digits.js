function sumDigits(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString.charAt(i));
    }

    console.log(sum);
}
