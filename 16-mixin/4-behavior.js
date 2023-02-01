'use strict;'

const scalable = image => {
	image.scale = () => console.log('Image');
}

const lazy = image => {
	const scale = image.scale;
	// eslint-disable-next-line no-undef
	image.scale = () => setImmediate(() => scale());
}

const image = {};
scalable(image);
image.scale()

lazy(image);
image.scale()
