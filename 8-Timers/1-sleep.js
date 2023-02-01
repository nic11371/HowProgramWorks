'use strict;'

const sleep = msec => {
	const end = new Date().getTime() + msec;
	while(new Date().getTime() < end);
}

console.log(new Date().toISOString());
console.log('after 3 s');
sleep(3000);
console.log(new Date().toISOString());




