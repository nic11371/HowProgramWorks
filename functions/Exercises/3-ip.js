'use strict';

const ipToInt = (ip = '127.0.0.1') => {
	const arrIp = ip.split('.');
	let arrNumber = arrIp.map(i => parseFloat(i))
	return arrNumber.reduce((a, b) => a <<= b) 

	// const f = (a, b) => (a <<= 8) + parseInt(b);
	// return ip.split('.').reduce(f, 0);
}

console.log(ipToInt('10.8.8.8'));

