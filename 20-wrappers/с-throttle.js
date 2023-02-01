'use strict;'

const throttle = (timeout, f, ...args) => {
	let wrapped = null;
	let wait = false;
	let timer;

	const throttled = (...pars) => {
		timer = undefined;
		if (wait) wrapped(...pars);
	};

	wrapped = (...pars) => {
		if (!timer) {
			timer = setTimeout(throttled, timeout, ...pars)
			wait = false;
			return f(...args.concat(pars));
		} else {
			wait = true;
		}
	}
	return wrapped;
};

const fn = (...pars) => {
	console.log('Called', pars);
};

const ft = throttle(200, fn, 'value1');

const timer = setInterval(() => {
	fn('value2');
	ft('value3');
}, 50);

setTimeout(() => {
	clearInterval(timer);
}, 2000);