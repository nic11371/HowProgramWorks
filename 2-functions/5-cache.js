'use strict;'

const fn = () => {
	console.log("Generate cache")
	const cache = {};
	return key => {
		cache[key];
		if(cache[key]) 
		{console.log("cache is available ")
		return cache[key];
	}
		else {
			console.log('Calculate cache ')
			
			cache[key] = key;
			return cache[key];
		}
	}
}
const f1 = fn();
const f2 = fn();

f1(1);
f1(2);
f1(1);
f1(2);
f2(1);
f2(2);
f2(1);
f2(2);

