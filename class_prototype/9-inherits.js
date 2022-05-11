'use strict';

function Rect(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Rect.prototype.toString = function() {
	return (`[${this.x}, ${ this.y }, ${ this.width }, ${ this.height }]`)};

function Square(x, y, side) {
	Rect.call(this, x, y, side, side)
}

// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Rect;

// Square.prototype = new Rect();
// Square.prototype.constructor = Rect;
Object.setPrototypeOf(Square.prototype, Rect.prototype)

const p1 = new Square(10,20,30);
console.log(p1.toString());