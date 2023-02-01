'use strict;'

const pipe = (...fns) => {
		for(const i of fns) {
			if(typeof i !== 'function') throw new Error("isn't function")
		}
		return x => fns.reduce((v,f) => f(v), x)
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipes = pipe(inc, twice, cube);
console.log(pipes(10));
