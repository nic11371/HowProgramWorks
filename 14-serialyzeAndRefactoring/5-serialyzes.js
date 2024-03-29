'use strict;'

const serializes = {
	string: s => `'${s}'`,
	number: n => n.toString(),
	boolean: b => b.toString(),
	function: f => f.toString(),
	object: o => {
		if (Array.isArray(o)) return '[' + o + ']';
		if (o === null) return null;
		let s = '{';
		for (const key in o) {
			const value = o[key];
			if(s.length > 1) s+= ',';
			s += key + ':' + serialize(value)
		}
		const symbols = Object.getOwnPropertySymbols(o);
		for (const symbol of symbols) {
			const value = o[symbol];
			if(s.length > 1) s += ','
			s += symbol.toString() + ':' + serialize(value)
		}
		return s + '}'
	}
}

const serialize = obj => {
	const type = typeof obj;
	const serial = serializes[type];
	return serial(obj)
}

const obj1 = {
	field: 'Value',
	subObject: {
		arr: [2, 3, 5, 9],
		fn: x => x / 2
	},
	[Symbol('name')]: "Nikolay" 
}

console.log(serialize(obj1));
