function signCheck(n1, n2, n3) {
	const result = n1 * n2 * n3;
	const output = result >= 0 ? "Positive" : "Negative";
	console.log(output);
}

signCheck(5, 12, -15); // Negative
signCheck(-6, -12, 14); // Positive
signCheck(-1, -2, -3); // Negative
signCheck(-5, 1, 1); // Negative
