import { bind } from 'hyperHTML';
import diceFate from './render/diceFate.js';
let userName = '';
let socket = null;

// Make sure the output starts cleared
elmOutput.value = '';
// Listen for roll clicks
window.btnRoll.addEventListener('click', function(event) {
  if (!socket || socket.readyState !== socket.OPEN) { return; }
  // Ask for a dice roll
  socket.send(JSON.stringify({
    type: 'roll',
    userName,
  }));
});


btnLogin.addEventListener('click', function(event) {
  const name = inputName.value;
  if (!name || name === '') {
    alert('Need a name dude!');
    return;
  }

  userName = name;
  window.socket = socket = new WebSocket(`ws:/${location.host}/`);

  // wait for connection
  socket.addEventListener('open', function() {
    elmSocketStatus.setAttribute('state', 'opened');
    // Send login info
    socket.send(JSON.stringify({
      type: 'login',
      userName,
    }));
  });

  // If the connection is lost, update the ui to show it.
  socket.addEventListener('close', function() {
    elmSocketStatus.setAttribute('state', 'closed');
  });

  // If the connection is lost, update the ui to show it.
  socket.addEventListener('message', function(event) {
    let payload;
    try {
      payload = JSON.parse(event.data);
    }
    catch(e) {
      throw new Error('Could not parse message', event);
      return;
    }

    console.log('message', payload);
    switch (payload.type) {
      case 'response-roll':
        updateRolls(payload);
        break;
      default:
        // ignore
    }
  });
});

function updateRolls(diceRoll) {
  return bind(elmOutput)`<div class="dice-result">${
    diceRoll.dice.map((diceResult) => {
      return diceFate(diceResult);
    })
  }</div>`;
  // elmOutput.value = `${userName} rolled a ${total}\n` + elmOutput.value;
}
