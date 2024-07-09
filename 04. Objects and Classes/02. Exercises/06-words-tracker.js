function sortDescendingByCount(array) {
    let givenWords = array.shift().split(" ");

    let occurrences = {};

    givenWords.forEach((word) => {
        occurrences[word] = 0;

        array.forEach((element) => {
            if (word === element) {
                occurrences[word] += 1;
            }
        });
    });

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}

sortDescendingByCount([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
// this - 3
// sentence - 2

sortDescendingByCount([
    "is the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "the",
    "And",
    "finally",
    "the",
    "the",
    "sentence",
]);
// the – 3
// is - 1
