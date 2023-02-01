'use strict;'

const max = matrix => {
	let acc = 0;
	for (const i of matrix) {
		for (const j of i) {
			if (j > acc) acc = j
		}
	}
	return acc
}

console.log(max([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]));
