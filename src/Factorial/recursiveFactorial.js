/**
 * Calculates the factorial of a given number.
 * @param {number} number The number for which the factorial should be calculated.
 * @returns {number} The factorial of the given number.
 */
function factorial(number) {
    if (number <= 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(factorial(5)); // 5! = 120