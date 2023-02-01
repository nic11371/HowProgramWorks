'use strict;'

const symbol1 = Symbol();
console.log('Type ' + typeof symbol1);

const obj1 = {
	name: 'Nikolay',
	// eslint-disable-next-line no-dupe-keys
	name: 'Melnikov',
	[Symbol('name')]: 'Nikolay',
	[Symbol('name')]: 'Melnikov',
	[Symbol('name')]: Symbol('value')
}

const key = Symbol('name');
obj1[key] = 'Alex';
console.log(obj1[key]);
console.log(obj1);

console.log(typeof obj1);

console.log({keys: Object.keys(obj1)});
for(const key in obj1) {
	console.log(key);
	console.log(obj1[key]);
	
	
}



