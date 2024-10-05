/**
 * Calculates the factorial of a given number.
 * @param {number} number The number for which the factorial should be calculated.
 * @returns {number} The factorial of the given number.
 */
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 5! = 120