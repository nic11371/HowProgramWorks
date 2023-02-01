'use strict;'

const node = (prev, data) => ({prev, data})

const n1 = node(null, {first: 'Hello'});
const n2 = node(n1, {second: "Beautiful"});
const n3 = node(n2, {third: "World"});

console.log(n1);
console.log(n2);
console.log(n3);
