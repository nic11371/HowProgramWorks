'use strict;'

const arr = (s, e) => {
	const a = Array.from(s);
	for(let i = 0; i < s; i++) {
		a[i] = e
	}
	return a
}

const elem = arr(3, 'Hello');
console.log(elem);

