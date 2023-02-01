'use strict;'

// const wrap = (before, after, cbBefore, cbAfter, fn) => (...args) => {
// 	const cb = args[args.length - 1];
// 	if(typeof cb === 'function') {
// 		args[args.length - 1] = (...pars) => {
// 			cbAfter(cb(...cbBefore(...pars)))
// 		};
// 	}
// 	return after(fn(...before(...args)))
// }

const wrapFunction = f => {
	console.log('Wrapped Func', f.name);
	return (...args) => {
		console.log('Called wrap', f.name);
		console.log({args});
		if(args.length > 0) {
			const fn = args[args.length - 1];
			if(typeof fn === 'function') {
				args[args.length - 1] = (...par) => {
					console.log('Callback', fn.name);
					const cb = fn(...par);
					console.log('Called cb', cb, par);
					return cb;
				};
			}
		}
		console.log('Call', f.name);
		console.log({args});
		const res = f(...args);
		console.log('End wrap', f.name);
		console.log({res});
		return res;
	};
};

const cloneInterface = anInterface => {
	const clone = {};
	const keys = Object.keys(anInterface);
	for(const key of keys) {
		const cb = anInterface[key];
		clone[key] = wrapFunction(cb);
	}
	return clone;
}

const interfaceName = {
	methodName(p1, p2, cb) {
		console.log(p1, p2);
		cb(null, {field: 'value'})
		return p1;
	}
};

const cloned = cloneInterface(interfaceName);
cloned.methodName('one', 'two', (err, data) => {
	console.log({err, data});
	return true;
})