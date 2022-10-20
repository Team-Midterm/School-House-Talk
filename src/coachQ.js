'use strict';
require('dotenv').config();
const inquirer = require ('inquirer');
const axios = require ('axios');
const socketEmit = require('./sockets/eventEmitter');
// const SOCKETPORT = require('./sockets');
const PORT = process.env.PORT || 3002;
// const bearer = require('./auth/bearer');


const questionDecide = [
  {
    type: 'list',
    name: 'decision',
    message: 'What would you like to do Coach?',
    choices: ['Create entirely new sporting Event.',
      'Modify an event already scheduled.',
      'Delete a sporting event.'],
  },
];

const questionModify = [
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

const questionDelete = [
  {
    type: 'input',
    name: 'id',
    message: 'What is the Sporting Event ID#?',
  },
];

const questionCreate = [
  {
    type: 'list',
    name: 'sport',
    message: 'What sport is the new event for?',
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

const reAskQ = () => {
  inquirer.prompt(questionDecide)
    .then((ans2) => {
      if (ans2.decision === 'Modify an event already scheduled.') {
        inquirer.prompt(questionModify)
          .then(async (ans) => {
            let tempID = ans.id;
            delete ans.id;
            await axios.put(`http://localhost:${PORT}/sport/${tempID}`, ans);
            // let passData = await axios.get(`http://localhost:${PORT}/sport/${tempID}`);
            // socketEmit('Update', passData.data);
            reAskQ();
          });
        return;
      } else if (ans2.decision === 'Delete a sporting event.') {
        inquirer.prompt(questionDelete)
          .then(async (ans) => {
            let tempID = ans.id;
            let passData = await axios.get(`http://localhost:${PORT}/sport/${tempID}`);
            await axios.delete(`http://localhost:${PORT}/sport/${tempID}`);
            socketEmit('Event Cancel', passData.data);
            reAskQ();
          });
      } else if (ans2.decision === 'Create entirely new sporting Event.' ) {
        inquirer.prompt(questionCreate)
          .then(async (ans) => {
            await axios.post(`http://localhost:${PORT}/sport/`, ans);
            // socketEmit('New Event', ans);
            reAskQ();
          });
      }
    });
};

// const reAskQ = () => {
//   inquirer.prompt(questionDecide)
//     .then((ans2) => {
//       if (ans2.decision === 'Modify an event already scheduled.') {
//         inquirer.prompt(questionModify)
//           .then(async (ans) => {
//             let tempID = ans.id;
//             delete ans.id;
//             axios.put(`${doURL}/sport/${tempID}`, ans);
//             let passData = await axios.get(`${doURL}/sport/${tempID}`);
//             socketEmit('Update', passData.data);
//             reAskQ();
//           });
//         return;
//       } else if (ans2.decision === 'Delete a sporting event.') {
//         inquirer.prompt(questionDelete)
//           .then(async (ans) => {
//             let tempID = ans.id;
//             let passData = await axios.get(`${doURL}/sport/${tempID}`);
//             await axios.delete(`${doURL}/sport/${tempID}`);
//             socketEmit('Event Cancel', passData.data);
//             reAskQ();
//           });
//       } else if (ans2.decision === 'Create entirely new sporting Event.' ) {
//         inquirer.prompt(questionCreate)
//           .then(async (ans) => {
//             await axios.post(`${doURL}/sport/`, ans);
//             socketEmit('New Event', ans);
//             reAskQ();
//           });
//       }
//     });
// };

reAskQ();
