'use strict;'

const data = {name: 'Nikolay', city: 'Tula', born: '1991'};

const person = new Proxy(data, {});

console.log(person.name);

