'use strict;'

const unique = (array) => {

	let arr = [];
	for(const i of array){
		if(!arr.includes(i)) arr.push(i)	
	}
	return arr;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result);

// eslint-disable-next-line no-undef
module.exports = { unique };