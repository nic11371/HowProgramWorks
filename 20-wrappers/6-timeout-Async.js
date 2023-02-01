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
			fn(...args);
		}
	}
};

const fn = (par, callback) => {
	console.log('Called', par);
	callback(null, par);
}

const fn100 = timeout(100, fn);
const fn200 = timeout(200, fn);

setTimeout(() => {
	fn100('first', (err, data) => {
		console.log('Callback', data);
	});
	fn200('second', (err, data) => {
		console.log('Callback', data);
	});
}, 150);

