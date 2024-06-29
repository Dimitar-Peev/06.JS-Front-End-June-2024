function censoredWords(text, word) {
    let censored = "*".repeat(word.length);

    let censoredText = text.replaceAll(word, censored);

    console.log(censoredText);
}

censoredWords("A small sentence with some words", "small"); // A ***** sentence with some words
censoredWords("Find the hidden word", "hidden"); // Find the ****** word