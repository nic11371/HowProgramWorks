'use strict;'

const emitable = (obj, events = {}) => Object.assign(obj, {
	on: (name, fn) => {
		const event = events[name] || [];
		events[name] = event;
		event.push(fn)
	},
	emit: (name, ...data) => {
		const event = events[name];
		if(event) {
			for(const i of event) {
				i(...data)
			}
		}
	}
});

const moviable = obj => {
	obj.on('move', (x, y) => {
		console.log('move', x, y);
		obj.x += x;
		obj.y += y;
		obj.emit('moved')
	});
	return obj;
};

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
};

const p = moviable(emitable(new Rect(10,20,50,150)));
console.log(p.toString());
p.on('moved', () => {
	console.log(p.toString());
})
p.emit('move', 15, 23)
