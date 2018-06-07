/**
 * @category Safe Calculations
 * @summary Convert to a number
 *
 * @description
 * Convert to a number
 *
 * @param {String|Number} number - number
 * @returns {Number} number, with 0 if not a number
 *
 * @example
 * // Convert a number to a number
 * var result = safeNumber(2)
 * //=> 2
 */
function safeNumber(number) {
  var asNumber = Number.parseFloat(number)

  if (
    !number ||
    Number.isNaN(number) ||
    Number.isNaN(asNumber) ||
    !Number.isFinite(number)
  ) {
    return 0
  }

  return asNumber
}

module.exports = safeNumber
