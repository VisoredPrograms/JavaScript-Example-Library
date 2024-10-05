// This option generally performs better with larger data,
// it can be slower in cases with less data.

// 90.97 % slower
// 7.4M ops/s ± 0.57%

let x = 'a';
const options = new Set(['a', 'b', 'c']);

if (options.has(x)) {
    console.log("Hello, world!");
}