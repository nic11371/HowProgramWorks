'use strict;'

const polify = (factory, min, norm, max) => {
	const dublicate = (n) => new Array(n).fill().map(() => factory());
	const items = dublicate(norm);			

	return (item) => {
		if(item) {
			if(item < max) {
				items.push(item);
			}
			console.log('Recycle', items.length);
			return;
	}		
			if(item < min) {
				const instance = dublicate(norm - items.length);
				items.push(...instance);
			}
		const res = items.pop() || factory();
		console.log('Get', items.length);
		return res;
	};
};

const buffer = () => new Uint32Array(1024);
const pool = polify(buffer, 5, 10, 15);

let i = 0;
const next = () => {
	const a = pool();
	console.log('Buffer size', a.length * 32);
	i++;
	if(i < 20) {
	setTimeout(next, i * 10);
	setTimeout(() => pool(a), i * 100);
	}
}

next()

