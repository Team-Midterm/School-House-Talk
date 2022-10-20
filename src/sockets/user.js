// 'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3004/messages');

socket.emit('JOIN', 'Football');
socket.emit('JOIN', 'Soccer');
socket.emit('JOIN', 'Baseball');
socket.emit('JOIN', 'Basketball');

const listener = (args) => {
  console.log(args);
};

socket.on('event', listener);
