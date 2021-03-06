// arguments object - no longer bound

const add = function (a, b) {
	console.log(arguments);
	return a + b;
};

const addArrow = (a, b) => {
	//console.log(arguments);
	return a + b;
};

/*
console.log(add(55, 1, 1001));
console.log(addArrow(55, 1, 1001));
*/

// this - no longer bound
const user = {
	name: 'Gasha',
	cities: ['Sarajevo', 'Beograd'],
	printPlacesLived() {
		const cityMessages = this.cities.map((city) => `${this.name} has lived in ${city}`);

		return cityMessages;
	}
};

console.log(user.printPlacesLived());


// challenge

const multiplier = {
	numbers: [1, 2, 3, 4],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());


