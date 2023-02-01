'use strict;'

const wrap = (f) => {
	let counter = 0;
	let limit = 0;
	let timer = null;
	let fn = f;

	const wrapper = (...args) => {
		if(!fn) return;
		if(limit && counter === limit) {
			limit = 0;
			counter = 0;
			wrapper.cancel();
			return;
		}
		const res = fn(...args);
		counter++;
		return res;
	};

	const methods = {
		cancel() {
			fn = null;
			return this;
		},
		resume() {
			if(!fn) fn = f;
			return this;
		},
		limit(count) {
			limit = count || 0;
			counter = 0;
			return this;
		},
		timeout(msec) {
			if(timer) clearInterval(timer);
			timer = setTimeout(() => this.cancel(), msec);
			return this;
		}
	};
	return Object.assign(wrapper, methods);
}

const func = (par) => {
	console.log('Called', par);
};

const fn2 = wrap(func).timeout(200).limit(3);
fn2('1st');

setTimeout(() => {
	fn2('2st');
	fn2('2.1st')
	fn2.cancel();
	fn2('3st');
	fn2.resume();
	fn2('4st');
	fn2(setTimeout(() => {
		fn2('5st');
		setTimeout(() => {
			fn2.limit(1);
			fn2('6st');
			fn2('7st');
			fn2.resume();
			fn2('8st');
		}, 150);
	}, 150));
}, 150);



