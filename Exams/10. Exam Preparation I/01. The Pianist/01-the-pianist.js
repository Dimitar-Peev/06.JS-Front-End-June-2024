function pianist(inputArr) {
    let n = Number(inputArr.shift());
    let piecesMap = {};

    while (n-- > 0) {
        const piecesInfo = inputArr.shift();

        const [piece, composer, key] = piecesInfo.split("|");

        piecesMap[piece] = {composer, key};
    }

    let inputLine = inputArr.shift();
    while (inputLine !== "Stop") {
        const commandArray = inputLine.split("|");
        const command = commandArray.shift();
        const piece = commandArray.shift();

        switch (command) {
            case"Add":
                const composer = commandArray.shift();
                const key = commandArray.shift();

                if (!piecesMap.hasOwnProperty(piece)) {
                    piecesMap[piece] = {composer, key};
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                } else {
                    console.log(`${piece} is already in the collection!`)
                }
                break;
            case"Remove":
                if (piecesMap.hasOwnProperty(piece)) {
                    delete piecesMap[piece];
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
            case"ChangeKey":
                const newKey = commandArray.shift();
                if (piecesMap.hasOwnProperty(piece)) {
                    piecesMap[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }

        inputLine = inputArr.shift();
    }

    for (const pieceKey in piecesMap) {
        console.log(`${pieceKey} -> Composer: ${piecesMap[pieceKey].composer}, Key: ${piecesMap[pieceKey].key}`);
    }

}

pianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);

pianist([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
);