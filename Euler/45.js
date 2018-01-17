const Stream = require('./common/Stream.js').Stream;

const isPentagonal = n=>(Math.sqrt(24*n + 1)+1)/6%1 === 0;
const isHexagonal = n=>(Math.sqrt(8*n + 1)+1)/4%1 === 0;
const getTriangular = n=>n*(n + 1)/2;

Stream.get(285).addMap(getTriangular).addFilter(isPentagonal).addFilter(isHexagonal).run(1, console.log);