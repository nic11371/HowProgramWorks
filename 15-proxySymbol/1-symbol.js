'use strict;'

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1);
console.log(JSON.stringify(symbol1));

const eql = symbol1 === symbol2;
console.log(eql);

const symbol3 = Symbol('name');
const symbol4 = Symbol('name');

const eql2 = symbol3 === symbol4;
console.log(eql2);



