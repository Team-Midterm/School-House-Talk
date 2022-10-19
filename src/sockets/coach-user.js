'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3003/messages');


function socketEmit(payload) {
  console.log('SocketEmit function call');
  socket.emit('GAME-ALERT', payload);
  console.log('WE GOT PAYLOAD', payload);
}

module.exports = socketEmit;
