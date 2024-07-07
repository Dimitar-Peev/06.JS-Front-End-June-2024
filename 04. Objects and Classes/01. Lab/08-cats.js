function getCats(array) {
	let cats = [];

	class Cat {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		meow() {
			console.log(`${this.name}, age ${this.age} says Meow`);
		}
	}

	for (let i = 0; i < array.length; i++) {
		const catData = array[i].split(" ");
		const name = catData[0];
		const age = catData[1];
		const newCat = new Cat(name, age);
		cats.push(newCat);
	}

	for (const cat of cats) {
		cat.meow();
	}
}

getCats(["Mellow 2", "Tom 5"]);
// Mellow, age 2 says Meow
// Tom, age 5 says Meow
getCats(["Candy 1", "Poppy 3", "Nyx 2"]);
// Candy, age 1 says Meow
// Poppy, age 3 says Meow
// Nyx, age 2 says Meow
