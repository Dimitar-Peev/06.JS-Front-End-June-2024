function printSubstring(string, start, count) {
	let result = string.substring(start, start + count);
	console.log(result);
}

printSubstring("ASentence", 1, 8); // Sentence
printSubstring("SkipWord", 4, 7); // Word
