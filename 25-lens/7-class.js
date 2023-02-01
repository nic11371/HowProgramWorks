'use strict;'

class Lens {
	constructor(source, destination = source) {
		this.source = source;
		this.destination = destination;
	}

	static from (source, destination) {
		return new Lens(source, destination);
	}

	get(obj) {
		return obj[this.source];
	}

	set(value, obj) {
		return {...obj, [this.destination]: value};
	}

	delete(obj) {
		// eslint-disable-next-line no-unused-vars
		const {[this.source]: forgot, ...others} = obj;
		return others
	}

	static view(from, obj) {
		return from.get(obj);
	}

	static set(from, value, obj) {
		return from.set(value, obj);
	}

	static over(from, fn, obj) {
		return from.set(fn(from.get(obj)), obj);
	}

	static remove(from, obj) {
		return from.delete(obj);
	}
}

const person = {
	name: 'Marcus',
	city: 'Roma',
	born:  121
};

const nameLens = Lens.from('name');

const upper = s => s.toUpperCase();
console.log('view', Lens.view(nameLens, person));
console.log('set', Lens.set(nameLens, 'Marcus', person));
console.log('over', Lens.over(nameLens, upper, person));

const renameLens = Lens.from('name', 'RenameName');
console.log('view', Lens.view(renameLens, person));
console.log('set', Lens.set(renameLens, 'Marcus', person));
console.log('over', Lens.over(renameLens, upper, person));

const excpect = Lens.from('name');
console.log('remove', Lens.remove(excpect, person));

const lensPrototype = new Lens('name')
console.log(lensPrototype.get(person));

