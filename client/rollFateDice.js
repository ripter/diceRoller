/**
 * Rolls 4 Fate/Fudge dice (1dF) and returns the result.
 * @return {Number} a number between -4 and +4
 */
export function rollFateDice() {
  return roll1dF().reduce((total, diceValue) => {
    return total + diceValue;
  }, 0);
}


/**
 * Rolls a 1d6, a single 6 sided dice.
 * @return {Number} a number between 1 and 6
 */
export function d6() {
  return 0| (Math.random() * 6) + 1;
}

/**
 * Rolls 4 Fate/Fudge dice.
 * @return {Array} array of numbers between -1 and +1
 */
export function roll1dF() {
  const rolls = [
    d6(), d6(), d6(), d6()
  ];
  return rolls.map((value) => {
    if (value <= 2) { return -1; }
    if (value >= 5) { return +1; }
    return 0;
  });
}
