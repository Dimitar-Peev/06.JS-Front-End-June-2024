function radioCrystals(input) {
    const targetThickness = input[0];

    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return crystal * 0.8;
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    function xray(crystal) {
        return crystal + 1;
    }

    function transportAndWash(crystal) {
        return Math.floor(crystal);
    }

    for (let i = 1; i < input.length; i++) {
        let thickness = input[i];
        console.log(`Processing chunk ${thickness} microns`);

        const operations = [
            {name: 'Cut', operation: cut},
            {name: 'Lap', operation: lap},
            {name: 'Grind', operation: grind},
            {name: 'Etch', operation: etch}
        ];

        for (const {name, operation} of operations) {
            let count = 0;
            while (operation(thickness) >= targetThickness || Math.floor(operation(thickness)) + 1 === targetThickness) {
                thickness = operation(thickness);
                count++;
            }
            if (count > 0) {
                console.log(`${name} x${count}`);
                thickness = transportAndWash(thickness);
                console.log("Transporting and washing");
            }
        }

        if (thickness + 1 === targetThickness) {
            thickness = xray(thickness);
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${thickness} microns`);
    }
}

radioCrystals([1375, 50000]);
// Processing chunk 50000 microns
// Cut x2
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x11
// Transporting and washing
// Etch x3
// Transporting and washing
// X-ray x1
// Finished crystal 1375 microns

radioCrystals([1000, 4000, 8100]);
// Processing chunk 4000 microns
// Cut x1
// Transporting and washing
// Finished crystal 1000 microns
// Processing chunk 8100 microns
// Cut x1
// Transporting and washing
// Lap x3
// Transporting and washing
// Grind x1
// Transporting and washing
// Etch x8
// Transporting and washing
// Finished crystal 1000 microns