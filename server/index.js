const express = require('express');
const app = express();
const PORT = process.env.PORT || 19414;
const SOCKET_PORT = process.env.SOCKET_PORT || 26487;

const { roll1dF, toTotal } = require('./rollFateDice.js');

const expressWs = require('express-ws')(app, null, {
  wsOptions: {
    port: SOCKET_PORT,
  }
});
// static assests from /public
app.use('/', express.static('public'));
// allow cross origin calls
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// URL for WebSocket
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    // console.log('onMessage: ', msg);
    let payload;
    try {
      payload = JSON.parse(msg);
    }
    catch(e) {
      console.log('\nERROR:\t', e);
      return;
    }

    switch (payload.type) {
      case 'roll':
        rollDice(ws, payload.userName);
        break;
      case 'login':
        login(ws, payload.userName);
        break;
      default:
        sendError(ws, `Unknown payload.type: "${payload.type}"`);
    }
  });
  // ws.on('close', function(msg) {
  //   console.log('onClose: ', msg);
  // });
});

function login(socket, userName) {
  socket.send(JSON.stringify({
    type: 'response-login',
    userName,
  }));
}

function rollDice(socket, userName) {
  const dice = roll1dF();

  expressWs.getWss().clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'response-roll',
      userName,
      dice,
      total: dice.reduce(toTotal),
    }));
  });
}

function sendError(socket, message) {
  socket.send(JSON.stringify({
    type: 'error',
    message,
  }));
  console.log('\nERROR:\t', message);
}

console.log('Server on PORT:', PORT);
app.listen(PORT);
