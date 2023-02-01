'use strict;'

let count = 0;
const arr = [1,6,5,9,4,3];
const sum = (a, b) => (count++, a + b);
const res = arr.reduce(sum, 1);
console.log({res, count});
