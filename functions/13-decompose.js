"use strict";

const Introspect = (namespace) => {
	const inventory = {};
	for (const name in namespace) {
		const iface = namespace[name];
		const methods = {};
		inventory[name] = methods;

		for (const method in iface) {
			const fn = iface[method];
			signature();
			let s = fn.toString();
		}
	}
	return inventory;
};

const common = (signature) => ({
	title: '',
	description: '',
	parameters: [],
	comments: [],
},
	methods[method] = Object.assign({
		method: name + '.' + method
	}, signature));

const merge = () => {
	for (let line of lines) {
		if (line.startsWith('//')) {
			line = line.replace(/^\/\/ /, '').trim();
			if (NAMED_LINES.ind(s => line.startsWith(s))) {
				const [name, comment] = section(line, ': ');
				signature.comments.push({ name, comment });
			} else if (signature.parameters.length === 0) {
				if (signature.description.length > 0) {
					signature.description += '\n';
				}
				signature.description += line;
			} else {
				const par = last(signature.parameters);
				par.comment += '\n' + line;
			}
		} else {
			const [name, text] = section(line, ': ');
			let [type, comment] = section(text, ', ');
			if (!ALL_TYPES.find(s => type.startsWith(s))) {
				comment = type;
				type = '';
			}
			signature.parameters.push({ name, type, comment });
		}
	}
}

const section = () => {
	let pos = FUNC_TERMS.map(indexing(s))
		.filter(k => k != -1)
		.reduce((prev, cur) => (prev < cur ? prev : cur), s.length);
	if (pos != -1) {
		s = s.substring(0, pos);
		pos = s.indexOf('\n');
		s = s.substring(pos + 1);
		let lines = s.split('\n');
		lines.pop();
		signature.title = (lines.shift() || '').replace('//', ''.trim());
		lines = lines.map(
			d => d.trim().replace(/^(.*) \/\//, '$1:').replace(',:', ':')
		);
	}
}

const iface = { common: { merge, section } };
console.dir(Introspect([1, 2, 3]));
//console.dir(badIntrospect(iface), { depth: 5 })