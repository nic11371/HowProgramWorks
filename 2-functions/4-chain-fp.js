'use strict;'

const fn = a => b => c => a + b + c;

const f1 = fn(1);
const f2 = f1(2);
const f3 = f2(3);

console.log(f3);
