'use strict';
const inquirer = require ('inquirer');
const { Socket } = require('socket.io-client');
const axios = require ('axios').default;

const questions = [
  {
    type: 'input',
    name: 'id',
    message: 'What is the Sporting Event ID#?',
  },
  {
    type: 'list',
    name: 'sport',
    message: 'Pick a sport to update',
    choices: ['Football',
      'Baseball',
      'Basketball',
      'Soccer'],
    
  },
  {
    type: 'input',
    name: 'date',
    message: 'Input a date. (ex. "11-01-22")',
  },
  {
    type: 'input',
    name: 'time',
    message: 'What time is the game?',
  },
  {
    type: 'input',
    name: 'opponent',
    message: 'Name of opposing team?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Game location? (enter school name)',
  },
];

inquirer.prompt(questions)
  .then((ans) => {
    console.log('what is the format', ans);
    let tempID;
    tempID = ans.id;
    console.log('infos', tempID);
    delete ans.id;
    console.log(JSON.stringify(ans, null, ' '));

    // Socket.emit('Update a SPORT GAME', ans);
    axios.put(`/sport/${tempID}`, (ans));

  });


