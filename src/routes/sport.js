'use strict';
const express = require('express');
const sportRouter = express.Router();
const { sport } = require('../models');


const socketEmit = require('../sockets/eventEmitter');

sportRouter.get('/sport', async (req, res, next) => {
  let allSports = await sport.read();
  res.status(200).json(allSports);
});

sportRouter.get('/sport/:id', async (req, res, next) => {
  let info = await sport.read(req.params.id);
  res.status(200).json(info);
});


sportRouter.post('/sport', async (req, res, next) => {
  let newSport = await sport.create(req.body);
  socketEmit('New Event', req.body);
  res.status(200).json(newSport);
});

sportRouter.put('/sport/:id', async (req, res, next) => {
  let info = await sport.update(req.params.id, req.body);
  socketEmit('Update', req.body);
  res.status(200).json(info);
});

sportRouter.delete('/sport/:id', async (req, res, next) => {
  let info = await sport.delete(req.params.id);
  socketEmit('Event Canceled', req.body);
  res.status(200).json(info);
});

module.exports = sportRouter;
