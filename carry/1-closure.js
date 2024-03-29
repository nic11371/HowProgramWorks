'use strict;'

const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = base => n => log(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);

console.log('lg(5) = ' + lg(5));
console.log('ln(5) = ' + ln(5));


