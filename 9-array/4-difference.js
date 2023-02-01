'use strict;'

const difference = (array1, array2) => {
	const result = [];
	for(const i of array1) {
		const item = array2.includes(i);
		if(!item) result.push(i) 

	}
	return result
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);

// eslint-disable-next-line no-undef
module.exports = { difference };