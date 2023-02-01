'use strict;'

const poolify = (factory, min, norm, max) => {
	const duplicate = n => new Array(n).fill().map(() => factory());

	const pool = item => {
		if (item) {
			if (pool.allocate < max) pool.items.push(item)
			else pool.allocated--;
			console.log({
				action: 'Recycle item',
				allocate: pool.allocated,
				length: pool.items.length
			});
			return;
		}
		if(pool.items.length < min) {
			const instances = duplicate(norm - pool.items.length);
			pool.allocated += pool.items.length;
			pool.items.push(...instances);
		}
		const res = pool.items.pop();
		console.log({
			action: 'Get item',
			allocate: pool.allocated,
			length: pool.items.length
		});
		return res
	};
	const items = duplicate(norm);
	return Object.assign(pool, {items, allocated: norm})
}

const factorify = (Category, ...args) => () => new Category(...args);
const factory = factorify(Uint32Array, 1024);

const pool = poolify(factory, 3, 5, 7);

let i = 0;
const next = () => {
	const a = pool();
	i++;
	if(i < 20) {
	setTimeout(next, i * 10);
	setTimeout(() => pool(a), i * 100);
}
}

next();