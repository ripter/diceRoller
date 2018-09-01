import { wire } from 'hyperHTML';

export default function diceFate(diceValue) {
  const classList = [
    'cube-3d',
  ];

  // since two sides have the same result, pick them at random.
  const useFirst = Math.random() >= 0.5;
  if (diceValue < 0) {
    classList.push(`cube-3d--${ useFirst ? 'one' : 'two'}`);
  }
  else if (diceValue > 0) {
    classList.push(`cube-3d--${ useFirst ? 'five' : 'six'}`);
  }
  else {
    classList.push(`cube-3d--${ useFirst ? 'three' : 'four'}`);
  }

  return wire({diceValue}, ':4dF')`<div class=${classList.join(' ')}>
    <div class="cube">
      <div class="one">➖</div>
      <div class="two">➖</div>
      <div class="three"></div>
      <div class="four"></div>
      <div class="five">➕</div>
      <div class="six">➕</div>
    </div>
  </div>`;
}
