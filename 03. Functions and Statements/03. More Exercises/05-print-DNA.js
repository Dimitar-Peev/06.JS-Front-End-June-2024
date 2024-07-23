function printDNASequence(rows) {
    const pattern = [
        ["A", "T"],
        ["C", "G"],
        ["T", "T"],
        ["A", "G"],
        ["G", "G"],
    ];

    for (let i = 0; i < rows; i++) {
        const [x, y] = pattern[i % pattern.length];

        if (i % 4 === 0) {
            console.log(`**${x}${y}**`);
        } else if (i % 2 === 1) {
            console.log(`*${x}--${y}*`);
        } else if (i % 2 === 0) {
            console.log(`${x}----${y}`);
        }
    }
}

printDNASequence(4);
// **AT**
// *C--G*
// T----T
// *A--G*

console.log("=".repeat(10));

printDNASequence(10);
// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*