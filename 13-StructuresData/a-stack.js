'use strict;'

class Stack {
	constructor() {
		this.last = null
	}
	push(data) {
		const prev = this.last;
		const element = {prev, data};
		this.last = element;
	}
	pop() {
		const element = this.last;
		if(!element) return null;
		this.last = element.prev;
		return element.data
	}
}

const l1 = new Stack();
l1.push({name: 'first'});
l1.push({name: 'second'});
l1.push({name: 'third'});

console.log(l1.pop());
console.log(l1.pop());
console.log(l1.pop());
console.log(l1.pop());

l1.push('Hello');
l1.push('world');
console.log(l1.pop());
l1.push('Nick');
console.log(l1.pop());
console.log(l1.pop());