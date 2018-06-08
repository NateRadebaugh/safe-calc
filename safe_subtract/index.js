var safeNumber = require("../safe_number/index.js")

/**
 * @category Safe Calculations
 * @summary Subtract two numbers
 *
 * @description
 * Subtract two numbers
 *
 * @param {String|Number} left - left number
 * @param {String|Number} right - right number
 * @returns {Number} number, with 0 if not a number
 *
 * @example
 * // Subtract two numbers
 * var result = safeSubtract(2, 3)
 * //=> 5
 */
function safeSubtract(left, right) {
  return safeNumber(left) - safeNumber(right)
}

module.exports = safeSubtract
