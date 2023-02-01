'use strict;'

// eslint-disable-next-line no-undef
const timer = require('timers');

console.log(Object.keys(timer));
console.log(setTimeout === timer.setTimeout);

console.log({setTimeout: setTimeout(() => {}, 0)});
console.log({setInterval: setInterval(() => {}, 0)});
// eslint-disable-next-line no-undef
console.log({setImmediate: setImmediate(() => {})});
// eslint-disable-next-line no-undef
console.log({nextTick: process.nextTick(() => {})});

const {active, _unrefActive} = timer; 
console.log({active, _unrefActive});
