'use strict;'

const compose = (...fn) => x => {
	if(fn.length === 0) return x

	const last = fn.length - 1
	let res = x;
	for(let i = last; i >= 0; i--) {
		res = fn[i](res)
	}
	return res
}

const pipe = (...fn) => x => {
	if(fn.length === 0) return x;
	let res = x;
	for(let i = 0; i <= fn.length - 1; i++) {
		res = fn[i](res)
	}
	return res
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