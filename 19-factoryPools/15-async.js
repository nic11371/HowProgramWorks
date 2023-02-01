'use strict;'

const duplicate = (factory, n) => (
	new Array(n).fill(null).map(() => factory())
);

const poolify = (factory, min, norm, max) => {
	let allocated = norm;
	const items = duplicate(factory, norm);
	const delayed = [];

	return par => {
		if (typeof par !== 'function') {
			if (items.length < max) {
				const request = delayed.shift();
				if (request) {
					const c1 = items.length;
					console.log(`${c1}->${c1} Recycle, pass to delayed`);
					request(par);
				} else {
					const c1 = items.length;
					items.push(par);
					const c2 = items.length;
					console.log(`${c1}->${c2} Recycle, item add to pool`);
				}
			}
			return;
		}
		if (allocated < max && items.length < min) {
			const grow = Math.min(norm - items.length, max - allocated);
			allocated += grow;
			const instances = duplicate(factory, grow);
			items.push(...instances)
		}
		const c1 = items.length;
		const res = items.pop();
		const c2 = items.length;
		if (res) {
			console.log(`${c1}->${c2} Get, pass to callback`);
			par(res)
		} else {
			console.log(`${c1}->${c2} Get, add  to queue`);
			delayed.push(par)
		}
	}
}

const buffer = () => new Uint32Array(1024);
const pool = poolify(buffer, 3, 5, 7)

let i = 0;
const next = () => {
	pool((item) => {
		i++;
		if (i < 20) {
			setTimeout(next, i * 10);
			setTimeout(() => pool(item), i * 100)
		}
	})
}

next();