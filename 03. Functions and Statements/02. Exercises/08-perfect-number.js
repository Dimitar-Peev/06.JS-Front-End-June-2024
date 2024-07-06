function checkPerfectNumber(n) {
	let sum = 0;

	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}

	console.log(sum === n ? "We have a perfect number" : "It's not so perfect");
}

checkPerfectNumber(6); // We have a perfect number!
checkPerfectNumber(28); // We have a perfect number!
checkPerfectNumber(1236498); // It's not so perfect.
