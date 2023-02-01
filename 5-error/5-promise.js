'use strict;'

const sum = (a, b) => new Promise((resolve, reject) => {
	if (typeof a === 'number' && typeof b === 'number') {
		return resolve(a + b)
	} else {
		return reject(new Error("This argument is not figure"))
	}
})

sum(2, 3)
	.then(data => {
		console.log(data)
	}
	)
	.catch(err => {
		console.log(err.message);
		
	})

	sum(2, "A")
	.then(data => {
		console.log(data)
	}
	)
	.catch(err => {
		console.log(err.message);
		
	})