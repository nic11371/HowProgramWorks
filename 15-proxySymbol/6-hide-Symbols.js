'use strict;'

const hideSymbol = (obj, symbol) => {
	obj = {
		readObj: Object.assign(obj),
		simulateSecretField: undefined,
	};
	obj = new Proxy(obj, {
		ownKeys: (target) => {
			if (symbol in target.readObj) {
				let properties = Reflect.ownKeys(target.readObj);
				const indexField = properties.indexOf(symbol);
				properties.splice(indexField, 1);
				if(target.simulateSecretField) {
					properties = properties.concat(symbol);
				}
				return properties;
			} else {
				return Reflect.ownKeys(target);
			}
		},
		
		get: (target, property) => {
			if (property === symbol && target.simulateSecretField) {
				return target.simulateSecretField
			}
			if(property === symbol && target.simulateSecretField === undefined) {
				return undefined;
			}
			return target.readObj[property]
		},

		set: (target, property, value) => {
			if(property === symbol) {
				return Reflect.set(target, 'simulateSecretField', value)
			} else {
				return Reflect.set(target.readObj, property, value)
			}
		},

		getOwnPropertyDescriptor: (target, property) => {
			if (property === symbol && target.simulateSecretField) {
				return Object.getOwnPropertyDescriptor(target, 'simulateSecretField')
			}
			if(property === symbol && target.simulateSecretField === undefined) {
				return undefined;
			}
			return Object.getOwnPropertyDescriptor(target.readObj, property)
		},

		enumerate: target => target.keys[Symbol.iterator],

		deleteProperty(target, property) {
			if(property !== symbol) {
				delete target.readObj[property]
			} else if (property === symbol && target.simulateSecretField) {
				target.simulateSecretField = undefined
			}
			return true;
		}
	})
	return obj;
}

// eslint-disable-next-line no-undef
module.exports = hideSymbol;