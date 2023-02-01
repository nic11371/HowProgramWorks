'use strict;'

const {sin} = Math;
const inverse = f => x => 1/f(x);
const y = inverse(sin);
const a = y(5)
console.log(a);
