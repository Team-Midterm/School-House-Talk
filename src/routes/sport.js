'use strict';

const express = require('express');
const { Socket } = require('socket.io-client');
const sportRouter = express.Router();
const { sport } = require('../models');
//bring in socket client-lives somewhere else
// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3003/messages');

const socketEmit = require('../sockets/coach-user.js');

sportRouter.get('/sport', async (req, res, next) => {
  let allSports = await sport.read();
  res.status(200).json(allSports);
});

sportRouter.get('/sport/:id', async (req, res, next) => {
  let info = await sport.read(req.params.id);
  res.status(200).json(info);
});

//payload = game info, maybe user info if text or email
sportRouter.post('/sport', async (req, res, next) => {
  let newSport = await sport.create(req.body);
  // socket.emit('GAME-ALERT');
  socketEmit(req.body);
  console.log('sports.js after socket emit in post');
  res.status(200).json(newSport);
});

sportRouter.put('/sport/:id', async (req, res, next) => {
  let info = await sport.update(req.params.id, req.body);
  res.status(200).json(info);
});

sportRouter.delete('/sport/:id', async (req, res, next) => {
  let info = await sport.delete(req.params.id);
  res.status(200).json(info);
});

module.exports = sportRouter;
