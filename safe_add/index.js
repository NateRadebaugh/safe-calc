var safeNumber = require("../safe_numberber/index.js")

/**
 * @category Safe Calculations
 * @summary Add two numbers
 *
 * @description
 * Add two numbers
 *
 * @param {String|Number} left - left number
 * @param {String|Number} right - right number
 * @returns {Number} number, with 0 if not a number
 *
 * @example
 * // Add two numbers
 * var result = safeAdd(2, 3)
 * //=> 5
 */
function safeAdd(left, right) {
  return safeNumber(left) + safeNumber(right)
}

module.exports = safeAdd
