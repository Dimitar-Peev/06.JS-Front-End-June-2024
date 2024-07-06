function calculate(n1, n2) {
	let result = findFactorial(n1) / findFactorial(n2);
	console.log(result.toFixed(2));

	function findFactorial(num) {
		let factorial = 1;

		for (let i = 1; i <= num; i++) {
			factorial *= i;
		}

		return factorial;
	}
}

calculate(5, 2); // 60.00
calculate(6, 2); // 360.00
