'use strict';

function move (x, y) {
	this.x = x;
	this.y = y;
}

function toString() {
	return `[${this.x}, ${this.y}]`;
}

const p = {x: 20, y: 10};
const p1move = move.bind(p);
const p1toString = toString.bind(p);
p1move(-5, 10);

console.log(p);
console.log(p1toString());
console.log(p + '')


