'use strict';

let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, acc + val);
//The function will return anything values after comma
const res = arr.reduce(sum, 0);
//0 to add in the acc
console.log({count, res})

