'use strict;'

const compose = (...fn) => x => {
	if(fn.length === 0) return x;
	const f = fn.pop();
	const res = f(x);
	if(fn.length === 0) return res;
	return compose(...fn)(res)
}

const pipe = (...fn) => x => {
	if(fn.length === 0) return x;
	const f = fn.shift();
	const res = f(x);
	if(fn.length === 0) return res;
	return pipe(...fn)(res)
}

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();
const trim = s => s.trim();

const s = '     NIKOLAY MELNIKOV     ';
console.log(`${lower(s)}`);
console.log(`${upperCapital(s)}`);
console.log(`${trim(s)}`);
console.log(s);
{
const capitalize = compose(upperCapital, lower, trim);
console.log(`${capitalize(s)}`);
}
{
const capitalizePipe = pipe(trim, lower, upperCapital);
console.log(`${capitalizePipe(s)}`);
}