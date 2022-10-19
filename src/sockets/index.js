'use strict';

const { Server } = require('socket.io');
const SOCKETPORT = process.env.SOCKETPORT || 3004;
const server = new Server(SOCKETPORT);
const messages = server.of('/messages');

// const { io } = require('socket.io-client');



//subscribe and publish
///server hub some sort of emit to 
console.log('Listening SOCKET PORT');


server.on('connection', (socket) => {
  console.log('SOCKET CONNECTED', socket.id);
  socket.on('GAME-ALERT', (payload) => {
    console.log('PROOF OF LIFE', payload);
  });
});

