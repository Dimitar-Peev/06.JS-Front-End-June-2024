function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

let person = personInfo("Peter", "Pan", "20");
console.log(`firstName: ${person.firstName}\nlastName: ${person.lastName}\nage: ${person.age}`); //
// console.log(personInfo("George", "Smith", "18")); //
person = personInfo("George", "Smith", "18");
console.log(`firstName: ${person.firstName}\nlastName: ${person.lastName}\nage: ${person.age}`); //
