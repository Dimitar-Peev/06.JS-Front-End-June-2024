function createListOfEmployees(array) {
    array.forEach((employee) => {
        const employeeName = employee;
        const personalNumber = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
    });
}

createListOfEmployees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18

createListOfEmployees([
    "Samuel Jackson",
    "Will Smith",
    "Bruce Willis",
    "Tom Holland",
]);
// Name: Samuel Jackson -- Personal Number: 14
// Name: Will Smith -- Personal Number: 10
// Name: Bruce Willis -- Personal Number: 12
// Name: Tom Holland -- Personal Number: 11
