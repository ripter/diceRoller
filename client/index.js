import { bind, wire } from 'hyperHTML';
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
  document.body.setAttribute('state', 'pending');
  window.socket = socket = new WebSocket(`ws:/${location.host}/websocket`);

  socket.addEventListener('error', function(event) {
    console.error('Socket Error', event);
  });

  // wait for connection
  socket.addEventListener('open', function() {
    // Send login info
    socket.send(JSON.stringify({
      type: 'login',
      userName,
    }));
  });

  // If the connection is lost, update the ui to show it.
  socket.addEventListener('close', function() {
    document.body.setAttribute('state', 'closed');
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

    switch (payload.type) {
      case 'response-roll':
        updateRolls(payload);
        break;
      case 'response-login':
        login();
        break;
      default:
        console.log('message', payload);
    }
  });
});

function updateRolls(diceRoll) {
  const { userName, total, dice } = diceRoll;

  const elmItem = wire()`<div class="dice-log-item">
  <div class="dice-overview">
    <h1>${userName} rolled a ${total}</h1>
  </div>
  <div class="dice-result">${
    dice.map((diceResult) => {
      return diceFate(diceResult);
    })
  }</div>
  </div>`;

  elmOutput.prepend(elmItem);
  // elmOutput.value = `${userName} rolled a ${total}\n` + elmOutput.value;
}


function login() {
  document.body.setAttribute('state', 'opened');
}
