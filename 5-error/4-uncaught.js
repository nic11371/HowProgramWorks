'use strict;'

process.on('uncaugthException', err => {
	console.log("Error " + err.message);
	process.exit(1)
})

const sum = (a, b) => {
	if(typeof a === 'number' && typeof b === 'number') {
		return a + b
	} else {
		throw new Error('This argument is not figure')
	}
}



console.log(sum(2,'A'));

