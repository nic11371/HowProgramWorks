'use strict;'

const compose = (f, g) => x => f(g(x));

const upperFirst = s => s.charAt(0).toUpperCase() + s.slice(1);
const upperCapital = word => word.split(' ').map(upperFirst).join(' ')
const lower = s => s.toLowerCase();

const capitalize = compose(upperCapital, lower);

const s = 'NIKOLAY MELNIKOV';
console.log(s);


console.log(`${lower(s)}`);
console.log(`${upperCapital(s)}`);
console.log(`${capitalize(s)}`);


