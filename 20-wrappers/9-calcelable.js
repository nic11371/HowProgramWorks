'use strict;'

const cancelable = (fn) => {
	const wrap = (...args) => {
		if(fn) return fn(...args)
	};
	wrap.cancel = () => fn = null;
	return wrap;
}

const func = par => {
	console.log('Called', par);
};

const fn2 = cancelable(func);

fn2('first');
fn2.cancel();
fn2('second');