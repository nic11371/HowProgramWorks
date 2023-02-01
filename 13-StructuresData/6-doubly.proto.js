'use strict;'

const LinkedList = function() {
	this.first = null;
	this.last = null;
	this.length = 0;
}

LinkedList.prototype.push = function(data) {
	const node = new Node(this, data);
	node.prev = this.last;
	if(this.length === 0) this.first = node;
	else this.last.next = node;
	this.last = node;
	this.length++;
	return node;
}

LinkedList.prototype.pop = function() {
	if(this.length === 0) return null;
	const elem = this.last;
	this.last = elem.prev
	elem.list = null;
	elem.prev = null;
	elem.next = null;
	this.length--
	return elem.data;
}

const Node = function(list, data) {
	this.list - list;
	this.data = data;
	this.prev = null;
	this.next = null;
} 

const l1 = new LinkedList();
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








