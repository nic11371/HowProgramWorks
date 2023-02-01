'use strict;'

const arr8 = new Int8Array(10);

for(let i = 0; i < 10; i++) {
	arr8[i] = i;
}

const res = arr8.map(el => el * 2);
console.log(res);

console.log([
	arr8.lastIndexOf(11),
	arr8.indexOf(3),
	arr8.reverse(),
	arr8.slice(3, 8)
]);
