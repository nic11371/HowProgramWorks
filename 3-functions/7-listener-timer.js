'use strict;'


const fn = (array, listener) => {
	let counter = 0;
	setInterval(() => {
		listener(array[counter++])
		if(counter >= array.length) counter = 0  
	}, 1000)
	
}

const array = ['Moscow', 'Kiev', 'Minsk'];
const print = (arr) => {
	console.log(arr);
	
}

fn(array, print)