'use strict';

// arguments object - no longer bound

var add = function add(a, b) {
	console.log(arguments);
	return a + b;
};

var addArrow = function addArrow(a, b) {
	//console.log(arguments);
	return a + b;
};

/*
console.log(add(55, 1, 1001));
console.log(addArrow(55, 1, 1001));
*/

// this - no longer bound
var user = {
	name: 'Gasha',
	cities: ['Sarajevo', 'Beograd'],
	printPlacesLived: function printPlacesLived() {
		var self = this;

		this.cities.forEach(function (city) {
			console.log(self.name + ' has lived in ' + city);
		});
	}
};

user.printPlacesLived();
