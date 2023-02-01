'use strict;'

const curry = (fn, ...par) => {
	const curried = (...args) => (
	fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args) 
	)
	return par.length ? curried(...par) : curried;
}

const callbackTimer = () => {
	console.log('Callback from timer');	
}

const timeout = (interval, fn) => setTimeout(fn, interval);

const timer = curry(timeout);
timer(3000)(callbackTimer)

const timer3s = timer(3000);
timer3s(callbackTimer)
