/**
 * Rolls a 1d6, a single 6 sided dice.
 * @return {Number} a number between 1 and 6
 */
function d6() {
  return 0| (Math.random() * 6) + 1;
}

/**
 * Rolls 4 Fate/Fudge dice.
 * @return {Array} array of numbers between -1 and +1
 */
function roll1dF() {
  const rolls = [
    d6(), d6(), d6(), d6()
  ];
  return rolls.map((value) => {
    if (value <= 2) { return -1; }
    if (value >= 5) { return +1; }
    return 0;
  });
}

/**
 * Reducer function
 * Running Total
 * @param  {Number} runningTotal
 * @param  {Number} value
 * @return {Number}
 */
function toTotal(runningTotal, value) {
  return runningTotal + value;
}

module.exports = {
  roll1dF,
  toTotal,
}
