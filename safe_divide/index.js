var safeNumber = require("../safe_numberber/index.js")

/**
 * @category Safe Calculations
 * @summary Divide two numbers
 *
 * @description
 * Divide two numbers
 *
 * @param {String|Number} left - left number
 * @param {String|Number} right - right number
 * @returns {Number} number, with 0 if not a number
 *
 * @example
 * // Divide two numbers
 * var result = safeDivide(2, 3)
 * //=> 5
 */
function safeDivide(left, right) {
  var divisor = safeNumber(right)
  if (divisor) {
    return safeNumber(left) / divisor
  }

  return 0
}

module.exports = safeDivide
