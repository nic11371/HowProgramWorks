'use strict;'

const g1 = {};
const g2 = {};
const g3 = {area: 300};
g2.area = 200;

const mixinCalculateCost = obj => {
	obj.area = obj.area || 0;
	obj.calculateCost = function (price) {
		return this.area * price
	};
};

mixinCalculateCost(g1);

[g1, g2, g3].forEach(mixinCalculateCost);

console.log(g1.calculateCost(5));
console.log(g2.calculateCost(5));
console.log(g3.calculateCost(5));

const t1 = setTimeout(() => {
	console.log('Hello timer');
}, 1000)
mixinCalculateCost(t1)

t1.area = 10;
console.log(t1.calculateCost(100));
