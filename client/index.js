import { rollFateDice, roll1dF } from './rollFateDice.js';
const NAME = 'Rose 🐶';

// Make sure the output starts cleared
elmOutput.value = '';
// Listen for roll clicks
window.btnRoll.addEventListener('click', function(event) {
  const result = rollFateDice();
  // const result = roll1dF();
  elmOutput.value += `${NAME} rolled a ${result}\n`;
});
