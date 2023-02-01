'use strict;'

class Person {
	constructor(name) {
		this.name = name;
	}
}

const factorify = Category => (...args) => new Category(...args);

const p1 = new Person('Nikolay');
console.log(p1);
const personFactory = factorify(Person);
const p2 = personFactory("Nikolay");
console.log(p2);

