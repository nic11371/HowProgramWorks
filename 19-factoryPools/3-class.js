'use strict;'

const logable = fields => class Logable {
	constructor(data) {
		this.values = data
		for(const key in fields) {
			Object.defineProperty(Logable.prototype, key, {
				get() {
					return this.values[key];
				},
				set(value) {
					const def = fields[key];
					const valid = (
						typeof value === def.type && def.validate(value)
					)
					if(valid) this.values[key] = value;
					else console.log('Error validate : ', key, value);
				}
			});
		}
	}
	toString() {
		let res = this.constructor.name + ' : ';
		for(const key in fields) {
			res += this.values[key]
		}
		return res
	} 
}

const Person = logable({
	name: {type: 'string', validate: name => name.length > 0},
	born: {type: 'number', validate: born => !(born % 1)}
})

const p = new Person({name: "Nikolay", born: 1991});
console.log(p.toString());
p.born = 1990;
console.log(p.toString());
p.born = 1989.5;
p.name = 'Viktor';
console.log(p.toString());
