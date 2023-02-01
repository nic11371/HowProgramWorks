'use strict;'

const log = (s, i) => {
	console.log(i, s);
	return s;
}

const f1 = x => x * 2;
const f2 = x => ++x;

const compose = (...fun) => x => fun.reduce((v, f) => f(v), x);

const f3 = compose(f1, f2);

const res = [1,2,3,5,6,9]
.filter(x => x > 4)
.map(f3)
.reduce((acc, val) => acc + val);

console.log(res);
console.log();


[1,2,3,5,6,9]
.map(log)
.map(x => x * 2)
.map(log)
.map(x => ++x)
.map(log)