'use strict;'

function Node (prev, data) {
	this.prev = prev;
	this.data = data;
}

const n1 = new Node(null, {first: 'Hello'});
const n2 = new Node(n1, {second: "Beautiful"});
const n3 = new Node(n2, {third: "World"});

console.log(n1);
console.log(n2);
console.log(n3);
