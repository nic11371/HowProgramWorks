'use strict;'

const fn = (array, listener) => {
	for(const item of array) {
		listener(item)
	}
}

const array = ['Moscow', 'Kiev', 'Minsk'];
const print = (arr) => {
	console.log(arr);
	
}

fn(array, print)