'use strict';

const express = require('express');
const authRouter = express.Router();
const { user } = require('../models');
const basicAuth = require('../auth/basic');
const bearerAuth = require('../auth/bearer');
const permissions = require('../auth/acl');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await user.create(req.body);
    const output = {
      users: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);
  } catch (error) {
    next (error.message);
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  const users = {
    users: req.users,
    token: req.user.token,
  };
  res.status(200).json(users);
});

authRouter.get('/users', bearerAuth, permissions('delete'), async(req, res, next) =>{
  const userRecords = await user.findAll({});
  const list = userRecords.map(users => users.username);
  res.status(200).json(list);
});

module.exports = authRouter;
