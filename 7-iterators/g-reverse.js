'use strict;'

const array = [1,2,3,4,5,6,7,8,9];

array[Symbol.iterator] = function() {
	let index = this.length;
	return {
		next: () => ({
			done: index-- === 0,
			value: this[index]
		})
	}
}

for (const i of array) {
	console.log(i);
	
}