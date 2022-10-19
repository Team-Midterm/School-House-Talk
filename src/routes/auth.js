'use strict';

const express = require('express');
const authRouter = express.Router();
const { users } = require('../models');
const basicAuth = require('../auth/basic');
const bearerAuth = require('../auth/bearer');
const permissions = require('../auth/acl');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
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
    user: req.user,
    token: req.user.token,
  };
  res.status(200).json(users);
});

authRouter.get('/users', bearerAuth, permissions('delete'), async(req, res, next) =>{
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
});

module.exports = authRouter;
