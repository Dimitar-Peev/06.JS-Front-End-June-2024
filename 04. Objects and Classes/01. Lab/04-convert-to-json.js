function convertJSON(name, lastName, hairColor) {
	let person = {
		name,
		lastName,
		hairColor,
	};
	console.log(JSON.stringify(person));
}

convertJSON("George", "Jones", "Brown"); // {"name":"George","lastName":"Jones","hairColor":"Brown"}
convertJSON("Peter", "Smith", "Blond"); // {"name":"Peter","lastName":"Smith","hairColor":"Blond"}
