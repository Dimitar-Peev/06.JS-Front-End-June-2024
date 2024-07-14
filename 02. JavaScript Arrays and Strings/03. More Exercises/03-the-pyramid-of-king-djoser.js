function solve(base, increment) {
    let [marble, stone, lapis, gold, height, i] = [0, 0, 0, 0, 0, 1];

    while (base > 0) {
        if (base - 2 > 0) {
            stone += (base - 2) ** 2 * increment;
            if (i % 5) {
                marble += (base * 4 - 4) * increment;
            } else {
                lapis += (base * 4 - 4) * increment;
            }
        } else {
            gold += base * base * increment;
            break;
        }
        base -= 2;
        i++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}
Marble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapis)}
Gold required: ${Math.ceil(gold)}
Final pyramid height: ${Math.floor(i * increment)}`);
}

solve(11, 1);
// Stone required: 124
// Marble required: 84
// Lapis Lazuli required: 6
// Gold required: 1
// Final pyramid height: 4

solve(11,0.75);
solve(12,1);
solve(23,0.5);