'use strict';
const inquirer = require ('inquirer');
const axios = require ('axios');
const socketEmit = require('./src/sockets/eventEmitter');

const questions1 = [
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

// const questions2 = [
//   {
//     type: 'input',
//     name: 'check',
//     message: 'Need to reschedule a game?',
//   },
// ];

inquirer.prompt(questions1)
  .then(async (ans) => {
    let tempID = ans.id;
    delete ans.id;
    // console.log(JSON.stringify(ans, null, ' '));
    axios.put(`http://localhost:3001/sport/${tempID}`, ans);

    let passData = await axios.get(`http://localhost:3001/sport/${tempID}`);

    console.log('my info to pass', passData.data);
    socketEmit('Update', passData.data);
    return;
  });


// inquirer.prompt(questions2)
//   .then((ans2) => {
//     console.log('checking obj in 2', ans2);

//     inquirer.prompt(questions1)
//       .then(async (ans) => {
//         let tempID = ans.id;
//         delete ans.id;
//         console.log('check the id', tempID);
//         console.log(JSON.stringify(ans, null, ' '));
//         // axios.put(`http://localhost:3001/sport/${tempID}`, ans);
//         console.log('check the ans', ans);
//         // let passData = await axios.get(`http://localhost:3001/sport/${tempID}`);
        
//         // console.log('my info to pass', passData.data);
//         // socket.emit('GAME-ALERT', passData.data);
//       });
//   });