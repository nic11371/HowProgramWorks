'use strict;'

const sleep = msec => new Promise(resolve => {
	setTimeout(resolve, msec)
});

console.log(new Date().toISOString());
console.log('after 3s');
sleep(3000).then(() => {
	console.log(new Date().toISOString());
	
})

