'use strict;'

 const sum = (a, b) => a + b;
 const call = (a, b, callback) => callback(a + b);
  
console.log(sum(2, 3));
call(2, 3, console.log.bind(null, "use sum"))
