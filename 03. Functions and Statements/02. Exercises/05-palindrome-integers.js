function isPalindrome(array) {
	function isEqual(num) {
		let numAsString = num.toString();
		let reversedNum = numAsString.split("").reverse().join("");
		return numAsString === reversedNum;
	}

	for (const number of array) {
		console.log(isEqual(number));
	}
}

isPalindrome([123, 323, 421, 121]);
// false
// true
// false
// true
isPalindrome([32, 2, 232, 1010]);
// false
// true
// true
// false
