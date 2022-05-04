'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : 
seq((x) => f(g(x))));

console.log(seq())