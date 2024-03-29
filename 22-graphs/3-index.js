'use strict;'

const intersection = (s1, s2) => new Set([...s1].filter(v => s2.has(v)));

class Vertex {
	constructor(graph, data) {
		this.graph = graph;
		this.data = data;
		this.links = new Map();
	}

	link(...args) {
		const distinct = new Set(args);
		const {links} = this;
		const {keyField} = this.graph;
		for(const item of distinct) {
			const value = item.data[keyField];
			links.set(value, item); 
		} 
		return this;
	}
}

class Graph {
	constructor(keyField) {
		this.keyField = keyField;
		this.vertices = new Map();
		this.indices = new Map();
	}

	add(data) {
		const vertex = new Vertex(this, data);
		const {vertices} = this;
		const key = data[this.keyField];
		if(vertices.get(key) === undefined) vertices.set(key, vertex);
		return vertex;
	}

	select(query) {
		let vertices;
		const keys = Object.keys(query);
		for(const field of keys) {
			const idx = this.indices.get(field);
			if(idx) {
				const value = query[field];
				let records = idx.get(value);
				vertices = vertices ? intersection(vertices, records) : records;
			} else {
				vertices = vertices || new Set(this.vertices.values());
				for(const vertex of vertices) {
					const {data} = vertex;
					if(data[field] !== query[field]) {
						vertices.delete(vertex);
					}
				}
			}
		}
		return new Cursor(vertices);
	}

	link(source) {
		const {vertices} = this;
		const from = vertices.get(source);
		return {
			to(...destinations) {
				if(from) {
					destinations.forEach(destinations => {
						const target = vertices.get(destinations);
						if(target) from.link(target);
					});
				}
			}
		};
	}

	insert(records) {
		for(const record of records) {
			const vertex = this.add(record);
			const keys = Object.keys(record);
			for(const [key, idx] of this.indices) {
				if(keys.includes(key)) {
					const value = record[key];
					let records = idx.get(value);
					if(!records) {
						records = new Set();
						idx.set(value, records);
					}
					records.add(vertex);
				}
			}
		}
	}
	
	index(key) {
		let idx = this.indices.get(key);
		if(!idx) {
			idx = new Map();
			this.indices.set(key, idx);
		}
		for(const vertex of this.vertices.values()) {
			const value = vertex.data[key];
			let records = idx.get(value);
			if(!records) {
				records = new Set();
				idx.set(value, records);
			}
			records.add(vertex);
		}
		return this;
	}

}

class Cursor {
	constructor(vertices) {
		this.vertices = vertices;
	}

	linked(...names) {
		const result = new Set();
		for(const vertex of this.vertices) {
			let condition = true;
			for(const name of names) {
				condition = condition && vertex.links.has(name);
			}
			if(condition) result.add(vertex);
		}	
		return new Cursor(result);
	}
}

const graph = new Graph('name').index('city').index('dynasty');

graph.insert([
	{ name: 'Marcus Aurelius', city: 'Rome', born: 121, dynasty: 'Antonine' },
	{ name: 'Lucius Verus', city: 'Rome', born: 130, dynasty: 'Antonine' },
	{ name: 'Antoninus Pius', city: 'Lanuvium', born: 86, dynasty: 'Antonine' },
	{ name: 'Hadrian', city: 'Santiponce', born: 76, dynasty: 'Nerva–Trajan' },
	{ name: 'Trajan', city: 'Sevilla', born: 98, dynasty: 'Nerva–Trajan' },
]);

graph.link('Marcus Aurelius').to('Lucius Verus');
graph.link('Lucius Verus').to('Trajan', 'Marcus Aurelius', 'Marcus Aurelius');
graph.link('Antoninus Pius').to('Marcus Aurelius', 'Lucius Verus');
graph.link('Hadrian').to('Trajan');
graph.link('Trajan').to('Lucius Verus', 'Marcus Aurelius');

console.dir({ graph }, { depth: null });

const res = graph
  .select({ city: 'Rome', dynasty: 'Antonine' })
  .linked('Trajan');

console.log('\nQuery result:\n');
for (const item of res.vertices) {
	console.dir(item.data);
}