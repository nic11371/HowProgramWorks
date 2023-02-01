'use strict;'

class A {}
class B {}

const obj = {
	field: 'Value',
	subObject: {
		arr: [2, 3, 5, 9],
		fn: x => x / 2
	},
	k1: new A(),
	k2: new B()
}

const s = JSON.stringify(obj);
console.log(s);
const obj2 = JSON.parse(s);
console.log(obj2);


