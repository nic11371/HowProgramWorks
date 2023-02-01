'use strict;'

const polified = Symbol('polified');
const mixFlag = {[polified]: true}

const duplicate = (factory, n) => (
	new Array(n).fill().map(() => {
		const instance = factory();
		return Object.assign(instance, mixFlag);
	})
);

const provide = callback => item => {
	// eslint-disable-next-line no-undef
	setImmediate(() => {
		callback(item);
	});
};

const poolify = (factory, min, norm, max) => {
	let allocated = norm;
	const delayed = [];
	const items = duplicate(factory, norm);

	return par => {
		if(par[polified]) {
			const request = delayed.shift();
			if(request) request(par)
			else items.push(par);
			return;
		}
		const callback = provide(par)
		if (items.length < min && allocated < max) {
			const grow = Math.min(max - allocated, norm - items.length);
			allocated += grow;
			const instances = duplicate(factory, grow);
			items.push(...instances);
		}
		const res = items.pop();
		if(res) callback(res);
		else delayed.push(callback);
	};
};

const add = a => b => add(a + b);
const pool = poolify(add, 1, 2, 3);

console.log('request Item1');
pool((item1) => {
  console.log('get Item1');
  console.log('request Item2');
  pool((item2) => {
    console.log('get Item2');
    console.log('request Item3');
    pool((item3) => {
      console.log('get Item3');
      setTimeout(() => {
        pool(item3);
        console.log('recycle Item3');
      }, 50);
    });
    console.log('request Item4');
    pool((item4) => {
      console.log('get Item4');
      setTimeout(() => {
        pool(item4);
        console.log('recycle Item4');
      }, 20);
    });
    setTimeout(() => {
      pool(item1);
      console.log('recycle Item1');
      setTimeout(() => {
        pool(item2);
        console.log('recycle Item2');
      }, 10);
    }, 10);
  });
});

