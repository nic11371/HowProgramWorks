'use strict;'

const extend = (obj, mixin) => {
	const keys = Object.keys(mixin);
	for(const key of keys) {
		obj[key] = mixin[key]; 
	}
	return obj;
}

const obj1 = {
	name: 'Nikolay Malnikov',
	cuty: 'Tula',
	born: '1991-03-19'
};

const mix1 = {
	toString() {
		return `${this.name} was born in ${this.city} in ${this.born}`
	},
	age() {
		const year = new Date().getFullYear();
		const born = new Date(this.born).getFullYear();
		return year - born
	}
};

extend(obj1, mix1);
console.log(obj1);
console.log(obj1.toString());
console.log(obj1.age());


