function getAddress(input) {
    const addressBook = {};

    for (const person of input) {
        const [name, address] = person.split(":");
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);
    const sortedPeople = sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

getAddress([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
]);
// Bill -> Ornery Rd
// Peter -> Carlyle Ave
// Tim -> Doe Crossing

getAddress([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
]);
// Bill -> Gateway Way
// Bob -> Redwing Ave
// George -> Mesta Crossing
// Jeff -> Huxley Rd
// John -> Grover Rd
// Peter -> Huxley Rd
// Ted -> Gateway Way
