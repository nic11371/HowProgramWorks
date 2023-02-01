'use strict;'

const data = {name: 'Nikolay', city: 'Tula', born: '1991'};

const person = new Proxy(data, {
	// eslint-disable-next-line no-unused-vars
	deleteProperty(obj, key) {
		return true
	} 
	
})

console.log(person);
delete person.name;
console.log(person);
