'use strict;'

function Rect (x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Rect.prototype.toString = function() {
	return JSON.stringify(this)
};

function Square (x, y, side) {
	Rect.call(this, x, y, side, side)
}

Object.setPrototypeOf(Square.prototype, Rect.prototype);
Square.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
}

const square = new Square(20, 30, 40);
square.move(5,5);

console.log({square});
console.log({Square});
console.log({Rect});

console.log(square.__proto__ === Square.prototype);
console.log(square.__proto__.constructor === Square);
console.log(square.__proto__.__proto__ === Rect.prototype);
console.log(Square.__proto__ === Function.prototype);
console.log(Square.__proto__.constructor === Function);
console.log(Square.prototype.__proto__ === Rect.prototype);
console.log(Square.prototype.constructor === Square);