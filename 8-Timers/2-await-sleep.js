'use strict;'

const sleep = msec => new Promise(resolve => {
	setTimeout(resolve, msec)
});

// eslint-disable-next-line no-unexpected-multiline
(async () => {
console.log(new Date().toISOString());
console.log('after 3s');

await sleep(3000);
console.log(new Date().toISOString());
}) ();

