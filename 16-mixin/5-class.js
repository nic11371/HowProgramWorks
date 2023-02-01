'use strict;'

const Rect = class {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	toString() {
		return `${this.x} ${this.y} ${this.width} ${this.height}`
	}
}

const eql = Category => class extends Category {
	constructor(x, y, slide) {
		super(x, y, slide, slide)
	}
}

const Square = eql(Rect);
const p = new Square(10, 10, 50);
console.log(p.toString());

