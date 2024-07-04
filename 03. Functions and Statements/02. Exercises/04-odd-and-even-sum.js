function calculate(number) {
	let numberAsString = String(number);
	let evenSum = 0;
	let oddSum = 0;

	for (let i = 0; i < numberAsString.length; i++) {
		let number = Number(numberAsString[i]);
		const result = number % 2 === 0 ? (evenSum += number) : (oddSum += number);
	}

	console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

calculate(1000435); //  Odd sum = 9, Even sum = 4
calculate(3495892137259234); // Odd sum = 54, Even sum = 22
