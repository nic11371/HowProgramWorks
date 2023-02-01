'use strict;'

const partial = (fn, x) => (...args) => fn(x, ...args);

const sum = (a, b, c, d) => (a + b + c + d);

const sum1 = partial(sum, 1);
const sum2 = partial(sum1, 2);
const sum3 = partial(sum2, 3);
const sum4 = sum3(4);
console.log(sum4);

