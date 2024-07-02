function revealWords(words, string) {
    words = words.split(", ")

    for (const word of words) {
        string = string.replace("*".repeat(word.length), word)
    }

    console.log(string)
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages') // softuni is great place for learning new programming languages