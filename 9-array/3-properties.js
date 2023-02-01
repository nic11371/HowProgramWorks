'use strict';

const person = {
	name: "Marcus",
	city: "Roma",
	born: 121,
};

if ('name' in person) {
	console.dir("Person name is: " + person.name);
}

for (const key in person) {
	const value = person[key];
	console.dir({key, value});
}

const name = "Nikolay";
const city = "Tula";

const person1 = {name: name, city: city};
const person2 = {name, city};

const fieldName = 'city';
const fieldValue = "Tula";
const person3 = {
	name: "Nikolay",
	[fieldName]: fieldValue
};

console.dir({person1});
console.dir({person2});
console.dir({person3});

const person4 = {
	name: "Nikolay",
	['city' + 'born']: fieldValue
};

console.dir({person4});

function fn(s) {
	return s + "Born";
}

const person5 = {
	name: "Nikolay",
	[fn('city')]: fieldValue
};

console.dir({person5});

