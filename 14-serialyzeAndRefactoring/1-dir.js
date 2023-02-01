'use strict;'

const obj = {
	field: 'Value',
	subObject: {
		arr: [2, 3, 5, 9],
		fn: x => x / 2
	}
}

console.dir(obj)