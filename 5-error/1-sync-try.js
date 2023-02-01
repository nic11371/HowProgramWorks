'use strict;'

const sum = (a, b) => {
	if(typeof a === 'number' && typeof b === 'number') return a + b
	else throw new Error('This argument is not figure')
}

try {
	console.log(sum("A", 3));
}
catch(err) {
	console.log(err.message);
 
}
