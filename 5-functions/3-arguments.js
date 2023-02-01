'use strict;'

const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));

const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();


const s = 'NIKOLAY MELNIKOV';
console.log(`${lower(s)}`);
console.log(`${upperCapital(s)}`);
console.log(s);
{
const capitalize = compose(upperCapital, lower);
console.log(`${capitalize(s)}`);
}
{
const capitalizePipe = pipe(lower, upperCapital);
console.log(`${capitalizePipe(s)}`);
}