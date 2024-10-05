// This option generally performs better with smaller data
// it can be faster in cases with less data.

// Fastest
// 81M ops/s ± 0.18%

let x = 'a';
const options = ['a', 'b', 'c'];

if (options.includes(x)) {
    console.log("Hello, world!");
}