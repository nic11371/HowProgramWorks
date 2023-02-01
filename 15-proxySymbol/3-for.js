'use strict;'

const symbol1 = Symbol.for('name');
const symbol2 = Symbol.for('name');
if(symbol1 === symbol2) {
	console.log('OK');
	
}

console.log(symbol1);
console.log(Symbol('name'));
console.log(Symbol.for('name'));
console.log(Symbol('name') === Symbol.for('name'));
console.log(Symbol.for('name') === Symbol.for('name'));

const symbol3 = Symbol('name2');
console.log(Symbol.keyFor(symbol1));
console.log(Symbol.keyFor(symbol3));

console.log(symbol1[Symbol.toPrimitive]());





