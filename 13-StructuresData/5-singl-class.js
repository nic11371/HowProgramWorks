'use strict;'

class List {
	constructor() {
		this.last = null
	}
	push(data) {
		const element = {prev: this.last, data};
		this.last = element;
		return element
	}
}

const obj1 = {name: 'first'}
const obj2 = {name: 'second'}
const obj3 = {name: 'third'}

const l1 = new List();
l1.push(obj1);
l1.push(obj2);
l1.push(obj3);

console.log(l1.last, {depth: 3});
