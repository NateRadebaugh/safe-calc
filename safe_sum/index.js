var safeNumber = require("../safe_numberber/index.js")

/**
 * @category Safe Calculations
 * @summary Sum two numbers
 *
 * @description
 * Sum two numbers
 *
 * @param {String|Number} left - left number
 * @param {String|Number} right - right number
 * @returns {Number} number, with 0 if not a number
 *
 * @example
 * // Sum two numbers
 * var result = safeSum(2, 3)
 * //=> 5
 */
function safeSum(left, right) {
  return safeNumber(left) + safeNumber(right)
}

module.exports = safeSum
