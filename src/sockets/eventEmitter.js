'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3004/messages');
// const socket = io(`${process.env.SOCKETPORT}/messages` || 'http://localhost:3004/messages');


function socketEmit(eventStr, eventData) {
  console.log('SocketEmit function call');
  const payload = { 
    eventStr: eventStr,
    eventData: eventData,
  };
  socket.emit('GAME-ALERT', payload);
  console.log('WE GOT eventData', eventData);
}

module.exports = socketEmit;
