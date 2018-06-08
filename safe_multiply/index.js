var safeNumber = require("../safe_numberber/index.js")

/**
 * @category Safe Calculations
 * @summary Multiply two numbers
 *
 * @description
 * Multiply two numbers
 *
 * @param {String|Number} left - left number
 * @param {String|Number} right - right number
 * @returns {Number} number, with 0 if not a number
 *
 * @example
 * // Multiply two numbers
 * var result = safeMultiply(2, 3)
 * //=> 5
 */
function safeMultiply(left, right) {
  return safeNumber(left) * safeNumber(right)
}

module.exports = safeMultiply
