'use strict;'

const person = {name: 'Nikolay', age: 31};

person[Symbol.toPrimitive] = function(hint) {
console.log(hint);
const type = {
	number: () => this.age,
	string: () => this.name,
	default: () => JSON.stringify(person)
}
return type[hint]()
}

Object.getOwnPropertySymbols(person, Symbol.toPrimitive, {
	enumerable: false,
	configurable: false
})

console.log(+person);
console.log(`${person}`);
console.log(person + '');


