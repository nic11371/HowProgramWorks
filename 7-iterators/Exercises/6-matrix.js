'use strict;'

const max = matrix => {
	const _max = (a, b) => a > b ? a : b
	return matrix
	.map(row => row.reduce(_max))
	.reduce(_max)
	
}

console.log(max([
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9]
]));
