'use strict;'

const len = 1024;
const buffer = new ArrayBuffer(len);
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 8, 24);
const view3 = new DataView(buffer, 128, 16);

for(let i = 0; i < len; i++) {
	const value = (i + 4) * 5;
	view1.setUint8(i, value)
}

console.log({view1, view2, view3});

console.log({
	int16view1: view1.getUint16(10),
	int16view2: view2.getUint16(10),
	int32view3: view2.getUint32(10),

	int8view1: view1.getInt8(20),
	uint8view1: view1.getUint8(20),

	int32view1BE: view1.getInt32(5), //big-endian
	int32view1LE: view1.getInt32(5, true), //little-endian

	int32view1BEhex: view1.getInt32(5).toString(16), //big-endian
	int32view1LEhex: view1.getInt32(5, true).toString(16), //little-endian

	int8view1f: view1.getInt8(5).toString(16)
});
