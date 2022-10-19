'use strict';

const { Server } = require('socket.io');
const SOCKETPORT = process.env.SOCKETPORT || 3004;
const server = new Server(SOCKETPORT);
const messages = server.of('/messages');





//subscribe and publish
///server hub some sort of emit to 
console.log('Listening SOCKET PORT', SOCKETPORT);


messages.on('connection', (socket) => {
  console.log('SOCKET CONNECTED', socket.id);
  socket.onAny((event, payload) => {
    const date = new Date();
    const time = date.toTimeString();
    console.log('EVENT', {event, time, payload});
  });
  socket.on('GAME-ALERT', (payload) => {
    console.log('PROOF OF LIFE', payload);
  });

  // socket.broadcast.emit('')
});

module.exports = SOCKETPORT;