'use strict;'

const timeout = (msec, fn) => {
	let timer = setTimeout(() => {
		if(timer) console.log('Called timeout');
		timer = null;
	}, msec);
	return (...args) => {
		if(timer) {
			clearTimeout(timer);
			timer = null;
			return fn(...args)
		}
	}
};

const func = par => {
	console.log('Called', par);
}

const fn100 = timeout(100, func);
const fn200 = timeout(200, func);

setTimeout(() => {
	fn100('first');
	fn200('second');
}, 150);