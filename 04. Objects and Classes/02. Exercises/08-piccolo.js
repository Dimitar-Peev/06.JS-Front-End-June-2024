function sortAscendingByNumber(array) {
    const parkingLot = [];

    for (const car of array) {
        let [direction, number] = car.split(", ");

        if (direction === "IN" && !parkingLot.includes(number)) {
            parkingLot.push(number);
        } else if (direction === "OUT" && parkingLot.includes(number)) {
            let index = parkingLot.indexOf(number);
            parkingLot.splice(index, 1);
        }
    }

    if (parkingLot.length > 0) {
        let sortedNumbers = parkingLot.sort((a, b) => a.localeCompare(b));
        sortedNumbers.forEach((n) => console.log(n));
    } else {
        console.log("Parking Lot is Empty");
    }
}

sortAscendingByNumber([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT

sortAscendingByNumber([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "OUT, CA1234TA",
]); // Parking Lot is Empty
