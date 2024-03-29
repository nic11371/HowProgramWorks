'use strict;'

// eslint-disable-next-line no-undef
const v8 = require('node:v8');

const persons = [
  { name: 'Marcus Aurelius', city: 'Rome', born: 121 },
  { name: 'Victor Glushkov', city: 'Rostov on Don', born: 1923 },
  { name: 'Ibn Arabi', city: 'Murcia', born: 1165 },
  { name: 'Mao Zedong', city: 'Shaoshan', born: 1893 },
  { name: 'Rene Descartes', city: 'La Haye en Touraine', born: 1596 }
];

const v8Data = v8.serialize(persons);
const obj = v8.deserialize(v8Data);
console.log(obj);
console.log('\n' + v8Data.toString('hex').toLocaleUpperCase());
console.log('\n' + v8Data.toString());



