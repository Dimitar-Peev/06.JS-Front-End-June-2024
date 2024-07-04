function printCharacters(char1, char2) {
	let result = [];
	let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
	let end = Math.max(char1.charCodeAt(), char2.charCodeAt());

	for (let index = start + 1; index < end; index++) {
		const element = String.fromCharCode(index);
		result.push(element);
	}

	console.log(result.join(" "));
}

printCharacters("a", "d"); // b c
printCharacters("#", ":"); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
printCharacters("C", "#"); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
