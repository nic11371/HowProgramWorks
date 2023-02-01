'use strict;'

const arr8 = new Int8Array(10);

for(let i = 0; i < 10; i++) {
	arr8[i] = i;
}

console.log({
	arr8,
	length: arr8.length,
	buffer: arr8.buffer,
	byteLength: arr8.byteLength,
	byteOffset: arr8.byteOffset, 
});

console.log(...arr8);

for(const a of arr8) {
	console.log(a);
}

const arr32 = new Int32Array(arr8);
console.log(arr32);
arr32[3] = 12;
console.log({ arr8, arr32 });
const view1 = new DataView(arr32.buffer, 2, 5);
console.log(view1);


