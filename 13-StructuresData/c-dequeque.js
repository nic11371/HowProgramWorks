'use strict;'

class Dequeue {
	constructor() {
		this.first = null;
		this.last = null;
	}
	push(data) {
		const last = this.last;
		const element = {prev: last, next: null, data}
		if(last) {
			this.last = element;
			last.next = element;
		} else {
			this.first = element;
			this.last = element;
		}
	}
	shift() {
		const element = this.first;
		if(!element) return null;
		if(element === this.last) {
			this.first = null;
			this.last = null;
		} else {
			this.first = element.next;
		}
		return element.data;
	}
	unshift(data) {
		const first = this.first;
		const element = {prev: null, next: first, data};
		if(first) {
			this.first = element;
			first.prev = element;
		} else {
			this.first = element;
			this.last = element;
		}
	}
	pop() {
		const element = this.last;
		if(!element) return null;
		if(this.first === element) {
			this.first = null;
			this.last = null;
		} else {
			this.last = element.prev;
		}
		return element.data;
	}
}

const l1 = new Dequeue();
l1.push({name: 'first'});
l1.push({name: 'second'});
l1.unshift({name: 'third'});

console.log(l1.pop());
console.log(l1.shift());
console.log(l1.shift());



