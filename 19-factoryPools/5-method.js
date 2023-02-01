'use strict;'

class Person {
	constructor(name) {
		this.name = name;
	}
	static factory(name) {
	return new Person(name);
	}
}

const p1 = new Person("Nikolay");
const p2 = Person.factory("Nikolay")
console.log(p1);
console.log(p2);

