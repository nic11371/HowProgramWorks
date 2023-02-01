'use strict;'

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}
	put(data) {
		const last = this.last;
		const element = {next: null, data};

		if(last) {
			this.last = element;
			last.next = element;
		} else {
			this.first = element;
			this.last = element;
		}
	}
	pick() {
		const element = this.first;
		if(!element) return null;
		if(element == this.last) {
			this.first = null;
			this.last = null;
		} else {
		this.first = element.next;
	}
		return element.data
	}
}

const l1 = new Queue();
l1.put({name: 'first'});
l1.put({name: 'second'});
l1.put({name: 'third'});

console.log(l1.pick());
console.log(l1.pick());
console.log(l1.pick());
console.log(l1.pick());

l1.put('Hello');
l1.put('world');
console.log(l1.pick());
l1.put('Nick');
console.log(l1.pick());
console.log(l1.pick());