'use strict;'

const once = f => (...args) => {
		if (!f) return;
		const res = f(...args);
		f = null;
		return res;
	
};

const fn = par => {
	console.log('Called', par);
};

const one = once(fn);
one('one');
one('second')