'use strict;'

const timer = setTimeout(() => {}, 10000);

console.log(timer);

// eslint-disable-next-line no-undef
if(process.argv[2] === 'unref') timer.unref()
console.log(timer);
// eslint-disable-next-line no-undef
if(process.argv[3] === 'ref') timer.ref();
console.log(timer);


