// 'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3004/messages');
const inquirer = require('inquirer');

let roomChoices = ['Football', 'Baseball', 'Basketball', 'Soccer'];

const joinRoom = () => {
  inquirer.prompt({
    name: 'join',
    message: 'What room would you like to join?',
    type: 'list',
    choices: roomChoices,
  }).then(function (answer) {
    let room = answer.join;
    let index = roomChoices.indexOf(room);
    roomChoices.splice(index, 1);
    socket.emit('JOIN', room);
    console.log(`You have joined the ${room} room.`)
    if(roomChoices.length === 0){
      console.log('No more rooms to join at this time.');
      return;
    }
    inquirer.prompt({
      name: 'joinCont',
      message: 'Would you like to join another room?',
      type: 'list',
      choices: ['Yes', 'No'],
    }).then(function (answer) {
      if (answer.joinCont === 'Yes') {
        joinRoom();
      } else {
        return;
      }
    });
  });

};

joinRoom();

const listener = (args) => {
  console.log(args);
};

socket.on('event', listener);
