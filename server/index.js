const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const PORT = process.env.PORT || 3000;

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
    console.log('onMessage: ', msg);

    setTimeout(function() {
      ws.send('pong!');
    }, 1000);
  });
  ws.on('close', function(msg) {
    console.log('onClose: ', msg);
  });
  console.log('socket', req.testing);
});

app.listen(PORT);
