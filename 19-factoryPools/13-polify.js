'use strict;'

const polify = (factory, size) => {
	const items = new Array(size).fill(null).map(() => factory())
	return item => {
		if(item) {
			items.push(item);
			console.log('Recycle', items.length);
			
			return;
		}
		const res = items.pop() || factory();
		console.log('Get', items.length);
		
		return res;
	}
}


const buffer = () => new Uint32Array(1024);
const pool = polify(buffer, 10)

for(let i = 0; i < 15; i++){
	const a1 = pool();
	console.log('Buffer size', a1.length * 32);
	}