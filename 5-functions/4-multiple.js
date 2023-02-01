'use strict;'

const compose = (...fn) => x => fn.reverse().reduce((v, f) => f(v), x);
const pipe = (...fn) => x => fn.reduce((v, f) => f(v), x);

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

