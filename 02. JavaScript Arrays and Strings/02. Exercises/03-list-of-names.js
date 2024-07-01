function sortAndPrintArray(array) {
    array.sort((a, b) => {
        return a.localeCompare(b)
    })

    let index = 1;
    for (const arrayElement of array) {
        console.log(`${index++}.${arrayElement}`)
    }
}

sortAndPrintArray(["John", "Bob", "Christina", "Ema"]);
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
