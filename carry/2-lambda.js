'use strict;'

const log = (base, n) => Math.log(n) / Math.log(base);

const lg = n => log(10, n)
const ln = n => log(Math.E, n)
console.log(lg(5))
console.log(ln(5));


