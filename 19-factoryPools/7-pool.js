'use strict;'

const pool = item => {
	pool.items = pool.items || new Array(10).fill(new Array(1000).fill(0));
	if(item) {
		console.log('recycle', pool.items.length);
		pool.items.push(item)
	}
	const res = pool.items.pop() || new Array(10).fill(0);
	console.log('Get', pool.items.length);
	
	return res 

}

for(let i = 0; i < 15; i++){
const a1 = pool();
const b1 = a1.map((x, i) => i).reduce((x, y) => x + y);
console.log(b1);
}
const a2 = pool();
const b2 = a2.map((x, i) => i).reduce((x, y) => x + y);
console.log(b2);

// pool(a1);
// pool(a2);

const a3 = pool();
const b3 = a3.map((x, i) => i).reduce((x, y) => x + y);
console.log(b3);